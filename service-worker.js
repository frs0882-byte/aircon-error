const CACHE_NAME = 'hvac-error-cache-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './error-data.js',
  './qrcode.min.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './app-icon-header.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 指定ミリ秒以内にネットワーク応答がなければタイムアウトさせる（パケ詰まり現場対策）
function fetchWithTimeout(request, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Network timeout'));
    }, timeoutMs);

    fetch(request).then((response) => {
      clearTimeout(timer);
      resolve(response);
    }).catch((err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

// オンライン時は最新取得＆キャッシュ更新、圏外・微弱電波(1.2秒超過)時は即座にキャッシュから起動
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 外部リソース（Google Fonts等）はキャッシュ優先＋バックグラウンド更新（失敗時はシステムフォントへフォールバック）
  if (url.origin !== self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetchWithTimeout(event.request, 1500).then((res) => {
          if (res && res.status === 200) {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
          }
          return res;
        }).catch(() => cached || new Response('', { status: 408, statusText: 'Offline' }));

        return cached || networkFetch;
      })
    );
    return;
  }

  // 同一オリジン（アプリ本体）：1.2秒タイムアウト付き Network-First
  event.respondWith(
    fetchWithTimeout(event.request, 1200).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        const resClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, resClone);
        });
      }
      return networkResponse;
    }).catch(() => {
      return caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        // ページ遷移リクエストのみ index.html へフォールバック（CSS/JS誤返却を防止）
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
