/**
 * HVAC エラーコード即引きツール - アプリケーションロジック
 */

(function () {
  "use strict";

  // 状態管理
  const state = {
    currentMaker: "all",
    searchQuery: "",
    activeSymptom: null,
    currentTab: "all", // 'all' or 'favorites'
    recentSearches: [],
    favorites: [],
    theme: "dark",
    keypadOpen: false
  };

  // DOM要素キャッシュ
  const DOM = {
    themeToggleBtn: document.getElementById("btn-theme-toggle"),
    themeIcon: document.getElementById("theme-icon"),
    makerTabsContainer: document.getElementById("maker-tabs-container"),
    searchInput: document.getElementById("error-search-input"),
    clearSearchBtn: document.getElementById("btn-clear-search"),
    toggleKeypadBtn: document.getElementById("btn-toggle-keypad"),
    onscreenKeypad: document.getElementById("onscreen-keypad"),
    keypadGrid: document.getElementById("keypad-grid"),
    symptomDrumSelect: document.getElementById("symptom-drum-select"),
    clearSymptomBtn: document.getElementById("btn-clear-symptom"),
    recentChipsContainer: document.getElementById("recent-chips-container"),
    tabAllResults: document.getElementById("tab-all-results"),
    tabFavorites: document.getElementById("tab-favorites"),
    resultCount: document.getElementById("result-count"),
    favCount: document.getElementById("fav-count"),
    resultsContainer: document.getElementById("results-container"),
    toast: document.getElementById("toast"),
    // 共有モーダル関連
    shareToolBtn: document.getElementById("btn-share-tool"),
    shareModal: document.getElementById("share-modal"),
    closeModalBtn: document.getElementById("btn-close-modal"),
    qrcodeContainer: document.getElementById("share-qrcode-container"),
    shareUrlInput: document.getElementById("share-url-input"),
    copyUrlBtn: document.getElementById("btn-copy-url"),
    nativeShareBtn: document.getElementById("btn-native-share")
  };

  // 初期化
  function init() {
    loadSettings();
    renderMakerTabs();
    renderKeypad();
    syncSymptomDrumUI();
    renderRecentChips();
    setupEventListeners();
    updateThemeUI();
    updateFavCount();
    performSearch();
  }

  // 設定読み込み（LocalStorage）
  function loadSettings() {
    try {
      const savedTheme = localStorage.getItem("hvac_theme");
      if (savedTheme) state.theme = savedTheme;

      const savedRecent = localStorage.getItem("hvac_recent");
      if (savedRecent) state.recentSearches = JSON.parse(savedRecent);

      const savedFavs = localStorage.getItem("hvac_favs");
      if (savedFavs) state.favorites = JSON.parse(savedFavs);

      const savedMaker = localStorage.getItem("hvac_maker");
      if (savedMaker) state.currentMaker = savedMaker;

      const savedKeypad = localStorage.getItem("hvac_keypad");
      if (savedKeypad !== null) state.keypadOpen = savedKeypad === "true";
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  // 設定保存
  function saveState(key, value) {
    try {
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  // 文字列の正規化（全角英数→半角英数、大文字化）
  function normalizeText(text) {
    if (!text) return "";
    return text
      .replace(/[！-～]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
      .trim()
      .toUpperCase();
  }

  // メーカータブ描画
  function renderMakerTabs() {
    DOM.makerTabsContainer.innerHTML = MAKERS.map((m) => {
      const isActive = m.id === state.currentMaker ? "active" : "";
      return `
        <button class="maker-tab ${isActive}" data-maker="${m.id}">
          <span>${m.name}</span>
        </button>
      `;
    }).join("");
  }

  // オンスクリーンキーパッド描画（左：英字、右：数字テンキー）
  function renderKeypad() {
    const alphaHtml = (typeof KEYPAD_ALPHA_KEYS !== "undefined" ? KEYPAD_ALPHA_KEYS : []).map((k) => {
      const wideCls = k.span === "wide" ? "key-span-wide" : "";
      return `<button class="keypad-key letter-key ${wideCls}" data-char="${k.char}" title="${k.char}">${k.char}</button>`;
    }).join("");

    const numHtml = (typeof KEYPAD_NUM_KEYS !== "undefined" ? KEYPAD_NUM_KEYS : []).map((k) => {
      let actCls = "";
      if (k.action === "clear") actCls = "clear-key";
      else if (k.action === "backspace") actCls = "action-key";
      const label = k.label || k.char;
      const actionAttr = k.action ? `data-action="${k.action}"` : "";
      return `<button class="keypad-key ${actCls}" data-char="${k.char}" ${actionAttr} title="${label}">${label}</button>`;
    }).join("");

    DOM.keypadGrid.innerHTML = `
      <div class="keypad-split-wrapper">
        <!-- 左側：英字ブロック -->
        <div class="keypad-section keypad-alpha-section">
          <div class="keypad-section-header"><span>ALPHA</span></div>
          <div class="keypad-alpha-grid">
            ${alphaHtml}
          </div>
        </div>
        <!-- 中央ディバイダー -->
        <div class="keypad-vertical-divider" aria-hidden="true"></div>
        <!-- 右側：数字テンキーブロック -->
        <div class="keypad-section keypad-num-section">
          <div class="keypad-section-header"><span>NUMBER</span></div>
          <div class="keypad-num-grid">
            ${numHtml}
          </div>
        </div>
      </div>
    `;

    if (!state.keypadOpen) {
      DOM.onscreenKeypad.classList.add("hidden");
      DOM.toggleKeypadBtn.classList.remove("active");
    } else {
      DOM.onscreenKeypad.classList.remove("hidden");
      DOM.toggleKeypadBtn.classList.add("active");
    }
  }

  // 症状ドラムピックUI同期
  function syncSymptomDrumUI() {
    if (!DOM.symptomDrumSelect) return;
    if (state.activeSymptom) {
      DOM.symptomDrumSelect.value = state.activeSymptom;
      DOM.symptomDrumSelect.classList.add("active-selected");
      if (DOM.clearSymptomBtn) DOM.clearSymptomBtn.classList.remove("hidden");
    } else {
      DOM.symptomDrumSelect.value = "";
      DOM.symptomDrumSelect.classList.remove("active-selected");
      if (DOM.clearSymptomBtn) DOM.clearSymptomBtn.classList.add("hidden");
    }
  }

  // 履歴チップ描画
  function renderRecentChips() {
    if (!state.recentSearches.length) {
      DOM.recentChipsContainer.innerHTML = '<span style="font-size:0.75rem; color:var(--text-muted);">履歴なし</span>';
      return;
    }
    DOM.recentChipsContainer.innerHTML = state.recentSearches.map((code) => {
      return `<button class="recent-chip" data-code="${code}">${code}</button>`;
    }).join("");
  }

  // 検索処理
  function performSearch() {
    const rawQuery = DOM.searchInput.value.trim();
    const query = normalizeText(rawQuery);
    state.searchQuery = rawQuery;

    // クリアボタン表示制御
    DOM.clearSearchBtn.style.display = rawQuery ? "flex" : "none";

    let filtered = ERROR_DATABASE;

    // 1. メーカー絞り込み
    if (state.currentMaker !== "all") {
      filtered = filtered.filter((item) => item.maker === state.currentMaker);
    }

    // 2. お気に入りタブの絞り込み
    if (state.currentTab === "favorites") {
      filtered = filtered.filter((item) => state.favorites.includes(item.id));
    }

    // 3. 検索クエリ絞り込み
    if (query) {
      filtered = filtered.filter((item) => {
        const itemCode = normalizeText(item.code);
        const itemTitle = normalizeText(item.title);
        const itemDesc = normalizeText(item.description);
        const itemMaker = normalizeText(item.makerName);
        const itemUnit = normalizeText(item.unit);
        const itemKeywords = (item.keywords || []).map(k => normalizeText(k)).join(" ");
        const itemCauses = (item.possibleCauses || []).map(c => normalizeText(c)).join(" ");

        // コード完全一致または前方一致
        if (itemCode === query) return true;
        if (itemCode.startsWith(query)) return true;
        if (itemCode.includes(query)) return true;

        // タイトル・キーワード・原因・説明での部分一致
        return (
          itemTitle.includes(query) ||
          itemKeywords.includes(query) ||
          itemCauses.includes(query) ||
          itemDesc.includes(query) ||
          itemMaker.includes(query) ||
          itemUnit.includes(query)
        );
      });

      // 並び替え: コード完全一致 > コード前方一致 > その他
      filtered.sort((a, b) => {
        const aCode = normalizeText(a.code);
        const bCode = normalizeText(b.code);
        if (aCode === query && bCode !== query) return -1;
        if (bCode === query && aCode !== query) return 1;
        if (aCode.startsWith(query) && !bCode.startsWith(query)) return -1;
        if (bCode.startsWith(query) && !aCode.startsWith(query)) return 1;
        return 0;
      });
    }

    // カウント更新
    DOM.resultCount.textContent = filtered.length;
    renderResults(filtered);
  }

  // 検索履歴に追加
  function addRecentSearch(code) {
    if (!code) return;
    const cleanCode = normalizeText(code);
    state.recentSearches = [cleanCode, ...state.recentSearches.filter(c => c !== cleanCode)].slice(0, 8);
    saveState("hvac_recent", state.recentSearches);
    renderRecentChips();
  }

  // メーカー情報の取得
  function getMakerMeta(makerId) {
    return MAKERS.find(m => m.id === makerId) || { name: makerId, color: "#38bdf8", bg: "rgba(56,189,248,0.15)" };
  }

  // 検索結果カード描画
  function renderResults(list) {
    if (list.length === 0) {
      DOM.resultsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔎</div>
          <div class="empty-title">該当するエラーコードが見つかりません</div>
          <div class="empty-desc">
            コードの入力内容（英数字）またはメーカー選択（ダイキン、日立、パナソニック、東芝、三菱）をお確かめください。<br>
            「ドレン」「通信」「高圧」「サーミスタ」などの症状名でも検索できます。
          </div>
        </div>
      `;
      return;
    }

    DOM.resultsContainer.innerHTML = list.map((item) => {
      const isFav = state.favorites.includes(item.id);
      const maker = getMakerMeta(item.maker);

      // 緊急度ラベル
      const urgencyLabel = {
        high: "即時停止",
        medium: "機能制限 / 警報",
        low: "軽微 / お知らせ"
      }[item.urgency] || "点検要";

      // 原因箇条書き
      const causesHtml = (item.possibleCauses || []).map(cause => `
        <li class="cause-item">
          <span class="cause-icon">●</span>
          <span>${cause}</span>
        </li>
      `).join("");

      // 点検手順ステップ
      const stepsHtml = (item.checkPoints || []).map(cp => `
        <div class="step-card">
          <div class="step-header">
            <span class="step-num">STEP ${cp.step}</span>
            <span class="step-title">${cp.title}</span>
          </div>
          <div class="step-detail">${cp.detail}</div>
        </div>
      `).join("");

      // リセット方法
      const resetHtml = item.resetMethod ? `
        <div class="reset-box">
          <span class="reset-icon">⚡</span>
          <div class="reset-text"><strong>【リセット手順】</strong> ${item.resetMethod}</div>
        </div>
      ` : "";

      return `
        <article class="error-card" style="--card-brand-color: ${maker.color};" data-id="${item.id}">
          <header class="card-header">
            <div class="card-title-group">
              <span class="card-code">${item.code}</span>
              <div class="card-name-group">
                <span class="card-maker-badge">${item.makerName} [${item.maker.toUpperCase()}]</span>
                <h2 class="card-title">${item.title}</h2>
              </div>
            </div>
            <div class="card-badges">
              <span class="badge-unit">${item.unit}</span>
              <span class="badge-urgency ${item.urgency}">${urgencyLabel}</span>
            </div>
          </header>

          <!-- 症状概要 -->
          <div class="card-description">
            ${item.description}
          </div>

          <!-- 推定原因 -->
          <div class="card-section">
            <div class="card-section-title">
              <span>⚠️ 主な原因・推定故障箇所</span>
            </div>
            <ul class="causes-list">
              ${causesHtml}
            </ul>
          </div>

          <!-- 現場点検ステップ -->
          <div class="card-section">
            <div class="card-section-title">
              <span>🛠 現場点検手順・処置</span>
            </div>
            <div class="steps-list">
              ${stepsHtml}
            </div>
          </div>

          <!-- リセット方法 -->
          ${resetHtml}

          <!-- カードフッター -->
          <footer class="card-footer">
            <button class="btn-card-action btn-copy-card" data-id="${item.id}" title="現場報告用にコピー">
              📋 現場メモ用にコピー
            </button>
            <button class="btn-card-action btn-fav-card ${isFav ? "active" : ""}" data-id="${item.id}">
              <span>${isFav ? "★ 保存済み" : "☆ 保存"}</span>
            </button>
          </footer>
        </article>
      `;
    }).join("");
  }

  // お気に入り切り替え
  function toggleFavorite(id) {
    if (state.favorites.includes(id)) {
      state.favorites = state.favorites.filter(item => item !== id);
      showToast("保存を解除しました");
    } else {
      state.favorites.push(id);
      showToast("保存リストに追加しました");
    }
    saveState("hvac_favs", state.favorites);
    updateFavCount();
    performSearch();
  }

  function updateFavCount() {
    DOM.favCount.textContent = state.favorites.length;
  }

  // 現場メモ用にクリップボードコピー
  function copyCardData(id) {
    const item = ERROR_DATABASE.find(e => e.id === id);
    if (!item) return;

    const causesText = (item.possibleCauses || []).map((c, i) => `  ${i + 1}. ${c}`).join("\n");
    const stepsText = (item.checkPoints || []).map(s => `  [STEP${s.step}] ${s.title}: ${s.detail}`).join("\n");

    const textToCopy = `【空調エラー速報】
■メーカー: ${item.makerName}
■コード: ${item.code} (${item.unit})
■異常名: ${item.title}
■症状: ${item.description}

■推定原因:
${causesText}

■現場チェック手順:
${stepsText}

■リセット方法: ${item.resetMethod || "電源ブレーカーOFF→再投入"}
---
(HVAC エラーコード即引きツール)`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("報告用テキストをコピーしました！");
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
      showToast("報告用テキストをコピーしました！");
    } catch (err) {
      alert("コピーに失敗しました。手動で選択してください。");
    }
    document.body.removeChild(ta);
  }

  // トースト表示
  let toastTimer = null;
  function showToast(msg) {
    DOM.toast.textContent = msg;
    DOM.toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toast.classList.remove("show");
    }, 2000);
  }

  // テーマ切替
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState("hvac_theme", state.theme);
    updateThemeUI();
  }

  function updateThemeUI() {
    if (state.theme === "light") {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      DOM.themeIcon.textContent = "🌙";
    } else {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      DOM.themeIcon.textContent = "☀️";
    }
  }

  let qrInstance = null;
  function openShareModal() {
    const currentUrl = window.location.href;
    DOM.shareUrlInput.value = currentUrl;
    DOM.shareModal.style.display = "flex";

    // QRコード動的生成
    if (typeof QRCode !== "undefined") {
      DOM.qrcodeContainer.innerHTML = "";
      qrInstance = new QRCode(DOM.qrcodeContainer, {
        text: currentUrl,
        width: 190,
        height: 190,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    } else {
      DOM.qrcodeContainer.innerHTML = '<span style="color:#000; font-size:0.8rem;">QR生成エラー</span>';
    }
  }

  function closeShareModal() {
    DOM.shareModal.style.display = "none";
  }

  // イベントリスナー設定
  function setupEventListeners() {
    // 共有モーダル開閉
    if (DOM.shareToolBtn) {
      DOM.shareToolBtn.addEventListener("click", openShareModal);
    }
    if (DOM.closeModalBtn) {
      DOM.closeModalBtn.addEventListener("click", closeShareModal);
    }
    if (DOM.shareModal) {
      DOM.shareModal.addEventListener("click", (e) => {
        if (e.target === DOM.shareModal) closeShareModal();
      });
    }

    // URLコピー
    if (DOM.copyUrlBtn) {
      DOM.copyUrlBtn.addEventListener("click", () => {
        const url = DOM.shareUrlInput.value;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            showToast("URLをコピーしました！");
          }).catch(() => fallbackCopy(url));
        } else {
          fallbackCopy(url);
        }
      });
    }

    // ネイティブ共有 (LINE, AirDrop等)
    if (DOM.nativeShareBtn) {
      DOM.nativeShareBtn.addEventListener("click", () => {
        const url = DOM.shareUrlInput.value;
        if (navigator.share) {
          navigator.share({
            title: "HVAC エラーコード即引きツール",
            text: "エアコンのエラーコードから原因・点検手順を即引きできる現場特化ツール",
            url: url
          }).catch(() => {});
        } else {
          // 未対応端末はURLコピー
          DOM.copyUrlBtn.click();
        }
      });
    }

    // テーマ切替
    DOM.themeToggleBtn.addEventListener("click", toggleTheme);

    // メーカータブ選択
    DOM.makerTabsContainer.addEventListener("click", (e) => {
      const tab = e.target.closest(".maker-tab");
      if (!tab) return;
      const maker = tab.dataset.maker;
      state.currentMaker = maker;
      saveState("hvac_maker", maker);

      // タブアクティブ切り替え
      DOM.makerTabsContainer.querySelectorAll(".maker-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      performSearch();
    });

    // 検索入力
    DOM.searchInput.addEventListener("input", () => {
      state.activeSymptom = null;
      syncSymptomDrumUI();
      performSearch();
    });

    // 検索入力エンターキーで履歴追加
    DOM.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        addRecentSearch(DOM.searchInput.value);
        DOM.searchInput.blur();
      }
    });

    // 入力クリア
    DOM.clearSearchBtn.addEventListener("click", () => {
      DOM.searchInput.value = "";
      state.activeSymptom = null;
      syncSymptomDrumUI();
      performSearch();
      DOM.searchInput.focus();
    });

    // キーパッド開閉トグル
    DOM.toggleKeypadBtn.addEventListener("click", () => {
      state.keypadOpen = !state.keypadOpen;
      saveState("hvac_keypad", state.keypadOpen);
      if (state.keypadOpen) {
        DOM.onscreenKeypad.classList.remove("hidden");
        DOM.toggleKeypadBtn.classList.add("active");
      } else {
        DOM.onscreenKeypad.classList.add("hidden");
        DOM.toggleKeypadBtn.classList.remove("active");
      }
    });

    // キーパッドタップ（英字入力・数字入力・クリア・バックスペース）
    DOM.keypadGrid.addEventListener("click", (e) => {
      const keyBtn = e.target.closest(".keypad-key");
      if (!keyBtn) return;
      const char = keyBtn.dataset.char;
      const action = keyBtn.dataset.action;

      if (action === "backspace" || char === "BS") {
        // 1文字消去（バックスペース）
        DOM.searchInput.value = DOM.searchInput.value.slice(0, -1);
      } else if (action === "clear" || char === "CLR") {
        // 全消去（クリア）
        DOM.searchInput.value = "";
      } else if (char) {
        // 文字・数字入力
        DOM.searchInput.value += char;
      }

      state.activeSymptom = null;
      syncSymptomDrumUI();
      performSearch();

      // 2文字以上なら履歴にも反映
      if (DOM.searchInput.value.length >= 2) {
        addRecentSearch(DOM.searchInput.value);
      }
    });

    // 症状ドラムピック変更イベント
    if (DOM.symptomDrumSelect) {
      DOM.symptomDrumSelect.addEventListener("change", (e) => {
        const query = e.target.value;
        if (query) {
          state.activeSymptom = query;
          DOM.searchInput.value = query;
          DOM.symptomDrumSelect.classList.add("active-selected");
          if (DOM.clearSymptomBtn) DOM.clearSymptomBtn.classList.remove("hidden");
        } else {
          state.activeSymptom = null;
          DOM.searchInput.value = "";
          DOM.symptomDrumSelect.classList.remove("active-selected");
          if (DOM.clearSymptomBtn) DOM.clearSymptomBtn.classList.add("hidden");
        }
        performSearch();
      });
    }

    // 症状ドラムピック解除ボタン
    if (DOM.clearSymptomBtn) {
      DOM.clearSymptomBtn.addEventListener("click", () => {
        state.activeSymptom = null;
        DOM.symptomDrumSelect.value = "";
        DOM.searchInput.value = "";
        DOM.clearSymptomBtn.classList.add("hidden");
        DOM.symptomDrumSelect.classList.remove("active-selected");
        performSearch();
      });
    }

    // 履歴チップクリック
    DOM.recentChipsContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".recent-chip");
      if (!chip) return;
      const code = chip.dataset.code;
      DOM.searchInput.value = code;
      state.activeSymptom = null;
      syncSymptomDrumUI();
      performSearch();
    });

    // タブ切替（すべて vs 保存済み）
    DOM.tabAllResults.addEventListener("click", () => {
      state.currentTab = "all";
      DOM.tabAllResults.classList.add("active");
      DOM.tabFavorites.classList.remove("active");
      performSearch();
    });

    DOM.tabFavorites.addEventListener("click", () => {
      state.currentTab = "favorites";
      DOM.tabFavorites.classList.add("active");
      DOM.tabAllResults.classList.remove("active");
      performSearch();
    });

    // カード内アクション（コピー・お気に入り）
    DOM.resultsContainer.addEventListener("click", (e) => {
      const copyBtn = e.target.closest(".btn-copy-card");
      if (copyBtn) {
        const id = copyBtn.dataset.id;
        copyCardData(id);
        copyBtn.classList.add("copied");
        setTimeout(() => copyBtn.classList.remove("copied"), 1500);
        return;
      }

      const favBtn = e.target.closest(".btn-fav-card");
      if (favBtn) {
        const id = favBtn.dataset.id;
        toggleFavorite(id);
        return;
      }
    });
  }

  // 起動
  document.addEventListener("DOMContentLoaded", init);
})();
