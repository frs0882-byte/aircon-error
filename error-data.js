/**
 * HVAC エラーコード即引きツール - マスターデータベース
 * 対象メーカー: ダイキン (Daikin), パナソニック (Panasonic), 東芝 (Toshiba Carrier), 三菱 (Mitsubishi Electric / Heavy)
 * 全データは各メーカー公式サービスハンドブック・技術資料に完全準拠
 */

const ERROR_DATABASE = [
  {
    "id": "daikin-a0",
    "code": "A0",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "外部保護装置作動",
    "urgency": "high",
    "description": "室内機制御基板の外部保護入力端子に接続された保護装置（非常停止、外付けサーモ等）が作動、または端子短絡コネクタが抜けています。",
    "possibleCauses": [
      "外部保護機器（排気連動、火報連動、フロート等）の作動",
      "基板コネクタ（T1-T2短絡線等）の抜け・緩み",
      "外来ノイズによるマイコン誤検知"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "外部入力配線・短絡線の確認",
        "detail": "室内基板の外部保護入力端子（短絡線）が確実に挿入・導通しているかテスターで確認。"
      },
      {
        "step": 2,
        "title": "連動機器の作動確認",
        "detail": "換気扇連動スイッチや防災盤連動の接点が開路状態になっていないか確認。"
      }
    ],
    "resetMethod": "外部接点復帰後、リモコンの運転/停止でリセット。",
    "keywords": [
      "A0",
      "外部保護",
      "非常停止",
      "インターロック",
      "短絡線"
    ]
  },
  {
    "id": "daikin-a1",
    "code": "A1",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内機プリント基板異常",
    "urgency": "high",
    "description": "室内機制御基板のマイコン不良、または外来ノイズ等によるプログラム演算エラーを検知して停止しています。",
    "possibleCauses": [
      "室内機プリント基板の不良（マイコン・メモリ異常）",
      "外来ノイズによるマイコン誤動作",
      "基板コネクタの接触不良・抜け"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源リセット復帰確認",
        "detail": "電源ブレーカーをOFFにし、約3分待機後に再投入して正常復帰するか確認。"
      },
      {
        "step": 2,
        "title": "基板コネクタと配線の点検",
        "detail": "各コネクタ（ファン、サーミスタ、フラップ等）の緩み・挟み込みがないか確認。"
      },
      {
        "step": 3,
        "title": "基板交換",
        "detail": "電源再投入後も直ちにA1が表示される場合は、室内機プリント基板を交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後ON。またはリモコンの運転/停止。",
    "keywords": [
      "基板",
      "マイコン",
      "室内",
      "ノイズ",
      "メモリ"
    ]
  },
  {
    "id": "daikin-a3",
    "code": "A3",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "ドレン水位異常（フロートスイッチ作動）",
    "urgency": "high",
    "description": "室内機ドレンパン内の水位が規定レベルまで上昇し、フロートスイッチが作動したため水漏れ防止で停止しています。",
    "possibleCauses": [
      "ドレンポンプ故障（モータロック・断線・経年劣化）",
      "ドレン配管の詰まり（スライム、埃、汚れ）",
      "ドレン配管の逆勾配、エア噛み、トラップ不良",
      "フロートスイッチの固着・接点不良",
      "室内機基板のポンプ出力リレー不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレンパン内水位確認",
        "detail": "点検口からドレンパンを目視確認。満水なら排水系統不良、水がないのに発報ならフロートSW誤検知。"
      },
      {
        "step": 2,
        "title": "フロートスイッチ導通・固着点検",
        "detail": "フロートを手で押し上げてスムーズに動くか確認。テスターで接点開閉を導通チェック。"
      },
      {
        "step": 3,
        "title": "ドレンポンプ単体測定",
        "detail": "コネクタを外し端子間抵抗（通常数百Ω）を測定。通電時に回転しているか確認。"
      },
      {
        "step": 4,
        "title": "ドレン配管バキューム清掃",
        "detail": "吸引ポンプ等でスライムを除去し、試験通水を実施。"
      }
    ],
    "resetMethod": "ドレンパン排水後、電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "ドレン",
      "水位",
      "フロート",
      "水漏れ",
      "排水",
      "スライム",
      "ポンプ",
      "満水"
    ]
  },
  {
    "id": "daikin-a4",
    "code": "A4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内熱交温度異常（凍結保護）",
    "urgency": "medium",
    "description": "冷房運転中に室内熱交換器の温度が著しく低下（0℃以下等）し、凍結防止機能が作動しました。",
    "possibleCauses": [
      "室内エアフィルターの激しい目詰まり（風量不足）",
      "室内ファンモータの回転低下・停止",
      "冷媒ガス不足（蒸発温度低下）",
      "室内熱交サーミスタの外れ・特性不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "エアフィルター清掃",
        "detail": "フィルターに埃が堆積していないか確認・清掃。"
      },
      {
        "step": 2,
        "title": "室内ファンの風量確認",
        "detail": "強運転で十分な風量が出ているか確認。"
      },
      {
        "step": 3,
        "title": "ガス圧力測定",
        "detail": "マニホールドゲージで低圧圧力を測定し、ガス漏れがないか確認。"
      }
    ],
    "resetMethod": "フィルター清掃・氷解凍後、リモコン運転再開。",
    "keywords": [
      "凍結",
      "熱交",
      "風量不足",
      "フィルター目詰まり",
      "ガス欠"
    ]
  },
  {
    "id": "daikin-a5",
    "code": "A5",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内熱交高圧保護 / 冷媒過充填",
    "urgency": "high",
    "description": "暖房運転時に室内熱交換器の温度が異常上昇したため、高圧保護が作動しました。",
    "possibleCauses": [
      "室内吸込口・吹出口の閉塞（ショートサーキット）",
      "室内フィルターの激しい目詰まり",
      "室内熱交サーミスタ不良",
      "冷媒過充填"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室内吹出口の確認",
        "detail": "ルーバー前の障害物やフィルター目詰まりの解消。"
      },
      {
        "step": 2,
        "title": "サーミスタ抵抗測定",
        "detail": "室内熱交サーミスタの抵抗値を測定。"
      }
    ],
    "resetMethod": "冷却後、リモコン再起動。",
    "keywords": [
      "暖房高圧",
      "室内熱交",
      "過充填",
      "ショートサーキット"
    ]
  },
  {
    "id": "daikin-a6",
    "code": "A6",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内ファンモータ異常（ファンロック・過電流）",
    "urgency": "high",
    "description": "室内ファンモータの回転数が検出できない、または過電流・拘束（ロック）を検知して停止しました。",
    "possibleCauses": [
      "ファンモータ不良（軸受固着・モータロック・コイル焼損）",
      "シロッコファン等への異物噛み込み",
      "室内ファン用プリント基板の不良",
      "モータコネクタの接触不良・抜け"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し確認",
        "detail": "電源OFFでシロッコファンを手で回し、引っ掛かりやベアリングの重さがないか確認。"
      },
      {
        "step": 2,
        "title": "コネクタ・配線確認",
        "detail": "基板側コネクタの半抜けやピンの曲がりを確認。"
      },
      {
        "step": 3,
        "title": "モータ巻線抵抗測定",
        "detail": "相間抵抗値が均等であるかテスターで測定。"
      }
    ],
    "resetMethod": "異物除去またはモータ交換後、電源リセット。",
    "keywords": [
      "ファン",
      "モータ",
      "室内ファン",
      "シロッコ",
      "ロック",
      "拘束"
    ]
  },
  {
    "id": "daikin-a7",
    "code": "A7",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "スイングフラップモータ異常（ルーバー不良）",
    "urgency": "low",
    "description": "吹出フラップ（ルーバー）用ステッピングモータの回転やリミットスイッチの動作が検知できません。",
    "possibleCauses": [
      "フラップモータの故障",
      "フラップのカム・リンク部の機械的破損や外れ",
      "モータコネクタの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ルーバーの目視点検",
        "detail": "手動で無理に動かされていないか、リンク外れがないか確認。"
      },
      {
        "step": 2,
        "title": "モータ巻線抵抗測定",
        "detail": "各コイル間の抵抗値をテスターで測定。"
      }
    ],
    "resetMethod": "部品交換または再接続後、リモコン運転再開。",
    "keywords": [
      "フラップ",
      "ルーバー",
      "スイング",
      "羽",
      "モータ"
    ]
  },
  {
    "id": "daikin-a8",
    "code": "A8",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "電源電圧異常（室内機電源低下）",
    "urgency": "high",
    "description": "室内機への供給電源電圧の著しい低下、または過電圧を検知しました。",
    "possibleCauses": [
      "室内機電源電圧の降下（長距離配線・容量不足）",
      "電源端子台の緩み・接触不良",
      "室内機基板の電圧検出回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源端子電圧測定",
        "detail": "室内機端子台でAC電圧（定格200Vまたは100V±10%以内か）測定。"
      }
    ],
    "resetMethod": "電圧正常化後、電源再投入。",
    "keywords": [
      "室内電源",
      "電圧異常",
      "電圧低下"
    ]
  },
  {
    "id": "daikin-a9",
    "code": "A9",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "電子膨張弁駆動異常（室内機EV）",
    "urgency": "medium",
    "description": "室内機の電子膨張弁コイルの通電異常、パルスモータの断線・ショートを検知しています。",
    "possibleCauses": [
      "電子膨張弁コイルの断線・短絡",
      "コネクタの接触不良・外れ",
      "室内機制御基板の駆動回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コイル抵抗測定",
        "detail": "コネクタを外し各相間抵抗（約40〜150Ω）を測定。"
      },
      {
        "step": 2,
        "title": "通電音の確認",
        "detail": "電源投入初期化時にカチカチという駆動音がするか確認。"
      }
    ],
    "resetMethod": "コイル交換後、電源リセット。",
    "keywords": [
      "電子膨張弁",
      "膨張弁",
      "パルス",
      "室内EV"
    ]
  },
  {
    "id": "daikin-af",
    "code": "AF",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "ドレン水位上昇警告（予兆検知）",
    "urgency": "medium",
    "description": "停止中にドレンパンの水位上昇を検知したか、加湿器付き機で給水オーバーフローを検知しています。",
    "possibleCauses": [
      "停止中のドレン逆流（集合ドレン管からの逆流）",
      "加湿器給水弁のシート漏れ",
      "フロートスイッチの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレンパン目視点検",
        "detail": "配管逆勾配や逆流がないか確認。"
      }
    ],
    "resetMethod": "排水後、電源リセット。",
    "keywords": [
      "ドレン",
      "水位",
      "加湿",
      "逆流",
      "予兆"
    ]
  },
  {
    "id": "daikin-aj",
    "code": "AJ",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "能力設定異常（容量アダプタ不良）",
    "urgency": "high",
    "description": "室内機基板の能力設定アダプタが未装着、または設定データが正しく読み取れません。",
    "possibleCauses": [
      "基板交換時に旧基板から能力設定アダプタを移設し忘れた",
      "能力設定アダプタの接触不良または破損"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "アダプタ装着確認",
        "detail": "基板のCAPA端子にアダプタが正しく挿入されているか確認。"
      }
    ],
    "resetMethod": "アダプタ装着後、電源リセット。",
    "keywords": [
      "能力設定",
      "アダプタ",
      "容量",
      "基板交換"
    ]
  },
  {
    "id": "daikin-c1",
    "code": "C1",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内制御基板-ファン基板間通信異常",
    "urgency": "high",
    "description": "室内機の制御基板とファンインバータ基板間の伝送信号が途絶しました。",
    "possibleCauses": [
      "制御基板とファン基板間の接続ハーネス抜け・接触不良",
      "ファン基板または制御基板の故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "中間ハーネス確認",
        "detail": "基板間をつなぐコネクタの抜け・断線がないか確認。"
      }
    ],
    "resetMethod": "コネクタ再接続または基板交換後、電源リセット。",
    "keywords": [
      "C1",
      "ファン基板",
      "基板間通信",
      "室内基板"
    ]
  },
  {
    "id": "daikin-c4",
    "code": "C4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内液管サーミスタ異常",
    "urgency": "medium",
    "description": "室内熱交換器の液管温度サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "液管サーミスタの断線・ショート",
      "配管ホルダーからの脱落",
      "コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "取付状態確認",
        "detail": "ホルダーに密着挿入されているか確認。"
      },
      {
        "step": 2,
        "title": "抵抗値測定",
        "detail": "20℃時約20kΩ前後かテスターで測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "サーミスタ",
      "液管",
      "温度センサ",
      "熱交"
    ]
  },
  {
    "id": "daikin-c5",
    "code": "C5",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内ガス管サーミスタ異常",
    "urgency": "medium",
    "description": "室内熱交換器のガス管温度サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "ガス管サーミスタの断線・ショート",
      "ホルダー脱落",
      "コネクタ不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "温度特性表に従いテスターで抵抗測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "サーミスタ",
      "ガス管",
      "温度センサ"
    ]
  },
  {
    "id": "daikin-c9",
    "code": "C9",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内吸込空気サーミスタ異常",
    "urgency": "medium",
    "description": "室内機の吸込空気温度サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "吸込サーミスタ断線・ショート",
      "コネクタ抜け"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "室温25℃で約20kΩを示すか測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "吸込",
      "室温",
      "サーミスタ",
      "センサ"
    ]
  },
  {
    "id": "daikin-ca",
    "code": "CA",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "室内吹出空気サーミスタ異常",
    "urgency": "low",
    "description": "室内吹出口付近の温度サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "吹出サーミスタの断線・ショート",
      "コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "テスターで抵抗値測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "吹出",
      "吹出温度",
      "サーミスタ"
    ]
  },
  {
    "id": "daikin-cc",
    "code": "CC",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室内機",
    "title": "湿度センサ異常",
    "urgency": "low",
    "description": "室内機に搭載された湿度センサ回路の異常を検知しました。",
    "possibleCauses": [
      "湿度センサの不良・汚れ",
      "基板コネクタ外れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コネクタ確認",
        "detail": "湿度センサ基板の配線確認。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "湿度",
      "湿度センサ",
      "さらら"
    ]
  },
  {
    "id": "daikin-cj",
    "code": "CJ",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "リモコン",
    "title": "リモコンサーミスタ異常",
    "urgency": "low",
    "description": "リモコン内蔵の室温サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "リモコン内部サーミスタ故障",
      "リモコン基板不具合"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "本体センサ切替",
        "detail": "室内吸込センサ優先設定に変更して応急運転。"
      }
    ],
    "resetMethod": "リモコン交換または設定変更。",
    "keywords": [
      "リモコン",
      "サーミスタ",
      "室温センサ"
    ]
  },
  {
    "id": "daikin-e0",
    "code": "E0",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外保護装置作動（共通保護）",
    "urgency": "high",
    "description": "室外機の主回路保護装置、または複数の保護系統が一括作動して安全停止しました。",
    "possibleCauses": [
      "冷媒回路の詰まり・ガス欠による過熱",
      "室外ファン停止による凝縮圧過昇",
      "室外機基板のヒューズ溶断・保護回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機LED確認・エラー履歴呼出",
        "detail": "リモコンの点検モードでより詳細なサブコード（E3, E4, L5等）が記録されていないか確認。"
      },
      {
        "step": 2,
        "title": "室外基板ヒューズ点検",
        "detail": "基板上のガラスヒューズ（F1U等）が溶断していないかテスター導通確認。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "E0",
      "室外保護",
      "安全装置",
      "ヒューズ",
      "室外機"
    ]
  },
  {
    "id": "daikin-e1",
    "code": "E1",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外機プリント基板異常",
    "urgency": "high",
    "description": "室外機制御基板のマイコン異常、メモリ破損、または内部回路ハード障害で停止しています。",
    "possibleCauses": [
      "室外機プリント基板不良",
      "サージ・落雷による損傷",
      "電源ノイズ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源遮断リセット",
        "detail": "室外電源を5分間遮断し再投入。"
      },
      {
        "step": 2,
        "title": "基板目視確認",
        "detail": "ヒューズ溶断、バリスタ破裂、ヤモリ等の小動物侵入・ショートがないか確認。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→5分後ON。",
    "keywords": [
      "室外基板",
      "マイコン",
      "室外機",
      "ヒューズ",
      "落雷"
    ]
  },
  {
    "id": "daikin-e3",
    "code": "E3",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "高圧圧力異常（高圧圧力開閉器作動）",
    "urgency": "high",
    "description": "冷媒高圧圧力が規定値（約4.0〜4.15MPa）を超え、高圧圧力スイッチ（HPS）が作動して停止しました。",
    "possibleCauses": [
      "室外機熱交換器の目詰まり・ホコリ・汚れ",
      "室外ファンの停止・風量不足・ショートサーキット",
      "閉鎖弁（サービスバルブ）全閉・開け忘れ",
      "冷媒の過充填",
      "高圧圧力スイッチ自体の接点不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "閉鎖弁全開確認",
        "detail": "ガス弁・液弁スピンドルが全開か確認。"
      },
      {
        "step": 2,
        "title": "室外フィン清掃",
        "detail": "背面フィンの目詰まりを高圧水洗浄。"
      },
      {
        "step": 3,
        "title": "ファン回転確認",
        "detail": "運転時に室外ファンが高速回転しているか点検。"
      },
      {
        "step": 4,
        "title": "マニホールド圧力測定",
        "detail": "運転時の高圧圧力上昇推移を確認。"
      }
    ],
    "resetMethod": "高圧低下後、電源リセットまたはリモコンリセット。",
    "keywords": [
      "高圧",
      "圧力スイッチ",
      "HPS",
      "熱交目詰まり",
      "ファン停止",
      "冷媒過充填",
      "閉鎖弁"
    ]
  },
  {
    "id": "daikin-e4",
    "code": "E4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "低圧圧力異常（低圧圧力開閉器作動）",
    "urgency": "high",
    "description": "冷媒低圧圧力が異常低下（約0.05〜0.1MPa以下）し、低圧圧力スイッチ（LPS）が作動して停止しました。",
    "possibleCauses": [
      "冷媒ガス漏れ・ガス不足",
      "サービスバルブの全閉",
      "室内エアフィルターの極端な目詰まり",
      "電子膨張弁の閉塞・ストレーナ詰まり"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "バルブ開度確認",
        "detail": "閉鎖弁が全開か確認。"
      },
      {
        "step": 2,
        "title": "室内フィルター清掃",
        "detail": "室内吸込の詰まり解消。"
      },
      {
        "step": 3,
        "title": "低圧圧力測定",
        "detail": "リークテスターで配管接続部のガス漏れ探査。"
      }
    ],
    "resetMethod": "ガス補修・充填後、電源リセット。",
    "keywords": [
      "低圧",
      "ガス漏れ",
      "冷媒不足",
      "LPS",
      "フィルター目詰まり"
    ]
  },
  {
    "id": "daikin-e5",
    "code": "E5",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "インバータ圧縮機モータロック / 過負荷",
    "urgency": "high",
    "description": "インバータ圧縮機の起動時にモータが回転しない（拘束・ロック）、または極端な過負荷で停止しました。",
    "possibleCauses": [
      "圧縮機の機械的焼き付き・液圧縮ロック",
      "圧縮機モータの絶縁不良・レアショート",
      "インバータ基板（パワートランジスタ）破損",
      "閉鎖弁全閉での再起動"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機メガ測定",
        "detail": "圧縮機端子とアース間の絶縁測定（1MΩ以上）。"
      },
      {
        "step": 2,
        "title": "相間抵抗測定",
        "detail": "U-V, V-W, W-U相間が均等（数Ω）か測定。"
      },
      {
        "step": 3,
        "title": "インバータチェッカー測定",
        "detail": "パワトラ出力相抜けの確認。"
      }
    ],
    "resetMethod": "原因部品交換後、電源リセット。",
    "keywords": [
      "圧縮機",
      "コンプレッサー",
      "モータロック",
      "拘束",
      "インバータ",
      "焼き付き"
    ]
  },
  {
    "id": "daikin-e6",
    "code": "E6",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "STD圧縮機過電流 / 拘束（定速機）",
    "urgency": "high",
    "description": "定速圧縮機の過電流保護装置（CTまたはサーマル）が作動し、モータロックまたは過負荷で停止しました。",
    "possibleCauses": [
      "定速コンプレッサーの焼き付き",
      "起動コンデンサ不良",
      "マグネットスイッチ接点不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "起動コンデンサ容量測定",
        "detail": "コンデンサ容量抜けがないかテスターで測定。"
      },
      {
        "step": 2,
        "title": "圧縮機メガ測定",
        "detail": "絶縁抵抗測定。"
      }
    ],
    "resetMethod": "部品交換後、電源リセット。",
    "keywords": [
      "E6",
      "定速コンプ",
      "過電流",
      "コンデンサ"
    ]
  },
  {
    "id": "daikin-e7",
    "code": "E7",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外ファンモータ異常（ファンロック・DCファン故障）",
    "urgency": "high",
    "description": "室外ファンモータの回転が検出できない、または過電流・拘束を検知して停止しました。",
    "possibleCauses": [
      "ファンプロペラへの異物混入（枝、雪、氷）",
      "強風（逆風）によるファン回転干渉",
      "室外ファンモータのベアリング固着・コイル不良",
      "ファン基板不良・ヒューズ断線"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し確認",
        "detail": "電源OFFで手で軽く回し、滑らかか確認。"
      },
      {
        "step": 2,
        "title": "ファンモータコネクタ点検",
        "detail": "焼けや接触不良がないか確認。"
      },
      {
        "step": 3,
        "title": "基板ヒューズ導通確認",
        "detail": "ファン基板のガラス管ヒューズ点検。"
      }
    ],
    "resetMethod": "異物除去またはファンモータ交換後、電源リセット。",
    "keywords": [
      "室外ファン",
      "プロペラ",
      "モータ",
      "ファンロック",
      "DCファン"
    ]
  },
  {
    "id": "daikin-e8",
    "code": "E8",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "入力過電流保護（一次電流過大）",
    "urgency": "high",
    "description": "室外機の主電源入力電流が規定値を超えたため、過負荷保護で停止しました。",
    "possibleCauses": [
      "電源電圧低下に伴う電流増加",
      "室外熱交汚れによる高負荷",
      "圧縮機部分ショート"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "運転電流測定",
        "detail": "クランプメータで一次側電流測定。"
      }
    ],
    "resetMethod": "電源リセット。",
    "keywords": [
      "入力過電流",
      "一次電流",
      "過負荷"
    ]
  },
  {
    "id": "daikin-e9",
    "code": "E9",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "電子膨張弁駆動異常（室外機EV）",
    "urgency": "medium",
    "description": "室外機の電子膨張弁コイルの断線または短絡を検知しました。",
    "possibleCauses": [
      "膨張弁コイルの断線・ショート",
      "コネクタ抜け",
      "室外基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コイル抵抗測定",
        "detail": "各相間抵抗測定。"
      }
    ],
    "resetMethod": "コイル交換後、電源リセット。",
    "keywords": [
      "電子膨張弁",
      "室外EV",
      "膨張弁コイル"
    ]
  },
  {
    "id": "daikin-f3",
    "code": "F3",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "吐出管温度過昇異常（吐出高温保護）",
    "urgency": "high",
    "description": "圧縮機吐出管の温度が規定値（約115℃〜125℃以上）を超え、圧縮機の焼損防止で停止しました。",
    "possibleCauses": [
      "冷媒ガス不足・ガス漏れ",
      "電子膨張弁の絞りすぎ・開度不良・閉塞",
      "吐出管サーミスタの外れ・特性不良",
      "四方弁シート漏れによるガス短絡"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "吐出サーミスタ取付確認",
        "detail": "配管にしっかり密着固定されているか確認。"
      },
      {
        "step": 2,
        "title": "冷媒圧力測定",
        "detail": "ゲージで測定しガス欠の有無を確認。"
      },
      {
        "step": 3,
        "title": "サーミスタ抵抗測定",
        "detail": "温度特性表と抵抗値の照合。"
      }
    ],
    "resetMethod": "ガス漏れ修理・適正量充填後、電源リセット。",
    "keywords": [
      "吐出温度",
      "ガス漏れ",
      "冷媒不足",
      "過熱",
      "高温保護"
    ]
  },
  {
    "id": "daikin-f6",
    "code": "F6",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "冷媒過充填（暖房過負荷）",
    "urgency": "high",
    "description": "暖房運転時に室外熱交サーミスタ温度が上昇し、冷媒過充填と判定して停止しました。",
    "possibleCauses": [
      "冷媒の追加充填過多",
      "電子膨張弁の動作不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "充填量確認",
        "detail": "追加充填量の計算と圧力測定。"
      }
    ],
    "resetMethod": "適正量調整後、電源リセット。",
    "keywords": [
      "過充填",
      "チャージオーバー",
      "F6"
    ]
  },
  {
    "id": "daikin-h3",
    "code": "H3",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "高圧圧力スイッチ系異常",
    "urgency": "high",
    "description": "高圧圧力スイッチ（HPS）の接点信号ラインの断線、またはコネクタ外れを検知しました。",
    "possibleCauses": [
      "HPSコネクタ外れ・接触不良",
      "HPS本体の接点溶着・破損"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "スイッチ導通確認",
        "detail": "停止時にHPS接点が導通(0Ω)しているか測定。"
      }
    ],
    "resetMethod": "スイッチ交換後、電源リセット。",
    "keywords": [
      "HPS断線",
      "高圧スイッチ断線",
      "H3"
    ]
  },
  {
    "id": "daikin-h4",
    "code": "H4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "低圧圧力スイッチ系異常",
    "urgency": "high",
    "description": "低圧圧力スイッチ（LPS）の配線断線または本体接点不良を検知しました。",
    "possibleCauses": [
      "LPS配線の断線",
      "LPS本体不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "接点導通確認",
        "detail": "通常圧力下で接点導通があるか確認。"
      }
    ],
    "resetMethod": "スイッチ交換後、電源リセット。",
    "keywords": [
      "LPS断線",
      "低圧スイッチ断線",
      "H4"
    ]
  },
  {
    "id": "daikin-h7",
    "code": "H7",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外ファン位置検出異常",
    "urgency": "high",
    "description": "室外DCファンモータの磁極位置検出信号が正しく取得できません。",
    "possibleCauses": [
      "ファンモータ内蔵ホールIC不良",
      "ファン基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "モータ交換",
        "detail": "室外ファンモータ単体点検・交換。"
      }
    ],
    "resetMethod": "電源リセット。",
    "keywords": [
      "位置検出",
      "室外ファン",
      "H7"
    ]
  },
  {
    "id": "daikin-h8",
    "code": "H8",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "CT系異常（電流検出器回路不良）",
    "urgency": "high",
    "description": "インバータ基板上のCT（変流器）電流検出回路が異常です。",
    "possibleCauses": [
      "室外機インバータ基板のCT検出回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "基板交換",
        "detail": "室外機インバータ基板を交換。"
      }
    ],
    "resetMethod": "電源リセット。",
    "keywords": [
      "CT異常",
      "電流検出",
      "H8"
    ]
  },
  {
    "id": "daikin-h9",
    "code": "H9",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外外気サーミスタ異常",
    "urgency": "medium",
    "description": "室外機外気温度サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "外気サーミスタ断線・ショート",
      "コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "外気温に応じた抵抗値（25℃約20kΩ）を測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "外気サーミスタ",
      "外気温",
      "室外機センサ"
    ]
  },
  {
    "id": "daikin-j3",
    "code": "J3",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "吐出管サーミスタ異常",
    "urgency": "medium",
    "description": "圧縮機吐出管サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "吐出サーミスタ断線・短絡",
      "配管ホルダーからの脱落"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "断線(∞)または短絡(0Ω)がないか測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "吐出サーミスタ",
      "吐出管",
      "センサ異常"
    ]
  },
  {
    "id": "daikin-j5",
    "code": "J5",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "吸入管サーミスタ異常",
    "urgency": "medium",
    "description": "圧縮機吸入管サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "吸入サーミスタ断線・短絡"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "テスターで抵抗測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "吸入サーミスタ",
      "J5"
    ]
  },
  {
    "id": "daikin-j6",
    "code": "J6",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外熱交サーミスタ異常",
    "urgency": "medium",
    "description": "室外熱交換器の温度サーミスタの断線または短絡を検知しています。",
    "possibleCauses": [
      "室外熱交サーミスタ断線・ショート"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "テスターで抵抗測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "熱交サーミスタ",
      "室外熱交",
      "センサ"
    ]
  },
  {
    "id": "daikin-ja",
    "code": "JA",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "高圧圧力センサ異常",
    "urgency": "high",
    "description": "室外機高圧圧力センサ（電子センサ）の出力電圧異常を検知しました。",
    "possibleCauses": [
      "高圧センサ断線・不良",
      "コネクタ接触不良",
      "基板入力回路故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "出力DC電圧測定",
        "detail": "センサ信号電圧（DC0.5〜4.5V）を測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "高圧センサ",
      "圧力センサ",
      "JA"
    ]
  },
  {
    "id": "daikin-jc",
    "code": "JC",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "低圧圧力センサ異常",
    "urgency": "high",
    "description": "低圧圧力センサの出力電圧異常を検知しました。",
    "possibleCauses": [
      "低圧センサ断線・故障",
      "基板故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "センサ電圧測定",
        "detail": "DC出力電圧測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "低圧センサ",
      "JC"
    ]
  },
  {
    "id": "daikin-l1",
    "code": "L1",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "インバータプリント基板異常",
    "urgency": "high",
    "description": "インバータ基板内部のマイコン不良、または波形生成回路異常です。",
    "possibleCauses": [
      "インバータ基板ハード故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "基板交換",
        "detail": "インバータ基板を交換。"
      }
    ],
    "resetMethod": "基板交換後、電源リセット。",
    "keywords": [
      "インバータ基板",
      "L1"
    ]
  },
  {
    "id": "daikin-l4",
    "code": "L4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "放熱板温度上昇（インバータフィン過熱）",
    "urgency": "high",
    "description": "パワートランジスタ放熱用アルミフィンの温度が規定値（約100℃）を超えたため保護停止しました。",
    "possibleCauses": [
      "放熱フィンのホコリ目詰まり",
      "室外ファン風量不足",
      "高外気温過負荷"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン清掃",
        "detail": "電装裏の冷却フィン目詰まりを清掃。"
      }
    ],
    "resetMethod": "冷却後、電源リセット。",
    "keywords": [
      "放熱板",
      "フィン過熱",
      "インバータ",
      "ヒートシンク"
    ]
  },
  {
    "id": "daikin-l5",
    "code": "L5",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "インバータ瞬時過電流（圧縮機DC過電流）",
    "urgency": "high",
    "description": "インバータ回路に瞬時的な大電流が流れたことを検知し、パワートランジスタ保護のため緊急停止しました。",
    "possibleCauses": [
      "圧縮機の絶縁破壊・モータコイル相間ショート・地絡",
      "インバータ基板（パワートランジスタ）破損",
      "閉鎖弁全閉での起動"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機メガ測定",
        "detail": "基板配線を外した状態でアース間メガ測定（1MΩ未満なら圧縮機絶縁不良）。"
      },
      {
        "step": 2,
        "title": "パワトラダイオード測定",
        "detail": "P-U,V,W / N-U,V,Wの短絡確認。"
      }
    ],
    "resetMethod": "圧縮機または基板交換後、電源リセット。",
    "keywords": [
      "過電流",
      "瞬時過電流",
      "パワートランジスタ",
      "IGBT",
      "圧縮機ショート",
      "インバータ"
    ]
  },
  {
    "id": "daikin-l8",
    "code": "L8",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "インバータ圧縮機過負荷",
    "urgency": "high",
    "description": "インバータ圧縮機に定格を超える連続的な過電流が流れたため保護停止しました。",
    "possibleCauses": [
      "高圧過昇・過負荷運転",
      "冷媒過充填",
      "圧縮機モータ経年劣化"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "熱交フィン確認",
        "detail": "室外機フィンの目詰まり確認。"
      }
    ],
    "resetMethod": "電源リセット。",
    "keywords": [
      "L8",
      "圧縮機過負荷",
      "連続過電流"
    ]
  },
  {
    "id": "daikin-l9",
    "code": "L9",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "圧縮機起動異常（INV圧縮機ロック）",
    "urgency": "high",
    "description": "インバータ圧縮機の起動時にローターが正常に回転開始せず、起動トルク不足またはメカ拘束を検知して停止しました。",
    "possibleCauses": [
      "圧縮機内部の機械的ロック・焼き付き",
      "インバータ基板のパワーモジュール（IPM）起動出力不良",
      "起動時の差圧大（均圧不良・高低圧差過大）",
      "圧縮機U・V・W相の結線緩み・欠相"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "均圧確認・再起動テスト",
        "detail": "電源OFF後、高低圧が十分に均圧（約5分待機）してから再投入し、起動するか確認。"
      },
      {
        "step": 2,
        "title": "圧縮機U・V・W相間抵抗測定",
        "detail": "配線を外し、3相間の抵抗値が均一かテスターで測定。アンバランスがあれば圧縮機交換。"
      },
      {
        "step": 3,
        "title": "対地メガ測定",
        "detail": "端子とアース間の絶縁抵抗を測定（1MΩ以上）。地絡があれば圧縮機交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→5分後ON。",
    "keywords": [
      "L9",
      "圧縮機ロック",
      "起動異常",
      "起動失敗",
      "インバータ",
      "均圧"
    ]
  },
  {
    "id": "daikin-p1",
    "code": "P1",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "電源電圧不平衡（欠相・相間アンバランス）",
    "urgency": "high",
    "description": "三相電源の相間電圧アンバランス、またはR-S-Tいずれかの欠相を検知して停止しました。",
    "possibleCauses": [
      "主電源ブレーカー欠相",
      "電源端子台のネジ緩み・焼損",
      "受電電圧の不平衡"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "線間電圧測定",
        "detail": "R-S, S-T, T-R各相のAC電圧測定。"
      }
    ],
    "resetMethod": "電源正常化後、電源リセット。",
    "keywords": [
      "電源",
      "欠相",
      "アンバランス",
      "電圧不平衡",
      "三相"
    ]
  },
  {
    "id": "daikin-p4",
    "code": "P4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "放熱フィン温度サーミスタ系異常",
    "urgency": "medium",
    "description": "インバータ基板冷却用放熱フィン（ヒートシンク）の温度センサの断線または短絡を検知しました。",
    "possibleCauses": [
      "放熱フィンサーミスタの断線・ショート",
      "放熱フィンサーミスタの基板コネクタ抜け・接触不良",
      "インバータ基板内部の検出回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コネクタ接続確認",
        "detail": "室外インバータ基板上のフィンサーミスタコネクタ（X21A等）の緩み・外れを確認。"
      },
      {
        "step": 2,
        "title": "サーミスタ抵抗測定",
        "detail": "コネクタを外し、周囲温度での抵抗値特性（25℃で約20kΩ前後）をテスターで測定。"
      }
    ],
    "resetMethod": "センサ交換またはコネクタ再接続後、電源リセット。",
    "keywords": [
      "P4",
      "放熱フィン",
      "ヒートシンク",
      "サーミスタ",
      "インバータ冷却"
    ]
  },
  {
    "id": "daikin-pj",
    "code": "PJ",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "室外機能力設定異常（設定アダプタ不良）",
    "urgency": "high",
    "description": "室外機制御基板の能力設定アダプタが未装着、または基板交換時の設定不一致・型番不整合を検知しました。",
    "possibleCauses": [
      "基板交換時の能力設定アダプタ（ジャンパピン/コネクタ）の付け忘れ",
      "室外機機種設定の不一致",
      "室外機制御基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "能力設定アダプタ装着確認",
        "detail": "旧基板から移植すべき能力設定アダプタ（小基板やジャンパプラグ）が正しく装着されているか確認。"
      },
      {
        "step": 2,
        "title": "室外機型番と基板適合確認",
        "detail": "室外機銘板型番とサービス基板の対応表を照合。"
      }
    ],
    "resetMethod": "設定アダプタ装着後、電源ブレーカー再投入。",
    "keywords": [
      "PJ",
      "能力設定",
      "アダプタ",
      "基板交換",
      "設定不良"
    ]
  },
  {
    "id": "daikin-u0",
    "code": "U0",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "冷媒不足異常（ガス漏れ検知）",
    "urgency": "high",
    "description": "冷媒ガス不足、または配管詰まりにより熱交換が正常に行われていないと判定して停止しました。",
    "possibleCauses": [
      "配管接続部（フレア等）からの冷媒ガス漏れ",
      "閉鎖弁の開け忘れ",
      "電子膨張弁の詰まり",
      "サーミスタの外れ・誤判定"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "閉鎖弁全開確認",
        "detail": "バルブ全開を確認。"
      },
      {
        "step": 2,
        "title": "冷媒圧力測定",
        "detail": "運転時低圧圧力を測定。"
      },
      {
        "step": 3,
        "title": "リークテスト",
        "detail": "油滲み目視およびリークテスターで漏れ箇所特定。"
      }
    ],
    "resetMethod": "ガス漏れ修理・冷媒規定量充填後、電源リセット。",
    "keywords": [
      "冷媒不足",
      "ガス漏れ",
      "ガス欠",
      "圧力低下",
      "フレア漏れ"
    ]
  },
  {
    "id": "daikin-u1",
    "code": "U1",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "電源逆相・欠相",
    "urgency": "high",
    "description": "三相電源の相回転が逆相（逆回転防止）であるか、1相が通電していません。",
    "possibleCauses": [
      "一次側電源の相順間違い（逆相配線）",
      "端子ネジの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "相順確認",
        "detail": "検相器で正相を確認し、逆相なら2線を入れ替え。"
      }
    ],
    "resetMethod": "配線入替後、電源投入。",
    "keywords": [
      "逆相",
      "欠相",
      "三相電源",
      "U1"
    ]
  },
  {
    "id": "daikin-u2",
    "code": "U2",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "室外機",
    "title": "電源電圧異常 / 不足電圧",
    "urgency": "high",
    "description": "供給電源電圧の低下、瞬時停電、直流中間電圧の低下を検知しました。",
    "possibleCauses": [
      "電源電圧降下",
      "瞬時停電",
      "インバータ基板平滑コンデンサ不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "運転時電圧確認",
        "detail": "コンプレッサー起動時の電圧ドロップ測定。"
      }
    ],
    "resetMethod": "電源安定後、リセット。",
    "keywords": [
      "電圧低下",
      "不足電圧",
      "瞬低",
      "停電"
    ]
  },
  {
    "id": "daikin-u4",
    "code": "U4",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "通信・その他",
    "title": "室内機-室外機間伝送異常（シリアル通信エラー）",
    "urgency": "high",
    "description": "室内機と室外機を結ぶ内外連絡線の通信信号が途絶したか、ノイズによる障害が発生しています。",
    "possibleCauses": [
      "渡り線の断線・端子（1-2-3番）の誤配線・入れ違い",
      "室内機または室外機どちらかの電源ブレーカー遮断",
      "基板の通信回路（フォトカプラ等）不良",
      "外来ノイズ重畳"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "内外電源投入確認",
        "detail": "両方のブレーカーが確実にONになっているか確認。"
      },
      {
        "step": 2,
        "title": "端子台配線確認",
        "detail": "1-2-3番の番号と電線色が一致しているか確認。"
      },
      {
        "step": 3,
        "title": "DC通信電圧測定",
        "detail": "端子2-3番間のDC通信電圧（約DC20〜30Vで変動）を測定。"
      }
    ],
    "resetMethod": "配線修正後、電源リセット。",
    "keywords": [
      "U4",
      "通信エラー",
      "伝送異常",
      "渡り線",
      "内外連絡線",
      "端子台"
    ]
  },
  {
    "id": "daikin-u5",
    "code": "U5",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "リモコン",
    "title": "リモコン-室内機間伝送異常",
    "urgency": "high",
    "description": "液晶リモコンと室内機基板間の通信信号が受信できません。",
    "possibleCauses": [
      "リモコン線の断線・端子ネジ外れ",
      "主・従リモコン設定の重複",
      "基板故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "リモコン端子電圧確認",
        "detail": "室内機リモコン端子間のDC電圧（約16V）測定。"
      },
      {
        "step": 2,
        "title": "配線導通確認",
        "detail": "リモコン線の断線チェック。"
      }
    ],
    "resetMethod": "配線修復後、自動復帰。",
    "keywords": [
      "リモコン通信",
      "リモコン線",
      "U5"
    ]
  },
  {
    "id": "daikin-ua",
    "code": "UA",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "通信・その他",
    "title": "機種・台数組み合わせ異常（システム設定不整合）",
    "urgency": "high",
    "description": "室内機と室外機の機種シリーズ不一致、接続台数超過、基板設定違いを検知しています。",
    "possibleCauses": [
      "許容台数超過",
      "冷媒種別不一致",
      "ディップスイッチ設定ミス"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "型番・台数確認",
        "detail": "適合仕様書と突き合わせ。"
      }
    ],
    "resetMethod": "設定修正後、電源リセット。",
    "keywords": [
      "組み合わせ",
      "型番不一致",
      "台数オーバー",
      "UA"
    ]
  },
  {
    "id": "daikin-uf",
    "code": "UF",
    "maker": "daikin",
    "makerName": "ダイキン",
    "unit": "通信・その他",
    "title": "試運転未実施 / 冷媒配管・配線系統不一致",
    "urgency": "medium",
    "description": "自動チェック試運転が未完了、または配管と通信線の系統が交差しています。",
    "possibleCauses": [
      "試運転未実施",
      "配線系統のテレコ（入れ違い）"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "試運転ボタン長押し実行",
        "detail": "室外機基板でチェック試運転を実行。"
      }
    ],
    "resetMethod": "自動チェック試運転完了で復帰。",
    "keywords": [
      "試運転",
      "系統不一致",
      "配線交差",
      "UF"
    ]
  },
  {
    "id": "pana-e01",
    "code": "E01",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "リモコン",
    "title": "リモコン-室内機通信異常（室内機受信不良・業務用）",
    "urgency": "high",
    "description": "業務用パッケージエアコンにおいて、室内機がリモコンからの通信信号を受信できません。",
    "possibleCauses": [
      "リモコン配線の断線・緩み",
      "リモコン故障",
      "室内基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "端子電圧測定",
        "detail": "リモコン端子間DC電圧（約12〜16V）測定。"
      }
    ],
    "resetMethod": "配線修復後、電源リセット。",
    "keywords": [
      "E01",
      "リモコン通信",
      "業務用",
      "パッケージ"
    ]
  },
  {
    "id": "pana-e02",
    "code": "E02",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "システム",
    "title": "室内外通信異常（シリアル信号途絶）",
    "urgency": "high",
    "description": "室内機と室外機間の連絡線通信（シリアル信号）が正常に受信できず途絶えました。",
    "possibleCauses": [
      "内外連絡配線（1-2-3番線）の誤配線・端子ネジ緩み・断線",
      "室外機電源ブレーカーの遮断・電源ヒューズ溶断",
      "室外機制御基板の通信回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機通電確認",
        "detail": "室外機に電源が来ているか（LED点灯しているか）確認。"
      },
      {
        "step": 2,
        "title": "連絡配線電圧測定",
        "detail": "端子台2番-3番間のシリアル通信電圧（DC数十Vが小刻みに変動するか）をテスター測定。"
      }
    ],
    "resetMethod": "配線修正後、電源ブレーカー再投入。",
    "keywords": [
      "E02",
      "室内外通信",
      "連絡線",
      "シリアル通信",
      "渡り線"
    ]
  },
  {
    "id": "pana-e04",
    "code": "E04",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "通信・その他",
    "title": "室内機-室外機間通信異常（室内側受信不良・業務用）",
    "urgency": "high",
    "description": "業務用パッケージエアコンにおいて、室内機が室外機からのシリアル信号を受信できません。",
    "possibleCauses": [
      "室内外通信線の断線・誤配線",
      "室外機ブレーカー遮断",
      "室外基板故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機電源確認",
        "detail": "室外機のLED点灯確認。"
      }
    ],
    "resetMethod": "電源リセット。",
    "keywords": [
      "E04",
      "内外通信",
      "室内受信",
      "業務用"
    ]
  },
  {
    "id": "pana-f11",
    "code": "F11",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "冷暖切替（四方弁）異常",
    "urgency": "high",
    "description": "暖房時に室内熱交温度が上がらない、または冷房時に冷えない等、四方弁の切替不良を検知しました。",
    "possibleCauses": [
      "四方弁コイル断線・焼損",
      "四方弁スプール固着・シート漏れ",
      "冷媒ガス不足"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コイル抵抗測定",
        "detail": "四方弁コイル抵抗（約1k〜2kΩ）測定。"
      },
      {
        "step": 2,
        "title": "動作音確認",
        "detail": "切替時にカチャッという切替音がするか確認。"
      }
    ],
    "resetMethod": "四方弁修復後、電源リセット。",
    "keywords": [
      "四方弁",
      "冷暖切替",
      "暖房にならない",
      "冷房にならない",
      "F11"
    ]
  },
  {
    "id": "pana-f90",
    "code": "F90",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "PFC保護（力率改善回路・過電流）",
    "urgency": "high",
    "description": "電源入力側のPFC（力率改善）回路に過電流が流れたことを検知して停止しました。",
    "possibleCauses": [
      "室外機インバータ基板のPFC回路故障",
      "入力電源電圧の異常低下",
      "リアクトル短絡"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源電圧測定",
        "detail": "定格電圧が供給されているか確認。"
      }
    ],
    "resetMethod": "基板交換または電源正常化後、電源リセット。",
    "keywords": [
      "PFC",
      "力率改善",
      "過電流",
      "F90"
    ]
  },
  {
    "id": "pana-f91",
    "code": "F91",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "冷凍サイクル異常（冷媒漏れ・ガス不足）",
    "urgency": "high",
    "description": "温度サーミスタと電流値の相関から冷媒循環量が極端に少ないと判定して保護停止しました。",
    "possibleCauses": [
      "フレア部等の冷媒漏れ",
      "閉鎖弁の開け忘れ",
      "膨張弁詰まり"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "冷媒圧力測定",
        "detail": "ゲージで低圧測定。"
      },
      {
        "step": 2,
        "title": "リークテスト",
        "detail": "発泡液等で漏れ箇所特定。"
      }
    ],
    "resetMethod": "ガス補修・規定量充填後、電源リセット。",
    "keywords": [
      "冷凍サイクル",
      "ガス漏れ",
      "冷媒不足",
      "ガス欠",
      "F91"
    ]
  },
  {
    "id": "pana-f93",
    "code": "F93",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "圧縮機回転位置検出異常（モータ断線）",
    "urgency": "high",
    "description": "圧縮機の回転磁極位置が正常にフィードバックされず、脱調停止しました。",
    "possibleCauses": [
      "圧縮機コイルの断線・相間バランス異常",
      "インバータ基板故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "巻線抵抗測定",
        "detail": "圧縮機相間抵抗（U-V, V-W, W-U）を測定。"
      }
    ],
    "resetMethod": "圧縮機または基板交換後、リセット。",
    "keywords": [
      "位置検出",
      "脱調",
      "回転異常",
      "F93"
    ]
  },
  {
    "id": "pana-f95",
    "code": "F95",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "冷房高圧過昇保護（室外熱交過熱）",
    "urgency": "high",
    "description": "冷房運転時に室外熱交温度が異常上昇（約65℃以上）したため、圧縮機を保護停止しました。",
    "possibleCauses": [
      "室外フィン目詰まり",
      "室外ファン停止・風量不足",
      "ショートサーキット"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン水洗い清掃",
        "detail": "背面フィンの泥・埃を除去。"
      },
      {
        "step": 2,
        "title": "ファン回転確認",
        "detail": "ファンが高速回転するか点検。"
      }
    ],
    "resetMethod": "冷却・清掃後、電源リセット。",
    "keywords": [
      "高圧過昇",
      "熱交過熱",
      "冷房高圧",
      "室外フィン汚れ",
      "F95"
    ]
  },
  {
    "id": "pana-f97",
    "code": "F97",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "圧縮機過熱保護（吐出温度過昇）",
    "urgency": "high",
    "description": "圧縮機トップ温度または吐出ガス温度が規定値（約115℃以上）を超過したため保護停止しました。",
    "possibleCauses": [
      "冷媒ガス不足",
      "電子膨張弁開度不良",
      "吐出サーミスタ不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "低圧圧力確認",
        "detail": "ガス欠による過熱がないか測定。"
      }
    ],
    "resetMethod": "ガス補充後、電源リセット。",
    "keywords": [
      "圧縮機過熱",
      "吐出過昇",
      "F97"
    ]
  },
  {
    "id": "pana-f98",
    "code": "F98",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "全電流保護異常（運転過電流停止）",
    "urgency": "high",
    "description": "エアコン全体の運転電流（入力CT電流）が連続して規定電流値を超えたため過電流保護停止しました。",
    "possibleCauses": [
      "室外機アルミフィンの極度な目詰まり・ショートサーキット",
      "冷媒過充填（チャージ過多）による凝縮圧過昇",
      "室外ファンモータの回転数低下",
      "電源電圧の著しい低下"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機放熱環境・アルミフィン点検",
        "detail": "フィンに枯葉や埃が詰まっていないか確認し、高圧洗浄清掃。"
      },
      {
        "step": 2,
        "title": "運転電流測定",
        "detail": "クランプメーターで運転電流を測定し、銘板定格電流と比較。"
      }
    ],
    "resetMethod": "放熱改善後、電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "F98",
      "全電流保護",
      "過電流",
      "過負荷",
      "放熱不良",
      "凝縮過昇"
    ]
  },
  {
    "id": "pana-f99",
    "code": "F99",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "直流ピーク電流保護（インバータ瞬時過電流）",
    "urgency": "high",
    "description": "インバータIPMトランジスタに瞬時的な大電流が流れたことを検知して停止しました。",
    "possibleCauses": [
      "室外IPMパワトラ破損",
      "圧縮機モータ絶縁不良・ショート",
      "閉鎖弁全閉起動"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機メガ測定",
        "detail": "圧縮機端子とアース間のメガ測定（1MΩ以上）。"
      },
      {
        "step": 2,
        "title": "IPM素子チェック",
        "detail": "パワトラ短絡確認。"
      }
    ],
    "resetMethod": "圧縮機または基板交換後、電源リセット。",
    "keywords": [
      "ピーク電流",
      "瞬時過電流",
      "パワトラ",
      "F99"
    ]
  },
  {
    "id": "pana-h11",
    "code": "H11",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "通信・その他",
    "title": "室内機-室外機間通信異常（ルーム・PAC共通）",
    "urgency": "high",
    "description": "室内機と室外機間のシリアル通信が途絶またはエラー状態です。",
    "possibleCauses": [
      "渡り線の誤配線・断線・接触不良",
      "内外片側の電源OFF",
      "通信回路故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源確認",
        "detail": "内外双方に通電しているか確認。"
      },
      {
        "step": 2,
        "title": "端子台配線確認",
        "detail": "1-2-3番の芯線接続確認。"
      },
      {
        "step": 3,
        "title": "通信電圧測定",
        "detail": "2-3番間の変動DC電圧測定。"
      }
    ],
    "resetMethod": "配線修正後、電源リセット。",
    "keywords": [
      "H11",
      "通信異常",
      "シリアル",
      "渡り線"
    ]
  },
  {
    "id": "pana-h14",
    "code": "H14",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "室内吸込温度センサ異常",
    "urgency": "medium",
    "description": "室内吸込サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "吸込サーミスタ断線・ショート",
      "コネクタ外れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "25℃で約10kΩ〜20kΩか確認。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "吸込センサ",
      "室温",
      "H14"
    ]
  },
  {
    "id": "pana-h15",
    "code": "H15",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "圧縮機吐出サーミスタ異常",
    "urgency": "medium",
    "description": "室外機圧縮機の吐出管に取り付けられた温度サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "吐出サーミスタの断線・ショート",
      "室外基板のコネクタ抜け・ピン腐食",
      "サーミスタの管体外れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "サーミスタ抵抗値測定",
        "detail": "コネクタを外し、吐出管温度に応じた抵抗値（常温20℃で約50kΩ〜100kΩ）を測定。"
      },
      {
        "step": 2,
        "title": "管体固定スプリング確認",
        "detail": "サーミスタが銅管にしっかり密着・固定されているか確認。"
      }
    ],
    "resetMethod": "センサ交換または再接続後、電源リセット。",
    "keywords": [
      "H15",
      "吐出サーミスタ",
      "吐出センサ",
      "室外機",
      "温度センサ"
    ]
  },
  {
    "id": "pana-h16",
    "code": "H16",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "室外CT断線・電流検出異常",
    "urgency": "high",
    "description": "室外機の運転電流を検出するCT（変流器）の断線または検出値異常を検知しました。",
    "possibleCauses": [
      "CTコイル断線",
      "室外基板の電流検出回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "CT導通確認",
        "detail": "基板側コネクタでCTの抵抗値測定。"
      }
    ],
    "resetMethod": "基板交換後、電源リセット。",
    "keywords": [
      "CT断線",
      "電流検出",
      "H16"
    ]
  },
  {
    "id": "pana-h19",
    "code": "H19",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "室内ファンモータロック異常",
    "urgency": "high",
    "description": "室内ファンモータの回転が拘束されているか、回転信号が検出できません。",
    "possibleCauses": [
      "ファンへの異物挟み込み",
      "モータベアリング焼き付き",
      "室内基板故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し点検",
        "detail": "手でシロッコファンが軽く回るか点検。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "室内ファン",
      "ファンロック",
      "モータ拘束",
      "H19"
    ]
  },
  {
    "id": "pana-h21",
    "code": "H21",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "ドレン水位異常（フロートスイッチ作動）",
    "urgency": "high",
    "description": "室内機ドレンパンの水位が上昇し、フロートスイッチが作動して水漏れ防止のため停止しました。",
    "possibleCauses": [
      "ドレンポンプ故障・揚程不足",
      "ドレン配管のスライム・異物詰まり",
      "フロートスイッチの浮子固着・接点不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレンパン満水確認",
        "detail": "点検口を開け、ドレンパン内に水が溜まっているか目視確認し、溜まっている場合は吸引排水。"
      },
      {
        "step": 2,
        "title": "ドレンポンプ導通・作動音点検",
        "detail": "ポンプにAC100Vまたは200Vが給電されて回転音がするかテスター確認。"
      }
    ],
    "resetMethod": "排水清掃後、電源リセット。",
    "keywords": [
      "H21",
      "ドレン",
      "水位異常",
      "水漏れ",
      "フロート",
      "排水詰まり"
    ]
  },
  {
    "id": "pana-h23",
    "code": "H23",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "室内熱交温度センサ異常",
    "urgency": "medium",
    "description": "室内熱交換器サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "熱交サーミスタ断線・ショート",
      "コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "サーミスタ抵抗測定",
        "detail": "テスターで抵抗値測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "室内熱交",
      "サーミスタ",
      "H23"
    ]
  },
  {
    "id": "pana-h27",
    "code": "H27",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "外気温サーミスタ異常",
    "urgency": "low",
    "description": "室外機背面に配置された外気温度サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "外気温サーミスタ素子の断線・ショート",
      "室外基板コネクタの接触不良・リード線断線"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "センサコネクタを抜き、外気温に応じた抵抗値（25℃で約5kΩ）を示すかテスターで確認。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "H27",
      "外気温サーミスタ",
      "外気温センサ",
      "外気温度"
    ]
  },
  {
    "id": "pana-h28",
    "code": "H28",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "室外熱交サーミスタ異常",
    "urgency": "medium",
    "description": "室外機熱交換器パイプ温度サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "室外熱交サーミスタ断線・ショート",
      "コネクタ接触不良・腐食"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "コネクタを外し、温度特性（25℃で約5kΩ〜20kΩ）を測定。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源リセット。",
    "keywords": [
      "H28",
      "室外熱交",
      "パイプサーミスタ",
      "熱交温度"
    ]
  },
  {
    "id": "pana-h97",
    "code": "H97",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "室外ファンモータ異常",
    "urgency": "high",
    "description": "室外ファンモータの拘束、回転数異常、または駆動素子不良を検知しました。",
    "possibleCauses": [
      "プロペラへの雪・枝等の噛み込み",
      "DCファンモータ内部故障",
      "基板ヒューズ溶断"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "手回し確認",
        "detail": "ファンが軽く回るか確認。"
      },
      {
        "step": 2,
        "title": "基板ヒューズ確認",
        "detail": "ファン駆動ヒューズの導通確認。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "室外ファン",
      "DCファン",
      "H97",
      "ファンロック"
    ]
  },
  {
    "id": "pana-p01",
    "code": "P01",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "室内ファンモータ保護装置作動（業務用）",
    "urgency": "high",
    "description": "業務用室内ファンモータの内部サーマルプロテクタが作動し停止しました。",
    "possibleCauses": [
      "フィルター目詰まりによる風量低下・過熱",
      "モータベアリング摩耗"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィルター清掃",
        "detail": "吸込フィルターの清掃。"
      }
    ],
    "resetMethod": "冷却後、電源リセット。",
    "keywords": [
      "P01",
      "室内ファン",
      "サーマル",
      "モータ過熱"
    ]
  },
  {
    "id": "pana-p02",
    "code": "P02",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "圧縮機・送風機保護サーモ作動（過負荷停止）",
    "urgency": "high",
    "description": "圧縮機ケースサーモ、または過負荷保護装置が作動し、温度過昇・モータ過熱により停止しました。",
    "possibleCauses": [
      "冷媒ガス不足による過熱運転",
      "室外機ショートサーキットまたは通風閉塞による凝縮圧過昇",
      "保護サーモスイッチ自体の断線・接点不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機の吸込・吹出障害物確認",
        "detail": "室外機前面や背面の閉塞、フィンの目詰まりがないか点検。"
      },
      {
        "step": 2,
        "title": "冷媒圧力測定",
        "detail": "マニホールドゲージを接続し、ガス欠による高低圧過熱がないか測定。"
      }
    ],
    "resetMethod": "温度低下後、電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "P02",
      "保護サーモ",
      "圧縮機過熱",
      "過負荷",
      "ケースサーモ"
    ]
  },
  {
    "id": "pana-p03",
    "code": "P03",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "圧縮機吐出ガス温度過昇異常",
    "urgency": "high",
    "description": "圧縮機の吐出ガス温度が規定値（約115℃〜120℃以上）を超過したため保護停止しました。",
    "possibleCauses": [
      "冷媒ガス漏れ・不足（ガス欠運転）",
      "電子膨張弁の開度固着・絞り不良",
      "吐出ガス温度サーミスタ不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "冷媒圧力・過熱度確認",
        "detail": "ゲージ圧力を測定し、低圧低下・高過熱度（ガス欠症状）がないか確認。"
      },
      {
        "step": 2,
        "title": "膨張弁パルス確認",
        "detail": "電子膨張弁コイルの通電・駆動音があるか点検。"
      }
    ],
    "resetMethod": "冷媒漏れ修理・補充後、電源リセット。",
    "keywords": [
      "P03",
      "吐出過熱",
      "吐出温度",
      "ガス欠",
      "冷媒不足"
    ]
  },
  {
    "id": "pana-p04",
    "code": "P04",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "高圧スイッチ作動（高圧圧力異常・業務用）",
    "urgency": "high",
    "description": "室外機の高圧圧力開閉器が作動し、圧縮機を保護停止しました。",
    "possibleCauses": [
      "室外フィン目詰まり",
      "室外ファン停止",
      "閉鎖弁全閉",
      "過充填"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン洗浄とバルブ確認",
        "detail": "室外フィン清掃、弁全開確認。"
      }
    ],
    "resetMethod": "高圧低下後、電源リセット。",
    "keywords": [
      "P04",
      "高圧スイッチ",
      "高圧異常",
      "圧力開閉器"
    ]
  },
  {
    "id": "pana-p05",
    "code": "P05",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "電源逆相・欠相検知（業務用）",
    "urgency": "high",
    "description": "三相電源の逆相または欠相を検知し、圧縮機の逆回転防止のため停止しました。",
    "possibleCauses": [
      "一次側三相電源の相順間違い",
      "ブレーカー欠相"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "検相確認",
        "detail": "検相器で相回転を確認し2線を入れ替え。"
      }
    ],
    "resetMethod": "結線修正後、電源再投入。",
    "keywords": [
      "P05",
      "逆相",
      "欠相",
      "業務用"
    ]
  },
  {
    "id": "pana-p09",
    "code": "P09",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "天井パネルコネクタ接続不良",
    "urgency": "medium",
    "description": "天井カセット形室内機の化粧パネルに接続されるコネクタ（ルーバー、表示部等）が未接続または接触不良です。",
    "possibleCauses": [
      "化粧パネルコネクタの差し込み忘れ・半嵌合",
      "ルーバー用ハーネスの断線・挟み込み",
      "室内機制御基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "パネルコネクタ確認",
        "detail": "天井パネルから室内電装箱へのコネクタ（CN-DISP, CN-LOUVER等）が確実にロックされているか確認。"
      }
    ],
    "resetMethod": "コネクタ確実接続後、リモコンリセット。",
    "keywords": [
      "P09",
      "天井パネル",
      "化粧パネル",
      "コネクタ抜け",
      "ルーバー配線"
    ]
  },
  {
    "id": "pana-p10",
    "code": "P10",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "ドレン水位異常（フロートスイッチ作動・業務用）",
    "urgency": "high",
    "description": "業務用室内機ドレンパンの満水を検知し、フロートスイッチが作動しました。",
    "possibleCauses": [
      "ドレンポンプ故障",
      "ドレン配管スライム詰まり",
      "フロートSW固着"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレンパン確認",
        "detail": "満水なら手動排水し配管バキューム清掃。"
      },
      {
        "step": 2,
        "title": "フロート導通測定",
        "detail": "テスターで接点開閉チェック。"
      }
    ],
    "resetMethod": "排水後、電源リセット。",
    "keywords": [
      "P10",
      "ドレン",
      "水位",
      "フロート",
      "水漏れ",
      "排水"
    ]
  },
  {
    "id": "pana-p12",
    "code": "P12",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室内機",
    "title": "室内DCファンモータ異常",
    "urgency": "high",
    "description": "室内DCファンモータの回転数が所定値以下、または回転フィードバック信号が途絶え拘束停止しました。",
    "possibleCauses": [
      "シロッコファンへの異物挟み込み・接触",
      "室内ファンモータ内部のホールIC・コイル不良",
      "室内制御基板のファン駆動電源不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し点検",
        "detail": "電源OFF状態でシロッコファンを手で回し、引っかかりや擦れ音がないか確認。"
      },
      {
        "step": 2,
        "title": "モータコネクタ電圧測定",
        "detail": "基板〜ファンコネクタ間のDC電圧（DC300V系、Vcc15V、回転指令Vsp）をテスター確認。"
      }
    ],
    "resetMethod": "モータまたは基板交換後、電源リセット。",
    "keywords": [
      "P12",
      "室内ファン",
      "DCファン",
      "ファンロック",
      "回転異常"
    ]
  },
  {
    "id": "pana-p22",
    "code": "P22",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "室外送風機（ファンモータ）異常",
    "urgency": "high",
    "description": "室外ファンモータが拘束回転不能、または強風による逆回転・基板ファン駆動回路異常を検知しました。",
    "possibleCauses": [
      "室外プロペラファンへの異物挟み込み・凍結ロック",
      "強風（台風や季節風の吹き込み）による逆回転過負荷",
      "室外ファンモータ故障・基板ヒューズ溶断"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "プロペラファンの回転確認",
        "detail": "手で回して軽く回転するか、ガードへの干渉がないか確認。"
      },
      {
        "step": 2,
        "title": "ファンモータ抵抗測定",
        "detail": "モータ巻線抵抗およびリード線の断線・焼損を点検。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "P22",
      "室外ファン",
      "ファンモータ",
      "プロペラ",
      "逆風"
    ]
  },
  {
    "id": "pana-p26",
    "code": "P26",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "圧縮機インバータ過電流遮断（IDC動作）",
    "urgency": "high",
    "description": "インバータ回路に許容値を超える直流過電流（IDC）が流れたことを検知し、パワーモジュール保護のため即時停止しました。",
    "possibleCauses": [
      "室外機インバータ基板（IPMパワートランジスタ）の短絡破損",
      "圧縮機モータ内部ショート・巻線間短絡",
      "閉鎖弁全閉での運転開始による極度高圧"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "閉鎖弁の開状態確認",
        "detail": "液管・ガス管のサービスバルブが全開になっているか確認。"
      },
      {
        "step": 2,
        "title": "圧縮機メガ測定",
        "detail": "端子配線を外し、圧縮機端子とアース間の絶縁抵抗（1MΩ以上必須）および相間抵抗を測定。"
      },
      {
        "step": 3,
        "title": "IPM素子導通チェック",
        "detail": "インバータ基板のP-U, P-V, P-WおよびN-U, N-V, N-W間のダイオード導通・短絡をテスター点検。"
      }
    ],
    "resetMethod": "基板または圧縮機交換後、電源リセット。",
    "keywords": [
      "P26",
      "過電流",
      "IDC",
      "IPM",
      "インバータ破損",
      "パワトラ"
    ]
  },
  {
    "id": "pana-p29",
    "code": "P29",
    "maker": "panasonic",
    "makerName": "パナソニック",
    "unit": "室外機",
    "title": "インバータ圧縮機始動不良（位置検出異常・起動失敗）",
    "urgency": "high",
    "description": "室外機のインバーター圧縮機を起動する際、所定時間内に圧縮機が回転を開始しない、または位置検出信号が得られない場合に検知して即時停止します。",
    "possibleCauses": [
      "圧縮機（コンプレッサー）のメカロック・焼き付き・絶縁劣化",
      "室外機インバーター制御基板（IPDU基板）の故障・パワーモジュール（IPM）不良",
      "圧縮機動力線（U・V・W相）の抜け・断線・端子ネジ緩み・欠相",
      "冷媒過充填または液バックによる液圧縮ロック",
      "DCCT（直流電流センサー）検出回路の故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "起動音・振動の確認",
        "detail": "電源リセット後、圧縮機起動時に『ブーン』という唸り音や振動だけで回転せず停止するか確認。"
      },
      {
        "step": 2,
        "title": "動力配線・端子部の点検",
        "detail": "ブレーカー遮断後、インバータ基板から圧縮機端子台までのU・V・W線に端子緩み、コネクタ抜け、焼け焦げ、断線がないか確認。"
      },
      {
        "step": 3,
        "title": "圧縮機単体の巻線抵抗・メガ測定",
        "detail": "端子配線を外し、U-V, V-W, W-U相間の抵抗値が均一か（アンバランスがないか）、および各端子とアース間の絶縁抵抗（メガ測定：1MΩ以上）を測定。異常値なら圧縮機交換。"
      },
      {
        "step": 4,
        "title": "インバータ基板（IPDU）の出力点検",
        "detail": "圧縮機本体に異常がない場合、基板側のパワーモジュール（IPM）素子短絡・欠相出力の可能性が高いため、室外機インバータ基板を交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後ON。重故障のため再発時は運転停止し圧縮機または基板の交換が必要。",
    "keywords": [
      "P29",
      "始動不良",
      "圧縮機ロック",
      "コンプレッサー",
      "インバータ",
      "位置検出",
      "室外機",
      "IPDU",
      "欠相",
      "起動失敗"
    ]
  },
  {
    "id": "toshiba-04",
    "code": "04",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "通信・その他",
    "title": "シリアル信号異常（室内-室外間通信異常）",
    "urgency": "high",
    "description": "東芝室内機自己診断コード04（E04相当）。室内機と室外機間のシリアル通信信号が届いていません。",
    "possibleCauses": [
      "渡り線の誤配線・断線",
      "室外機ブレーカーOFF",
      "通信回路故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外電源と配線確認",
        "detail": "室外ブレーカー投入と1-2-3番端子確認。"
      }
    ],
    "resetMethod": "配線修復後、電源リセット。",
    "keywords": [
      "04",
      "シリアル通信",
      "渡り線",
      "自己診断"
    ]
  },
  {
    "id": "toshiba-08",
    "code": "08",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "ドレン水位異常（フロートスイッチ作動）",
    "urgency": "high",
    "description": "東芝自己診断コード08（P10相当）。ドレンパン水位が規定を超えて停止しました。",
    "possibleCauses": [
      "ドレンポンプ故障",
      "ドレン配管詰まり",
      "フロート固着"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "排水と通水テスト",
        "detail": "ドレンパン排水および配管バキューム清掃。"
      }
    ],
    "resetMethod": "排水後、電源リセット。",
    "keywords": [
      "08",
      "ドレン",
      "水位",
      "フロート",
      "水漏れ"
    ]
  },
  {
    "id": "toshiba-0a",
    "code": "0A",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "室内ファンモータ異常（拘束・ロック）",
    "urgency": "high",
    "description": "室内機自己診断コード0A（P01相当）。室内ファンの回転数が検出できません。",
    "possibleCauses": [
      "ファンへの異物挟み込み",
      "モータ固着",
      "基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "手回し点検",
        "detail": "ファンが軽く回るか点検。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "0A",
      "室内ファン",
      "自己診断"
    ]
  },
  {
    "id": "toshiba-0c",
    "code": "0C",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "室内吸込温度センサ (TA) 異常",
    "urgency": "medium",
    "description": "室内吸込センサ（TA）の断線または短絡です（F10相当）。",
    "possibleCauses": [
      "TAセンサ断線・外れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "テスターで抵抗測定。"
      }
    ],
    "resetMethod": "センサ交換後、リセット。",
    "keywords": [
      "0C",
      "TA",
      "吸込センサ"
    ]
  },
  {
    "id": "toshiba-c05",
    "code": "C05",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "通信・その他",
    "title": "集中制御機器通信異常（送信異常）",
    "urgency": "medium",
    "description": "TCC-LINK集中制御機器ラインで信号送信ができません。",
    "possibleCauses": [
      "集中配線の断線・ショート",
      "集中機器の電源遮断",
      "終端抵抗重複"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "集中ライン配線確認",
        "detail": "端子の緩みおよび終端抵抗設定確認。"
      }
    ],
    "resetMethod": "配線修正後、再起動。",
    "keywords": [
      "C05",
      "集中制御",
      "TCC-LINK"
    ]
  },
  {
    "id": "toshiba-e01",
    "code": "E01",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "リモコン",
    "title": "リモコン-室内機通信異常（室内機受信不良）",
    "urgency": "high",
    "description": "ワイヤードリモコンと室内機間の通信において室内機が信号を受信できません。",
    "possibleCauses": [
      "リモコン線の断線・接触不良",
      "リモコン故障",
      "基板故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "A-B端子電圧測定",
        "detail": "室内機A-B端子間のDC電圧測定。"
      }
    ],
    "resetMethod": "配線修復後、電源リセット。",
    "keywords": [
      "E01",
      "リモコン",
      "通信",
      "A-B端子"
    ]
  },
  {
    "id": "toshiba-e04",
    "code": "E04",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "通信・その他",
    "title": "室内-室外間通信異常（シリアルエラー）",
    "urgency": "high",
    "description": "室内機と室外機間のシリアル通信が成立していません。",
    "possibleCauses": [
      "室内外渡り線の誤配線・緩み",
      "室外機電源遮断",
      "基板通信回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外通電ランプ確認",
        "detail": "室外機への通電確認と2-3番DC電圧測定。"
      }
    ],
    "resetMethod": "配線修正後、電源リセット。",
    "keywords": [
      "E04",
      "シリアル",
      "通信異常",
      "渡り線"
    ]
  },
  {
    "id": "toshiba-f01",
    "code": "F01",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "室内熱交センサ (TCJ) 異常",
    "urgency": "medium",
    "description": "室内熱交換器の配管温度センサ（TCJセンサ）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TCJサーミスタの断線・ショート",
      "コネクタ外れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "テスターで抵抗測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "F01",
      "TCJ",
      "熱交センサ",
      "サーミスタ"
    ]
  },
  {
    "id": "toshiba-f02",
    "code": "F02",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "室内熱交温度センサ（TC）異常",
    "urgency": "medium",
    "description": "室内熱交換器の液側温度センサ（TC）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TCサーミスタ素子の断線・ショート",
      "室内基板コネクタ抜け・接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "TCサーミスタ抵抗測定",
        "detail": "コネクタを外し、抵抗値（25℃で約10kΩ）を測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "F02",
      "TCセンサ",
      "室内熱交",
      "サーミスタ"
    ]
  },
  {
    "id": "toshiba-f04",
    "code": "F04",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "吐出温度センサ (TD1) 異常",
    "urgency": "high",
    "description": "室外機圧縮機の吐出温度センサ（TD1）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TD1センサ断線・ショート",
      "ホルダー脱落"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "取付確認と抵抗測定",
        "detail": "固定状態確認および抵抗測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "F04",
      "TD1",
      "吐出センサ",
      "室外機"
    ]
  },
  {
    "id": "toshiba-f06",
    "code": "F06",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "室外熱交温度センサ（TE/TS）異常",
    "urgency": "medium",
    "description": "室外機熱交換器の温度センサ（TE/TS）の断線または短絡を検知しました。",
    "possibleCauses": [
      "室外熱交サーミスタ不良",
      "室外基板コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "テスターで温度抵抗特性を点検。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "F06",
      "TEセンサ",
      "TSセンサ",
      "室外熱交"
    ]
  },
  {
    "id": "toshiba-f08",
    "code": "F08",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "室外外気温センサ（TO）異常",
    "urgency": "low",
    "description": "室外機外気温度センサ（TO）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TOサーミスタ断線・ショート",
      "リード線の腐食・断線"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "25℃で約10kΩを示すか確認。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "F08",
      "TOセンサ",
      "外気温度",
      "外気温サーミスタ"
    ]
  },
  {
    "id": "toshiba-h01",
    "code": "H01",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "コンプレッサーブレークダウン（圧縮機破損・過電流）",
    "urgency": "high",
    "description": "圧縮機モータの過電流、モータロック、またはインバータ破損による停止です。",
    "possibleCauses": [
      "圧縮機焼き付き・ロック",
      "圧縮機モータ地絡・短絡",
      "IGBTパワトラ破損"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "メガ測定",
        "detail": "圧縮機アース間メガ測定（1MΩ以上）。"
      },
      {
        "step": 2,
        "title": "巻線抵抗測定",
        "detail": "各相間バランス確認。"
      }
    ],
    "resetMethod": "部品交換後、電源リセット。",
    "keywords": [
      "H01",
      "コンプレッサー破損",
      "過電流",
      "ブレークダウン",
      "ロック"
    ]
  },
  {
    "id": "toshiba-h02",
    "code": "H02",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "圧縮機メカロック異常",
    "urgency": "high",
    "description": "圧縮機の回転が機械的に拘束され、起動トルクをかけても回転しない状態を検知しました。",
    "possibleCauses": [
      "圧縮機内部のベアリング焼き付き・ピストンロック",
      "液冷媒寝込みによる液圧縮ロック",
      "クランクケースヒータ断線"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "クランクケースヒータ通電確認",
        "detail": "ヒータに通電され圧縮機底部が温まっているか確認。"
      },
      {
        "step": 2,
        "title": "圧縮機交換判断",
        "detail": "均圧後も唸るだけで起動しない場合は圧縮機交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→5分後ON。",
    "keywords": [
      "H02",
      "圧縮機ロック",
      "コンプレッサー焼き付き",
      "ロック"
    ]
  },
  {
    "id": "toshiba-h03",
    "code": "H03",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "室外機電流検出回路異常",
    "urgency": "medium",
    "description": "室外基板の電流検出センサー（CT回路）において、圧縮機停止中にもかかわらず電流値を検知するなど回路異常を検出しました。",
    "possibleCauses": [
      "室外制御基板（IPDU基板）の電流検出アンプ不良",
      "CTセンサの断線・特性ズレ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "基板交換",
        "detail": "CT一体型基板のため、室外制御基板（IPDU）を交換。"
      }
    ],
    "resetMethod": "基板交換後、電源リセット。",
    "keywords": [
      "H03",
      "電流検出",
      "CT回路",
      "IPDU"
    ]
  },
  {
    "id": "toshiba-h06",
    "code": "H06",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "室外機低圧系保護動作（低圧カット）",
    "urgency": "high",
    "description": "冷凍サイクルの低圧圧力が異常低下（設定値約0.03〜0.05MPa以下）し、低圧スイッチが作動しました。",
    "possibleCauses": [
      "冷媒ガス漏れ・全ガス欠",
      "電子膨張弁の全閉固着・ストレーナ閉塞",
      "低圧圧力スイッチ自体の接点不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "低圧ゲージ圧力測定",
        "detail": "マニホールドを接続し、配管内の残留ガス圧力を測定。"
      },
      {
        "step": 2,
        "title": "ガス漏れ箇所検知",
        "detail": "フレア接続部、熱交Uベンド等のリークチェック。"
      }
    ],
    "resetMethod": "ガス漏れ修理・真空引き冷媒定量充填後、電源リセット。",
    "keywords": [
      "H06",
      "低圧保護",
      "低圧カット",
      "ガス漏れ",
      "ガス欠"
    ]
  },
  {
    "id": "toshiba-p01",
    "code": "P01",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "室内ファンモータ異常",
    "urgency": "high",
    "description": "室内ファンモータの過電流保護、またはモータロックを検知しました。",
    "possibleCauses": [
      "ファンへの異物噛み込み",
      "モータベアリング固着",
      "基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し確認",
        "detail": "スムーズに回るか確認。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "P01",
      "室内ファン",
      "モータロック"
    ]
  },
  {
    "id": "toshiba-p03",
    "code": "P03",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "吐出温度異常（TD1過昇）",
    "urgency": "high",
    "description": "圧縮機吐出管温度（TD1）が異常上昇（約115℃以上）したため保護停止しました。",
    "possibleCauses": [
      "冷媒ガス不足・ガス漏れ",
      "電子膨張弁詰まり"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ガス圧測定",
        "detail": "マニホールドで低圧測定。"
      }
    ],
    "resetMethod": "ガス補充後、電源リセット。",
    "keywords": [
      "P03",
      "吐出過昇",
      "TD1",
      "ガス欠"
    ]
  },
  {
    "id": "toshiba-p04",
    "code": "P04",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "高圧スイッチ作動（高圧圧力過昇）",
    "urgency": "high",
    "description": "高圧圧力スイッチ（約4.15MPa）が作動し保護停止しました。",
    "possibleCauses": [
      "室外フィン目詰まり",
      "室外ファン停止",
      "閉鎖弁全閉",
      "冷媒過充填"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン清掃とバルブ確認",
        "detail": "室外フィン水洗い、弁全開確認。"
      }
    ],
    "resetMethod": "高圧低下後、電源リセット。",
    "keywords": [
      "P04",
      "高圧スイッチ",
      "高圧異常",
      "熱交目詰まり"
    ]
  },
  {
    "id": "toshiba-p05",
    "code": "P05",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "電源逆相・欠相異常",
    "urgency": "high",
    "description": "三相電源の相順間違い（逆相）または1相抜け（欠相）を検知しました。",
    "possibleCauses": [
      "電源相順間違い",
      "ブレーカー欠相"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "検相器確認",
        "detail": "相回転確認と配線入替。"
      }
    ],
    "resetMethod": "配線修正後、電源投入。",
    "keywords": [
      "P05",
      "逆相",
      "欠相"
    ]
  },
  {
    "id": "toshiba-p10",
    "code": "P10",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "ドレン水位異常（フロートスイッチ作動）",
    "urgency": "high",
    "description": "ドレンパン内満水をフロートスイッチが検知し、水漏れ防止停止しました。",
    "possibleCauses": [
      "ドレンポンプ故障",
      "配管スライム詰まり",
      "フロート固着"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "水位確認と排水",
        "detail": "ドレンパンの水位確認と排水。"
      },
      {
        "step": 2,
        "title": "配管吸引清掃",
        "detail": "バキューム清掃と通水テスト。"
      }
    ],
    "resetMethod": "排水後、電源リセット。",
    "keywords": [
      "P10",
      "ドレン水位",
      "フロート",
      "水漏れ",
      "排水詰まり"
    ]
  },
  {
    "id": "toshiba-p12",
    "code": "P12",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室内機",
    "title": "室内ファンモータ異常",
    "urgency": "high",
    "description": "室内DCファンモータの過電流、または回転数フィードバック信号の途絶を検知して停止しました。",
    "possibleCauses": [
      "ファンへの異物接触・軸受けベアリング固着",
      "室内ファンモータ故障",
      "室内機基板のファン駆動回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの回転確認",
        "detail": "手でファンを回して軽く回るか点検。"
      },
      {
        "step": 2,
        "title": "ファンモータ印加電圧確認",
        "detail": "基板〜ファンコネクタ間のDC電圧を点検。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "P12",
      "室内ファン",
      "ファン異常",
      "ファンロック"
    ]
  },
  {
    "id": "toshiba-p15",
    "code": "P15",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "ガス漏れ検知（冷媒不足）",
    "urgency": "high",
    "description": "運転中の温度差および負荷条件から冷媒ガス不足を検知しました。",
    "possibleCauses": [
      "フレア部等の冷媒漏れ",
      "閉鎖弁全閉",
      "膨張弁詰まり"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧力測定",
        "detail": "マニホールドゲージでガス圧測定。"
      }
    ],
    "resetMethod": "ガス漏れ修理・冷媒規定充填後、電源リセット。",
    "keywords": [
      "P15",
      "ガス漏れ",
      "冷媒不足",
      "ガス欠"
    ]
  },
  {
    "id": "toshiba-p19",
    "code": "P19",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "四方弁切替異常（冷暖切替不良）",
    "urgency": "medium",
    "description": "冷房/暖房の運転切替指令に対し、室内熱交換器温度の変化が正常に得られず四方弁の切替不良と判断しました。",
    "possibleCauses": [
      "四方弁本体のスライド固着・不良",
      "四方弁電磁コイルの断線・コネクタ抜け",
      "室外機基板の四方弁リレー出力不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "四方弁コイル導通・電圧測定",
        "detail": "暖房運転時にコイルへAC100V/200Vが出力されているか、コイル抵抗（約1kΩ〜2kΩ）があるか確認。"
      }
    ],
    "resetMethod": "コイルまたは弁交換後、電源リセット。",
    "keywords": [
      "P19",
      "四方弁",
      "冷暖切替",
      "暖まらない",
      "冷えない"
    ]
  },
  {
    "id": "toshiba-p20",
    "code": "P20",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "高圧保護動作（高圧カット）",
    "urgency": "high",
    "description": "室外機高圧圧力スイッチが作動（設定値約3.8〜4.15MPa超過）し、冷凍サイクル保護停止しました。",
    "possibleCauses": [
      "室外熱交フィンの極度な目詰まり・ショートサーキット",
      "室外ファンモータ不回転",
      "冷媒過充填・電子膨張弁全閉固着"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外熱交換器フィンの汚れ確認",
        "detail": "背面のアルミフィンが埃で塞がれていないか点検・水洗い清掃。"
      },
      {
        "step": 2,
        "title": "高圧圧力測定",
        "detail": "マニホールドゲージで高圧圧力を測定。"
      }
    ],
    "resetMethod": "放熱改善後、電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "P20",
      "高圧保護",
      "高圧カット",
      "凝縮圧",
      "ショートサーキット"
    ]
  },
  {
    "id": "toshiba-p22",
    "code": "P22",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "室外ファンモータ異常",
    "urgency": "high",
    "description": "室外ファンモータの過電流、モータロック、またはファン基板異常を検知しました。",
    "possibleCauses": [
      "プロペラ異物挟み込み",
      "モータ内部故障",
      "ファン基板ヒューズ溶断"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し確認",
        "detail": "スムーズに回るか確認。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "P22",
      "室外ファン",
      "ファンロック",
      "モータ異常"
    ]
  },
  {
    "id": "toshiba-p26",
    "code": "P26",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "室外機インバータIdc動作（瞬時過電流）",
    "urgency": "high",
    "description": "室外機インバータIPDU主回路に瞬間的な過電流が流れ、IPM素子保護のため即座に停止しました。",
    "possibleCauses": [
      "IPDU基板内部のパワートランジスタ（IPM）短絡破損",
      "圧縮機モータ内部ショート・巻線地絡",
      "電源の急峻な瞬時電圧低下・欠相"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機メガ測定",
        "detail": "圧縮機配線を外し、端子-アース間のメガ抵抗（1MΩ以上）を測定。"
      },
      {
        "step": 2,
        "title": "IPDU基板のダイオードチェック",
        "detail": "U/V/W相とP/N端子間の短絡導通をテスター測定。"
      }
    ],
    "resetMethod": "部品交換後、電源リセット。",
    "keywords": [
      "P26",
      "Idc",
      "インバータ過電流",
      "IPDU",
      "パワトラ"
    ]
  },
  {
    "id": "toshiba-p29",
    "code": "P29",
    "maker": "toshiba",
    "makerName": "東芝",
    "unit": "室外機",
    "title": "圧縮機位置検出回路系異常（室外機IPDU異常）",
    "urgency": "high",
    "description": "室外機IPDU（インバータ基板）が圧縮機のローター回転位置を正常に検出できず、圧縮機の起動・駆動制御が不能になり保護停止します。",
    "possibleCauses": [
      "圧縮機（コンプレッサー）本体の内部ロック・焼き付き・コイル断線",
      "室外機IPDU基板（インバータ基板）の位置検出回路不良・パワートランジスタ破損",
      "圧縮機接続端子（U, V, W相）のネジ緩み・接触不良・外れ",
      "瞬時電圧低下や外来ノイズによる一時的な誤検出"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源リセット・再起動確認",
        "detail": "エアコンの元電源（ブレーカー）をOFFにし、約3分待機後に再投入。再発するか確認（一時ノイズであれば復帰する場合あり）。"
      },
      {
        "step": 2,
        "title": "圧縮機U/V/W相の接続点検",
        "detail": "室外機の電源を遮断し、IPDU基板と圧縮機端子台の接続ネジ緩み、端子の焼け焦げ、コネクタ抜けがないか点検。"
      },
      {
        "step": 3,
        "title": "圧縮機の抵抗測定（単体チェック）",
        "detail": "圧縮機端子のU-V、V-W、W-U相間抵抗を測定し不平衡がないか確認。また各端子と大地（アース）間の絶縁抵抗をメガテスターで測定（1MΩ以上必須）。"
      },
      {
        "step": 4,
        "title": "IPDU基板の点検・交換",
        "detail": "圧縮機単体で異常がない場合は、IPDU基板内部の位置検出回路またはスイッチング素子の不良のため、IPDU基板を交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後再投入。再発時は無理な連続通電を中止し点検。",
    "keywords": [
      "P29",
      "位置検出",
      "IPDU",
      "圧縮機",
      "コンプレッサー",
      "インバータ",
      "室外機",
      "ロック",
      "始動不良"
    ]
  },
  {
    "id": "mitsu-6602",
    "code": "6602",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "通信・その他",
    "title": "M-NET通信送信プロセッサ異常（City Multiビルマルチ）",
    "urgency": "high",
    "description": "ビル用マルチ等のM-NET伝送線で送信プロセッサがビジー状態で送信不能です。",
    "possibleCauses": [
      "M-NET線の短絡・地絡・強電誤印加",
      "基板通信LSI故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "伝送線電圧測定",
        "detail": "M1-M2端子間DC電圧（通常DC24〜30V）測定。"
      }
    ],
    "resetMethod": "伝送線修復後、電源リセット。",
    "keywords": [
      "6602",
      "M-NET",
      "伝送異常",
      "City Multi",
      "ビルマルチ",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-6607",
    "code": "6607",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "通信・その他",
    "title": "M-NET無応答（相手機器応答なし・City Multi）",
    "urgency": "high",
    "description": "M-NET通信において指定アドレスの機器から応答がありません。",
    "possibleCauses": [
      "相手側電源OFF",
      "伝送線断線",
      "アドレス設定ミス"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "相手機器電源確認",
        "detail": "通電確認および導通チェック。"
      }
    ],
    "resetMethod": "電源投入・配線復旧後、自動復旧。",
    "keywords": [
      "6607",
      "M-NET",
      "無応答",
      "アドレス",
      "ビルマルチ",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-heavy-e1",
    "code": "E1",
    "maker": "mitsubishi",
    "makerName": "三菱重工",
    "unit": "リモコン",
    "title": "リモコン通信異常（セゾンエアコン・重工）",
    "urgency": "high",
    "description": "三菱重工セゾンエアコンにおいてリモコンとの通信が途絶しました。",
    "possibleCauses": [
      "リモコン線断線",
      "リモコン基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "リモコン線導通確認",
        "detail": "端子の接触と断線チェック。"
      }
    ],
    "resetMethod": "配線修復後、電源リセット。",
    "keywords": [
      "E1",
      "リモコン通信",
      "三菱重工",
      "セゾン"
    ]
  },
  {
    "id": "mitsu-heavy-e39",
    "code": "E39",
    "maker": "mitsubishi",
    "makerName": "三菱重工",
    "unit": "室外機",
    "title": "高圧圧力異常（高圧SW作動・重工セゾン）",
    "urgency": "high",
    "description": "三菱重工セゾンエアコンにおいて室外機高圧スイッチ（63H1）が作動し停止しました。",
    "possibleCauses": [
      "室外熱交目詰まり",
      "室外ファン停止",
      "閉鎖弁全閉",
      "過充填"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン洗浄とバルブ確認",
        "detail": "室外フィン清掃、閉鎖弁確認。"
      }
    ],
    "resetMethod": "高圧低下後、電源リセット。",
    "keywords": [
      "E39",
      "高圧スイッチ",
      "三菱重工",
      "セゾン",
      "高圧異常"
    ]
  },
  {
    "id": "mitsu-heavy-e5",
    "code": "E5",
    "maker": "mitsubishi",
    "makerName": "三菱重工",
    "unit": "通信・その他",
    "title": "室内室外間通信異常（シリアルエラー・重工セゾン）",
    "urgency": "high",
    "description": "三菱重工セゾンエアコンにおいて室内機と室外機間の通信が成立しません。",
    "possibleCauses": [
      "内外渡り線の断線・誤配線",
      "室外電源OFF"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "渡り線接続確認",
        "detail": "端子台配線確認。"
      }
    ],
    "resetMethod": "配線修正後、電源リセット。",
    "keywords": [
      "E5",
      "内外通信",
      "三菱重工",
      "セゾン"
    ]
  },
  {
    "id": "mitsu-e6",
    "code": "E6",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "通信・その他",
    "title": "室内/室外通信異常（室内機受信不良・Mr.SLIM）",
    "urgency": "high",
    "description": "室内機が室外機からの通信信号を受信できません。",
    "possibleCauses": [
      "渡り線S1-S2-S3の誤配線・断線",
      "室外機電源遮断",
      "基板通信回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機電源確認",
        "detail": "室外機ブレーカーの投入確認。"
      },
      {
        "step": 2,
        "title": "端子台確認",
        "detail": "S1-S2-S3の端子接続とS2-S3間DC電圧測定。"
      }
    ],
    "resetMethod": "配線修復後、電源リセット。",
    "keywords": [
      "E6",
      "通信異常",
      "S1-S2-S3",
      "渡り線",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-heavy-e9",
    "code": "E9",
    "maker": "mitsubishi",
    "makerName": "三菱重工",
    "unit": "室内機",
    "title": "ドレン水位異常（フロートSW作動・重工セゾン）",
    "urgency": "high",
    "description": "三菱重工セゾンエアコンにおいてドレン水位上昇によりフロートSWが作動しました。",
    "possibleCauses": [
      "ドレンポンプ故障",
      "配管スライム詰まり",
      "フロート固着"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレンパン確認",
        "detail": "手動排水および通水バキューム清掃。"
      }
    ],
    "resetMethod": "排水後、電源リセット。",
    "keywords": [
      "E9",
      "ドレン",
      "水位",
      "三菱重工",
      "セゾン",
      "フロート"
    ]
  },
  {
    "id": "mitsu-ea",
    "code": "EA",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "システム",
    "title": "内外接続誤配線・室内ユニット台数オーバー",
    "urgency": "high",
    "description": "室内機と室外機を結ぶ伝送線の接続台数が許容数を超過、または内外配線が誤接続されています。",
    "possibleCauses": [
      "室内機の接続台数オーバー（規定台数超過）",
      "系統が異なる室外機伝送線との混触・クロス配線"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "伝送配線ルート確認",
        "detail": "室外機と室内機の冷媒系統と伝送線系統が一致しているか点検。"
      }
    ],
    "resetMethod": "配線修正後、電源リセット。",
    "keywords": [
      "EA",
      "誤配線",
      "台数オーバー",
      "伝送線",
      "系統違い"
    ]
  },
  {
    "id": "mitsu-eb",
    "code": "Eb",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "システム",
    "title": "内外接続誤配線（テレコ配線・外れ）",
    "urgency": "high",
    "description": "室内外接続線の極性違い（テレコ）、端子台のA/B線逆接続、または端子外れを検知しました。",
    "possibleCauses": [
      "端子台（S1, S2, S3またはA, B）の結線間違い",
      "渡り線の芯線折れ・接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "端子台の番号確認",
        "detail": "室内側と室外側の端子番号が1対1で正しく一致しているか確認。"
      }
    ],
    "resetMethod": "結線修正後、電源ブレーカー再投入。",
    "keywords": [
      "Eb",
      "テレコ",
      "誤配線",
      "端子逆",
      "接続不良"
    ]
  },
  {
    "id": "mitsu-p1",
    "code": "P1",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "吸込空気温度センサ (TH1) 異常（Mr.SLIM/霧ヶ峰）",
    "urgency": "medium",
    "description": "室内機吸込空気サーミスタ（TH1）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TH1サーミスタの断線・ショート",
      "コネクタ抜け"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "25℃で約15kΩを示すか測定。"
      }
    ],
    "resetMethod": "センサ交換後、リモコン運転/停止で復帰。",
    "keywords": [
      "P1",
      "TH1",
      "吸込センサ",
      "室温",
      "サーミスタ",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-p2",
    "code": "P2",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "配管液温センサ (TH2) 異常（Mr.SLIM）",
    "urgency": "medium",
    "description": "室内熱交換器の液管サーミスタ（TH2）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TH2サーミスタ断線・ショート",
      "ホルダー脱落"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "テスターで抵抗測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "P2",
      "TH2",
      "液管センサ",
      "配管温度",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-p4",
    "code": "P4",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "ドレンセンサ異常 / ドレン水位異常（Mr.SLIM）",
    "urgency": "high",
    "description": "室内機ドレンセンサの作動、またはセンサ自体の断線を検知しました。",
    "possibleCauses": [
      "ドレンパン満水",
      "ドレンポンプ故障",
      "センサ故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレン水位点検",
        "detail": "手動排水および配管バキューム清掃。"
      }
    ],
    "resetMethod": "排水後、電源リセット。",
    "keywords": [
      "P4",
      "ドレンセンサ",
      "ドレン水位",
      "水漏れ",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-p5",
    "code": "P5",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "ドレンポンプ過電流 / ドレン満水異常（Mr.SLIM）",
    "urgency": "high",
    "description": "ドレンポンプの動作不良、過電流、または満水保護停止です。",
    "possibleCauses": [
      "ドレンポンプ固着・断線",
      "配管スライム詰まり"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ポンプ通水テスト",
        "detail": "ポンプが回転して排水するか確認。"
      }
    ],
    "resetMethod": "排水・ポンプ交換後、電源リセット。",
    "keywords": [
      "P5",
      "ドレンポンプ",
      "満水",
      "排水異常",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-p6",
    "code": "P6",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "凍結防止 / 過熱保護作動（Mr.SLIM）",
    "urgency": "medium",
    "description": "冷房時の室内熱交凍結保護、または暖房過熱保護が連続作動しました。",
    "possibleCauses": [
      "フィルター目詰まり（風量不足）",
      "ファン回転低下",
      "冷媒不足"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィルター清掃",
        "detail": "フィルター汚れ除去と風量確認。"
      }
    ],
    "resetMethod": "清掃後、電源リセット。",
    "keywords": [
      "P6",
      "凍結防止",
      "過熱保護",
      "風量低下",
      "フィルター詰まり",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-p8",
    "code": "P8",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "配管温度異常（冷媒漏れ・ガス不足・逆相・Mr.SLIM）",
    "urgency": "high",
    "description": "運転開始後一定時間経過しても配管温度が変化せず、冷媒漏れまたは逆相と判定しました。",
    "possibleCauses": [
      "冷媒ガス漏れ・ガス欠",
      "閉鎖弁開け忘れ",
      "電源逆相"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源相順確認",
        "detail": "検相器で正相（R-S-T）か確認。"
      },
      {
        "step": 2,
        "title": "冷媒圧力確認",
        "detail": "ゲージでガス圧測定。"
      }
    ],
    "resetMethod": "逆相修正またはガス補充後、電源リセット。",
    "keywords": [
      "P8",
      "配管温度",
      "ガス漏れ",
      "逆相",
      "冷媒不足",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-p9",
    "code": "P9",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "室内配管温度サーミスタ（TH5二相管）異常",
    "urgency": "medium",
    "description": "室内機熱交換器の二相配管部温度サーミスタ（TH5）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TH5サーミスタの断線・ショート",
      "室内基板コネクタの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗測定",
        "detail": "25℃で約5kΩを示すかテスター測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "P9",
      "TH5",
      "配管サーミスタ",
      "二相管"
    ]
  },
  {
    "id": "mitsu-pa",
    "code": "PA",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "強制圧縮機停止（ドレン漏水検知）",
    "urgency": "high",
    "description": "室内機の漏水検知センサ、またはフロートスイッチが作動し、水漏れ事故防止のため強制停止しました。",
    "possibleCauses": [
      "ドレンパンの満水・オーバーフロー",
      "ドレンポンプ故障・配管勾配不良",
      "漏水センサ電極の短絡・水濡れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ドレンパン確認・排水",
        "detail": "ドレンパンを点検し、溜まっている水をバキューム清掃。"
      }
    ],
    "resetMethod": "水抜き乾燥後、電源リセット。",
    "keywords": [
      "PA",
      "漏水検知",
      "水漏れ",
      "強制停止",
      "ドレン"
    ]
  },
  {
    "id": "mitsu-pb",
    "code": "PB",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室内機",
    "title": "室内ファンモータ異常",
    "urgency": "high",
    "description": "室内ファンモータが回転しない、または回転数が異常低下したことを検知して停止しました。",
    "possibleCauses": [
      "ファンへの異物噛み込み",
      "ファンモータ断線・故障",
      "室内制御基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し確認",
        "detail": "軽く回転するか点検。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "PB",
      "室内ファン",
      "ファンモータ",
      "ファンロック"
    ]
  },
  {
    "id": "mitsu-u1",
    "code": "U1",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "高圧異常（高圧圧力スイッチ作動・Mr.SLIM）",
    "urgency": "high",
    "description": "室外機高圧圧力スイッチ（63H）が作動し、保護停止しました。",
    "possibleCauses": [
      "室外フィン目詰まり",
      "室外ファン停止",
      "閉鎖弁全閉",
      "過充填"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン洗浄",
        "detail": "室外フィンの高圧洗浄とファン回転確認。"
      }
    ],
    "resetMethod": "高圧低下後、電源リセット。",
    "keywords": [
      "U1",
      "高圧異常",
      "63H",
      "高圧スイッチ",
      "熱交目詰まり",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-u2",
    "code": "U2",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "吐出温度異常 / 過熱度異常（Mr.SLIM）",
    "urgency": "high",
    "description": "圧縮機吐出管温度が異常上昇（約115℃以上）したため保護停止しました。",
    "possibleCauses": [
      "冷媒ガス不足",
      "電子膨張弁（LEV）不良",
      "吐出サーミスタ（TH4）不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "冷媒圧力確認",
        "detail": "低圧圧力測定とガス漏れ探査。"
      }
    ],
    "resetMethod": "ガス補充後、電源リセット。",
    "keywords": [
      "U2",
      "吐出温度",
      "過熱度",
      "TH4",
      "ガス不足",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-u3",
    "code": "U3",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "室外機放熱板サーミスタ（TH8）異常",
    "urgency": "medium",
    "description": "パワーモジュール冷却用放熱板温度サーミスタ（TH8）の断線または短絡を検知しました。",
    "possibleCauses": [
      "TH8サーミスタ不良",
      "室外基板コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "サーミスタ抵抗値を測定。"
      }
    ],
    "resetMethod": "センサ交換後、電源リセット。",
    "keywords": [
      "U3",
      "TH8",
      "放熱板",
      "ヒートシンク"
    ]
  },
  {
    "id": "mitsu-u4",
    "code": "U4",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "放熱板サーミスタ / 放熱板過熱異常（Mr.SLIM）",
    "urgency": "high",
    "description": "パワートランジスタ冷却フィンの過熱、または放熱板サーミスタの異常です。",
    "possibleCauses": [
      "冷却フィンの目詰まり",
      "室外ファン風量不足",
      "グリス乾燥"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "フィン清掃",
        "detail": "放熱フィンの埃清掃。"
      }
    ],
    "resetMethod": "冷却後、電源リセット。",
    "keywords": [
      "U4",
      "放熱板",
      "フィン過熱",
      "インバータ",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-u5",
    "code": "U5",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "インバータ過電流 / バス電圧異常（Mr.SLIM）",
    "urgency": "high",
    "description": "インバータ回路に過大電流が流れたか、DCバスバー電圧の異常を検知しました。",
    "possibleCauses": [
      "圧縮機モータ絶縁不良・短絡・ロック",
      "IPM破損"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機メガ測定",
        "detail": "アース間メガ測定（1MΩ以上）。"
      }
    ],
    "resetMethod": "部品交換後、電源リセット。",
    "keywords": [
      "U5",
      "インバータ過電流",
      "IPM",
      "圧縮機短絡",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-u8",
    "code": "U8",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "室外ファンモータ異常（Mr.SLIM）",
    "urgency": "high",
    "description": "室外ファンモータの回転数が検出できない、またはモータロックを検知しました。",
    "possibleCauses": [
      "異物噛み込み",
      "モータ固着・断線",
      "ファンインバータ基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ファンの手回し確認",
        "detail": "スムーズに回るか点検。"
      }
    ],
    "resetMethod": "モータ交換後、電源リセット。",
    "keywords": [
      "U8",
      "室外ファン",
      "ファンロック",
      "モータ異常",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-ue",
    "code": "UE",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "高圧圧力低下異常（冷媒不足・弁閉・Mr.SLIM）",
    "urgency": "high",
    "description": "運転中にもかかわらず高圧圧力が規定値まで上昇しないため停止しました。",
    "possibleCauses": [
      "冷媒ガス漏れ",
      "閉鎖弁全閉",
      "電子膨張弁不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "バルブとガス圧確認",
        "detail": "弁全開確認および圧力測定。"
      }
    ],
    "resetMethod": "ガス補充後、電源リセット。",
    "keywords": [
      "UE",
      "高圧低下",
      "ガス不足",
      "ガス漏れ",
      "三菱電機"
    ]
  },
  {
    "id": "mitsu-uf",
    "code": "UF",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "圧縮機過電流遮断（起動時ロック検知）",
    "urgency": "high",
    "description": "圧縮機起動時にモータ回転数が立ち上がらず、大電流が流れてロック保護遮断しました。",
    "possibleCauses": [
      "圧縮機の内部焼き付き・メカロック",
      "長期停止による液冷媒寝込み",
      "インバータ基板出力欠相"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機単体点検",
        "detail": "U-V-W相間抵抗・絶縁抵抗を測定し、不良なら圧縮機交換。"
      }
    ],
    "resetMethod": "圧縮機交換後、電源リセット。",
    "keywords": [
      "UF",
      "起動ロック",
      "圧縮機ロック",
      "焼き付き"
    ]
  },
  {
    "id": "mitsu-up",
    "code": "UP",
    "maker": "mitsubishi",
    "makerName": "三菱電機",
    "unit": "室外機",
    "title": "圧縮機過電流遮断（オーバーカレント）",
    "urgency": "high",
    "description": "圧縮機に過大な電流が流れ、主回路過電流保護（OCR）が動作して停止しました。",
    "possibleCauses": [
      "圧縮機ロック・過負荷",
      "電源電圧の著しい低下",
      "室外インバータパワーモジュール不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源電圧・相間電圧測定",
        "detail": "定格電圧（三相200V）が供給されているか確認。"
      },
      {
        "step": 2,
        "title": "圧縮機抵抗測定",
        "detail": "巻線抵抗・メガを測定。"
      }
    ],
    "resetMethod": "原因解消後、電源リセット。",
    "keywords": [
      "UP",
      "過電流",
      "オーバーカレント",
      "過負荷"
    ]
  },
  {
    "id": "hitachi-01",
    "code": "01",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内吸込空気サーミスタ異常",
    "urgency": "medium",
    "description": "室内機の吸込空気温度サーミスタ（センサ）の断線または短絡（ショート）を検知しました。",
    "possibleCauses": [
      "吸込空気サーミスタの断線または短絡",
      "サーミスタコネクタ（CN4等）の接触不良・外れ",
      "室内機プリント基板のサーミスタ入力回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コネクタ接続点検",
        "detail": "室内機基板の吸込サーミスタコネクタが確実に挿入されているか確認。"
      },
      {
        "step": 2,
        "title": "サーミスタ抵抗値測定",
        "detail": "コネクタを外し、テスターでサーミスタ単体の抵抗値を測定（25℃時：約10kΩ〜15kΩ目安。0Ωなら短絡、∞Ωなら断線）。"
      },
      {
        "step": 3,
        "title": "部品交換",
        "detail": "抵抗値異常ならサーミスタを交換。抵抗値正常なら室内機基板を交換。"
      }
    ],
    "resetMethod": "サーミスタ復旧後、電源ブレーカーOFF→3分後ONまたはリモコンでリセット。",
    "keywords": [
      "01",
      "1",
      "吸込",
      "サーミスタ",
      "室内",
      "温度センサ",
      "日立",
      "hitachi"
    ]
  },
  {
    "id": "hitachi-02",
    "code": "02",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内熱交換器配管液管サーミスタ異常",
    "urgency": "medium",
    "description": "室内熱交換器の液管温度サーミスタ（凍結防止サーミスタ）の断線または短絡を検知しました。",
    "possibleCauses": [
      "室内液管サーミスタの断線または短絡",
      "サーミスタ配線の挟み込み・被覆破損",
      "基板コネクタの接触不良",
      "室内機プリント基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "サーミスタ抵抗値点検",
        "detail": "室内機基板の熱交サーミスタコネクタを外し、テスターで抵抗値を測定（正常時：25℃で約10kΩ〜15kΩ）。"
      },
      {
        "step": 2,
        "title": "配線・取り付け状態確認",
        "detail": "感温部が配管ホルダーに密着固定されているか、配線の断線・腐食がないか点検。"
      },
      {
        "step": 3,
        "title": "交換判定",
        "detail": "抵抗値異常時はサーミスタ交換、基板側回路故障時は室内機基板交換。"
      }
    ],
    "resetMethod": "部品交換・接続確認後、電源再投入またはリモコン運転操作。",
    "keywords": [
      "02",
      "2",
      "熱交換器",
      "液管",
      "凍結防止",
      "配管サーミスタ",
      "日立"
    ]
  },
  {
    "id": "hitachi-03",
    "code": "03",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "システム",
    "title": "室内外ユニット間伝送異常",
    "urgency": "high",
    "description": "室内機と室外機間の通信が一定時間途絶したか、ノイズ・誤配線・電源異常により通信不能になっています。",
    "possibleCauses": [
      "室内外渡り配線（線番誤り・断線・緩み・接触不良）",
      "室外機への電源未供給（室外機ブレーカー落ち・ヒューズ溶断）",
      "三相電源の相順異常（逆相・欠相）",
      "外来電磁ノイズ混入（強電線との並行配管）",
      "室内機または室外機制御基板の通信回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外機電源確認",
        "detail": "室外機の電源ブレーカーがONになっているか、端子台(R,S,T / L,N)に正常電圧がきているかテスターで測定。"
      },
      {
        "step": 2,
        "title": "渡り配線・線番確認",
        "detail": "室内機端子台(1-2-3)と室外機端子台(1-2-3)の接続が一致しているか、渡り線間の通信電圧(DC10V〜24V脈動)を確認。"
      },
      {
        "step": 3,
        "title": "シールド線・アース点検",
        "detail": "通信線のアース接地状態を確認し、ノイズ源となる動力線から離隔されているか点検。"
      }
    ],
    "resetMethod": "配線・電源修正後、室内機・室外機双方のブレーカーを落とし3分後再投入。",
    "keywords": [
      "03",
      "3",
      "通信",
      "伝送",
      "室内外",
      "渡り線",
      "シリアル",
      "日立"
    ]
  },
  {
    "id": "hitachi-04",
    "code": "04",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外インバーター伝送異常",
    "urgency": "high",
    "description": "室外機のメイン制御基板とインバーター制御基板（パワー基板）間の通信異常を検知しました。",
    "possibleCauses": [
      "メイン基板〜インバーター基板間の通信ケーブル接触不良・抜け",
      "インバーター基板の電源ヒューズ断線",
      "インバーター基板または室外メイン制御基板の故障",
      "ノイズフィルター基板の異常"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "基板間ハーネス接続点検",
        "detail": "室外制御基板とインバーター基板を繋ぐフラットケーブル/コネクタの緩み・半抜けを確認。"
      },
      {
        "step": 2,
        "title": "基板ヒューズ導通点検",
        "detail": "インバーター基板上のガラス管ヒューズが溶断していないかテスターで導通測定。"
      },
      {
        "step": 3,
        "title": "基板交換",
        "detail": "ハーネス接続正常・ヒューズ正常なら、インバーター基板または室外制御基板を交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "04",
      "4",
      "インバーター",
      "伝送",
      "基板間",
      "通信",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-05",
    "code": "05",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "電源相順異常（逆相・欠相）",
    "urgency": "high",
    "description": "三相200V電源の相順が逆相、または1相が欠相しているため機器保護のために停止しています。",
    "possibleCauses": [
      "主電源配線の逆相接続（R相とT相等の入れ替わり）",
      "電源の1相欠相（ヒューズ断、ブレーカー不良、電線断線）",
      "室外機相検出回路（制御基板）の故障",
      "電源受電電圧の著しい不平衡"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "受電電圧・各相間電圧測定",
        "detail": "室外機主電源端子台(R, S, T)にて、R-S, S-T, T-R間の線間電圧が正常に約200Vあるかテスターで測定（欠相の確認）。"
      },
      {
        "step": 2,
        "title": "相順テスターによる検相",
        "detail": "検相器を用いて正相(R-S-T)か確認。逆相の場合は主電源を遮断し、2線を入れ替えて正相に修正。"
      },
      {
        "step": 3,
        "title": "基板点検",
        "detail": "電源電圧および相順が正常なのに発報する場合は、室外制御基板の相検出部不良のため基板交換。"
      }
    ],
    "resetMethod": "相順・電源修正後、ブレーカーを再投入。",
    "keywords": [
      "05",
      "5",
      "逆相",
      "欠相",
      "電源",
      "相順",
      "三相",
      "200V",
      "日立"
    ]
  },
  {
    "id": "hitachi-06",
    "code": "06",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "インバーター電圧異常（電圧低下・過電圧）",
    "urgency": "high",
    "description": "インバーターの直流母線電圧（DC電圧）が規定値以下に低下、または過昇したことを検知しました。",
    "possibleCauses": [
      "受電電圧の低下（他大型機器起動による瞬時電圧降下、電圧180V以下）",
      "受電電圧の過昇（サージ、240V以上）",
      "瞬時停電（瞬停）",
      "インバーター基板（平滑電解コンデンサ、DC電圧検出回路）不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "受電電圧の監視測定",
        "detail": "圧縮機起動時に電源電圧が急激に180V以下等にドロップしないかテスターで確認。"
      },
      {
        "step": 2,
        "title": "DC母線電圧測定",
        "detail": "インバーター基板の平滑コンデンサ端子間（P-N間）でDC約280V〜330Vの直流電圧が正常に出ているか測定。"
      },
      {
        "step": 3,
        "title": "基板交換",
        "detail": "受電電圧正常でDC電圧検出値が異常ならインバーター基板を交換。"
      }
    ],
    "resetMethod": "電源ブレーカーOFF→3分後ON。",
    "keywords": [
      "06",
      "6",
      "電圧低下",
      "過電圧",
      "インバーター",
      "DC母線",
      "瞬停",
      "日立"
    ]
  },
  {
    "id": "hitachi-07",
    "code": "07",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "圧縮機吐出ガス温度過昇異常",
    "urgency": "critical",
    "description": "圧縮機の吐出管温度が規定温度（約115℃〜125℃以上）を超過したため、圧縮機焼き付き防止で緊急停止しました。",
    "possibleCauses": [
      "冷媒ガス漏れ・冷媒不足（ガス欠による冷却不足）",
      "室外電子膨張弁の開度不良・詰まり",
      "冷媒配管の折れ・潰れ・詰まり",
      "吐出ガス温度サーミスタの特性ズレ・感温部外れ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "冷媒圧力・低圧測定",
        "detail": "ゲージマニホールドを接続して冷媒圧力を点検。低圧が異常に低い場合はガス漏れを疑う。"
      },
      {
        "step": 2,
        "title": "ガス漏れ箇所の検知",
        "detail": "フレア接続部、配管溶接部、熱交換器の油ジミ・冷媒リークテスター点検を実施。"
      },
      {
        "step": 3,
        "title": "電子膨張弁・サーミスタ点検",
        "detail": "電子膨張弁コイルの抵抗値および吐出サーミスタの抵抗値特性ズレがないか確認。"
      }
    ],
    "resetMethod": "冷媒修理または部品交換後、リセット操作。",
    "keywords": [
      "07",
      "7",
      "吐出温度",
      "過昇",
      "ガス漏れ",
      "冷媒不足",
      "圧縮機",
      "膨張弁",
      "日立"
    ]
  },
  {
    "id": "hitachi-08",
    "code": "08",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外吐出ガスサーミスタ異常",
    "urgency": "medium",
    "description": "圧縮機吐出管に取り付けられた吐出サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "吐出サーミスタの断線または短絡",
      "高温によるサーミスタ経年劣化・被覆熱劣化",
      "室外制御基板コネクタの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "サーミスタ抵抗値測定",
        "detail": "基板コネクタを外し、吐出サーミスタの抵抗値を測定（常温時目安：数10kΩ〜100kΩ程度。機種仕様書参照）。"
      },
      {
        "step": 2,
        "title": "サーミスタ交換",
        "detail": "断線(∞Ω)または短絡(0Ω)の場合は吐出サーミスタを交換。"
      }
    ],
    "resetMethod": "サーミスタ交換後、電源再投入。",
    "keywords": [
      "08",
      "8",
      "吐出サーミスタ",
      "断線",
      "室外",
      "温度センサ",
      "日立"
    ]
  },
  {
    "id": "hitachi-09",
    "code": "09",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外高圧圧力センサ異常",
    "urgency": "medium",
    "description": "室外機の高圧圧力センサの断線、短絡、または出力電圧範囲外を検知しました。",
    "possibleCauses": [
      "高圧圧力センサの故障",
      "センサ配線の断線・コネクタ外れ",
      "室外機制御基板のセンサ入力回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "センサコネクタ点検",
        "detail": "室外制御基板の高圧圧力センサコネクタの接続状態を確認。"
      },
      {
        "step": 2,
        "title": "センサ出力DC電圧測定",
        "detail": "電源投入時、センサの出力電圧（DC0.5V〜4.5V）をテスターで測定し、ゲージ圧力と照合。"
      },
      {
        "step": 3,
        "title": "センサ交換",
        "detail": "センサ出力が0Vまたは5Vに張り付いている場合は高圧圧力センサを交換。"
      }
    ],
    "resetMethod": "センサ交換後、電源再投入。",
    "keywords": [
      "09",
      "9",
      "高圧センサ",
      "圧力センサ",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-11",
    "code": "11",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内吸込空気温度サーミスタ異常",
    "urgency": "medium",
    "description": "室内ユニットの吸込空気温度サーミスタの特性異常または断線・ショートを検知しました。",
    "possibleCauses": [
      "吸込サーミスタ素子の特性ズレ・故障",
      "サーミスタ配線の断線・コネクタ接触不良",
      "室内機プリント基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "コネクタ導通・抵抗値点検",
        "detail": "吸込サーミスタ単体の抵抗値を測定し、実室温と照合（25℃時：約15kΩ）。"
      },
      {
        "step": 2,
        "title": "サーミスタ交換",
        "detail": "抵抗値特性が外れている場合はサーミスタを交換。"
      }
    ],
    "resetMethod": "部品交換後、リモコン運転操作またはブレーカーリセット。",
    "keywords": [
      "11",
      "吸込温度",
      "室内サーミスタ",
      "日立"
    ]
  },
  {
    "id": "hitachi-12",
    "code": "12",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内吹出空気温度サーミスタ異常",
    "urgency": "medium",
    "description": "室内吹出空気温度サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "吹出温度サーミスタの故障・断線",
      "コネクタ接触不良",
      "室内機基板の入力回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "吹出サーミスタ抵抗値測定",
        "detail": "テスターで吹出サーミスタの抵抗値を測定し、断線・短絡を判定。"
      },
      {
        "step": 2,
        "title": "サーミスタ交換",
        "detail": "異常値ならサーミスタを交換。"
      }
    ],
    "resetMethod": "交換後、リセット操作。",
    "keywords": [
      "12",
      "吹出温度",
      "サーミスタ",
      "室内",
      "日立"
    ]
  },
  {
    "id": "hitachi-13",
    "code": "13",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内熱交換器凍結保護作動",
    "urgency": "medium",
    "description": "冷房または除湿運転時、室内熱交換器温度が0℃以下に低下し、熱交換器の氷結・破損を防ぐために停止しました。",
    "possibleCauses": [
      "室内エアフィルターの極度なホコリ目詰まり（風量不足）",
      "室内ファンモータの低速回転・停止",
      "冷媒ガス不足（蒸発圧力低下による過冷却）",
      "室内凍結保護サーミスタの特性ズレ"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "エアフィルター・ファン清掃",
        "detail": "室内機のフィルターおよび熱交換器フィンの汚れ・目詰まりを清掃。"
      },
      {
        "step": 2,
        "title": "冷媒圧時点検",
        "detail": "低圧圧力が過度に低下していないかマニホールドで点検（ガス漏れの有無）。"
      }
    ],
    "resetMethod": "フィルター清掃または氷解凍後、リモコンで再起動。",
    "keywords": [
      "13",
      "凍結保護",
      "氷結",
      "室内熱交",
      "風量不足",
      "日立"
    ]
  },
  {
    "id": "hitachi-14",
    "code": "14",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内配管ガス管サーミスタ異常",
    "urgency": "medium",
    "description": "室内熱交換器のガス管サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "ガス管サーミスタの断線または短絡",
      "配管ホルダーからのサーミスタ脱落",
      "基板コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定とホルダー固定点検",
        "detail": "ガス管サーミスタの抵抗値測定および配管への密着状態を点検。"
      },
      {
        "step": 2,
        "title": "交換",
        "detail": "断線・短絡時はサーミスタ交換。"
      }
    ],
    "resetMethod": "電源再投入。",
    "keywords": [
      "14",
      "ガス管",
      "配管サーミスタ",
      "室内",
      "日立"
    ]
  },
  {
    "id": "hitachi-19",
    "code": "19",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "室内ファンモータ保護作動・回転数異常",
    "urgency": "high",
    "description": "室内ファンモータがロックしているか、規定回転数に達しない（ファン過電流または回転センサ異常）ため停止しました。",
    "possibleCauses": [
      "ファンモータの焼き付き・ベアリングロック",
      "シロッコファン/プロペラへの異物噛み込み",
      "ファンモータ内部のホールIC（回転センサ）不良",
      "室内機プリント基板のファン駆動回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "手動回転確認",
        "detail": "電源を切り、室内ファンを手で回して軽くスムーズに回るか確認（引っ掛かり・異音の有無）。"
      },
      {
        "step": 2,
        "title": "ファンモータ巻線抵抗測定",
        "detail": "ファンモータコネクタを抜き、相間抵抗値が均一か測定。"
      },
      {
        "step": 3,
        "title": "モータまたは基板交換",
        "detail": "手動回転が重い・巻線異常ならモータ交換。モータ正常で回らないなら室内基板交換。"
      }
    ],
    "resetMethod": "異物除去または部品交換後、電源再投入。",
    "keywords": [
      "19",
      "室内ファン",
      "ファンモータ",
      "回転数",
      "ロック",
      "日立"
    ]
  },
  {
    "id": "hitachi-20",
    "code": "20",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外圧縮機上部サーミスタ異常",
    "urgency": "medium",
    "description": "圧縮機ヘッド（天頂部）に取り付けられた圧縮機上部サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "圧縮機上部サーミスタの断線または短絡",
      "サーミスタ配線の熱劣化",
      "室外制御基板コネクタの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "サーミスタ抵抗値測定",
        "detail": "コネクタを外し、上部サーミスタ単体の抵抗値を測定し、断線(∞Ω)または短絡(0Ω)を確認。"
      },
      {
        "step": 2,
        "title": "交換",
        "detail": "異常値ならサーミスタを交換。"
      }
    ],
    "resetMethod": "交換後、電源再投入。",
    "keywords": [
      "20",
      "圧縮機上部",
      "コンプレッサーサーミスタ",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-21",
    "code": "21",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外高圧圧力センサ特性異常",
    "urgency": "medium",
    "description": "室外機の高圧圧力センサ特性異常を検知しました。",
    "possibleCauses": [
      "高圧圧力センサ内部不良",
      "コネクタ緩み・接触不良",
      "室外機基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "センサ電圧チェック",
        "detail": "ゲージマニホールドの指針圧力とセンサ出力電圧の相関をチェック。"
      },
      {
        "step": 2,
        "title": "交換",
        "detail": "圧力との不一致時はセンサ交換。"
      }
    ],
    "resetMethod": "電源再投入。",
    "keywords": [
      "21",
      "高圧センサ",
      "圧力センサ",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-22",
    "code": "22",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外外気温度サーミスタ異常",
    "urgency": "low",
    "description": "室外機の外気温度サーミスタの断線または短絡を検知しました。",
    "possibleCauses": [
      "外気サーミスタの断線または短絡",
      "雨水侵入によるコネクタ腐食・接触不良",
      "室外制御基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "外気サーミスタ抵抗値測定",
        "detail": "室外基板コネクタを外し、外気温と照合して抵抗値を点検（25℃時：約10kΩ〜15kΩ）。"
      },
      {
        "step": 2,
        "title": "交換",
        "detail": "断線・短絡なら外気サーミスタを交換。"
      }
    ],
    "resetMethod": "交換後、リセット。",
    "keywords": [
      "22",
      "外気温",
      "外気サーミスタ",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-23",
    "code": "23",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外第2吐出ガスサーミスタ異常",
    "urgency": "medium",
    "description": "複数圧縮機搭載機において、第2圧縮機の吐出ガス温度サーミスタ断線または短絡を検知しました。",
    "possibleCauses": [
      "第2吐出サーミスタ断線・短絡",
      "コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "第2吐出サーミスタの抵抗値を測定し、正常値から外れていれば交換。"
      }
    ],
    "resetMethod": "部品交換後、リセット。",
    "keywords": [
      "23",
      "第2吐出",
      "吐出サーミスタ",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-24",
    "code": "24",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外熱交換器配管液管サーミスタ異常",
    "urgency": "medium",
    "description": "室外熱交換器の液管温度サーミスタ（霜取り・過冷却制御用）の断線または短絡を検知しました。",
    "possibleCauses": [
      "室外熱交サーミスタの断線・ショート",
      "配線被覆の擦れ・断線",
      "コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "抵抗値測定",
        "detail": "テスターでサーミスタ抵抗値を測定（正常時：25℃で約10kΩ〜15kΩ）。"
      },
      {
        "step": 2,
        "title": "交換",
        "detail": "異常値ならサーミスタを交換。"
      }
    ],
    "resetMethod": "交換後、電源再投入。",
    "keywords": [
      "24",
      "熱交サーミスタ",
      "室外液管",
      "霜取り",
      "日立"
    ]
  },
  {
    "id": "hitachi-29",
    "code": "29",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外低圧圧力センサ異常",
    "urgency": "medium",
    "description": "室外機の低圧圧力センサの断線または短絡を検知しました。",
    "possibleCauses": [
      "低圧圧力センサの故障",
      "センサ配線断線・コネクタ外れ",
      "室外基板のセンサ入力回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "低圧センサ出力電圧測定",
        "detail": "マニホールドの低圧圧力とセンサ出力DC電圧（DC0.5V〜4.5V）を照合。"
      },
      {
        "step": 2,
        "title": "交換",
        "detail": "電圧固定・出力なしなら低圧センサを交換。"
      }
    ],
    "resetMethod": "交換後、電源再投入。",
    "keywords": [
      "29",
      "低圧センサ",
      "圧力センサ",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-31",
    "code": "31",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "システム",
    "title": "室内外機種不一致・能力設定異常",
    "urgency": "high",
    "description": "室内機と室外機の組み合わせが不正であるか、能力設定ディップスイッチの設定誤りを検知しました。",
    "possibleCauses": [
      "室内機と室外機の冷媒種・インバーター仕様不一致",
      "室内機の合計容量が室外機の許容接続容量を超過",
      "基板交換時の能力設定ディップスイッチ（DSW）未設定または設定誤り"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "ディップスイッチ設定確認",
        "detail": "室内機および室外機制御基板の能力設定スイッチ（DSW）が、旧基板や機種仕様書通りの位置になっているか確認。"
      },
      {
        "step": 2,
        "title": "接続室内機容量合計確認",
        "detail": "マルチエアコンの場合、接続されている全室内機の馬力合計が室外機許容範囲内か確認。"
      }
    ],
    "resetMethod": "ディップスイッチ設定修正後、電源を必ず一度遮断して再投入。",
    "keywords": [
      "31",
      "機種不一致",
      "能力設定",
      "ディップスイッチ",
      "容量オーバー",
      "日立"
    ]
  },
  {
    "id": "hitachi-32",
    "code": "32",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "システム",
    "title": "他系統室内外通信異常（系統間伝送異常）",
    "urgency": "high",
    "description": "集中管理リモコンまたは複数冷媒系統システムにおいて、別系統ユニットとの通信途絶を検知しました。",
    "possibleCauses": [
      "系統間通信線（H-LINK線）の断線・短絡",
      "他系統室外機の電源OFF",
      "終端抵抗ピン（ターミネータ）の重複設定または未設定"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "他系統室外機電源確認",
        "detail": "システム内のすべての室外機ブレーカーがONになっているか確認。"
      },
      {
        "step": 2,
        "title": "H-LINK配線および終端抵抗確認",
        "detail": "H-LINK通信線の導通を確認し、終端抵抗（DSW）がシステム全体で1箇所のみONになっているか点検。"
      }
    ],
    "resetMethod": "電源ON・配線修正後、全電源リセット。",
    "keywords": [
      "32",
      "系統間通信",
      "H-LINK",
      "集中管理",
      "日立"
    ]
  },
  {
    "id": "hitachi-35",
    "code": "35",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "システム",
    "title": "室内ユニットアドレス重複設定異常",
    "urgency": "high",
    "description": "同一冷媒系統内の複数の室内ユニットで、同じ室内ユニットアドレスが設定されています。",
    "possibleCauses": [
      "室内機基板の冷媒系統/号機設定ロータリースイッチ(RSW/DSW)の重複",
      "試運転時・増設時のアドレス設定誤り"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "各室内機のアドレススイッチ確認",
        "detail": "同一冷媒配管系統に接続されている全室内機の制御基板ロータリースイッチ(RSW1, DSW)を確認し、番号の重複を解消（0〜15等）。"
      }
    ],
    "resetMethod": "アドレス修正後、全室内外機のブレーカーを落として再投入。",
    "keywords": [
      "35",
      "アドレス重複",
      "ロータリースイッチ",
      "RSW",
      "日立"
    ]
  },
  {
    "id": "hitachi-38",
    "code": "38",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外機保護検出基板異常",
    "urgency": "high",
    "description": "室外機の保護検出回路または制御基板自身のハードウェア異常を検知しました。",
    "possibleCauses": [
      "室外機制御基板の演算マイコン・メモリ異常",
      "外来高圧サージ・雷ノイズ混入",
      "基板コネクタ接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源リセット",
        "detail": "室外機ブレーカーをOFFにし、約3分後に再投入して正常復帰するか確認。"
      },
      {
        "step": 2,
        "title": "基板交換",
        "detail": "電源再投入後も直ちに38が表示される場合は室外制御基板を交換。"
      }
    ],
    "resetMethod": "電源再投入。",
    "keywords": [
      "38",
      "保護基板",
      "室外基板",
      "マイコン",
      "日立"
    ]
  },
  {
    "id": "hitachi-39",
    "code": "39",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外圧縮機過電流遮断異常（瞬時過電流）",
    "urgency": "critical",
    "description": "圧縮機に瞬時大電流（過電流）が流れ、パワートランジスタ（IPM）保護回路が作動して停止しました。",
    "possibleCauses": [
      "圧縮機内部の焼き付き・メカニカルロック",
      "インバーター基板（IPMパワートランジスタ）の短絡破損",
      "圧縮機モータ巻線の絶縁破壊・短絡",
      "冷媒液バック運転による液圧縮"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機絶縁抵抗・巻線抵抗測定",
        "detail": "圧縮機端子(U, V, W)の配線を外し、U-アース間の絶縁抵抗(メガテスター、1MΩ以上)および相間抵抗(各相数Ωで均一)を測定。"
      },
      {
        "step": 2,
        "title": "インバーターIPM導通点検",
        "detail": "インバーター基板のP-U,V,W間およびN-U,V,W間のダイオード導通をテスターで点検し短絡の有無を確認。"
      },
      {
        "step": 3,
        "title": "部品交換",
        "detail": "圧縮機ロックまたは巻線短絡時は圧縮機交換。IPM短絡時はインバーター基板を交換。"
      }
    ],
    "resetMethod": "原因部品交換後、リセット。",
    "keywords": [
      "39",
      "過電流",
      "圧縮機ロック",
      "IPM",
      "インバーター",
      "日立"
    ]
  },
  {
    "id": "hitachi-41",
    "code": "41",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "高圧圧力過昇異常（高圧カット作動）",
    "urgency": "critical",
    "description": "冷凍サイクルの高圧圧力が規定値（約4.15MPa）を超過し、高圧圧力スイッチが作動しました。",
    "possibleCauses": [
      "室外機熱交換器の極度な目詰まり・汚れ（ホコリ、落葉、ゴミ）",
      "室外ファンモータ停止・ファン破損・強風逆回転",
      "冷媒の過充填（チャージオーバー）",
      "室外機周囲のショートサーキット（風の跳ね返り）",
      "高圧圧力スイッチ自体の接点不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "室外熱交換器とファンの点検",
        "detail": "室外機背面のフィンが目詰まりしていないか清掃。運転時にファンが正常回転しているか確認。"
      },
      {
        "step": 2,
        "title": "高圧圧力測定",
        "detail": "マニホールドを接続し、実高圧圧力を測定。高圧が跳ね上がっている場合は熱交換不良または過充填。"
      },
      {
        "step": 3,
        "title": "高圧スイッチ導通確認",
        "detail": "圧力が下がっても高圧スイッチが開いたまま(非導通)ならスイッチ不良。"
      }
    ],
    "resetMethod": "熱交換器清掃または高圧低下後、電源再投入。",
    "keywords": [
      "41",
      "高圧カット",
      "圧力過昇",
      "室外ファン",
      "目詰まり",
      "過充填",
      "日立"
    ]
  },
  {
    "id": "hitachi-42",
    "code": "42",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室内機",
    "title": "高圧圧力過昇異常（暖房時室内熱交保護）",
    "urgency": "high",
    "description": "暖房運転時、室内熱交換器の温度および高圧圧力が異常過昇したため停止しました。",
    "possibleCauses": [
      "室内機エアフィルターの極度な目詰まり",
      "室内ファンモータの停止・風量極小運転",
      "室内機吸込口・吹出口の閉塞（障害物）"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "エアフィルター清掃",
        "detail": "室内機のエアフィルターを外し、ホコリ・汚れを清掃。"
      },
      {
        "step": 2,
        "title": "室内ファン風量点検",
        "detail": "室内ファンが強風設定で正常に吹き出しているか確認。"
      }
    ],
    "resetMethod": "フィルター清掃後、リモコンで再起動。",
    "keywords": [
      "42",
      "暖房高圧",
      "フィルター目詰まり",
      "室内熱交",
      "日立"
    ]
  },
  {
    "id": "hitachi-43",
    "code": "43",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "圧縮機過電流・過負荷異常",
    "urgency": "high",
    "description": "圧縮機の運転電流が許容上限値を継続して超過したため、過負荷保護で停止しました。",
    "possibleCauses": [
      "室外機周囲温度の異常高温（炎天下ショートサーキット）",
      "冷媒過充填による高圧・低圧の過大",
      "圧縮機内部の摺動部摩耗・負荷増大"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "クランプメーターで運転電流測定",
        "detail": "実運転電流を測定し、銘板定格電流と比較。"
      },
      {
        "step": 2,
        "title": "室外機放熱環境の点検",
        "detail": "室外機の風通し、フィンの汚れを改善。"
      }
    ],
    "resetMethod": "放熱改善後、電源再投入。",
    "keywords": [
      "43",
      "圧縮機過電流",
      "過負荷",
      "クランプ",
      "日立"
    ]
  },
  {
    "id": "hitachi-45",
    "code": "45",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "高圧圧力低下異常",
    "urgency": "high",
    "description": "圧縮機運転中にもかかわらず高圧圧力が上がらない（低すぎる）異常を検知しました。",
    "possibleCauses": [
      "重度な冷媒ガス漏れ・ガス欠",
      "四方弁の切替不良（弁内リーク・中間停止）",
      "圧縮機の吸入・吐出バルブ破損（圧縮不良）"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "高圧・低圧の圧力差点検",
        "detail": "マニホールドを接続し、圧縮機運転中に高圧と低圧の差圧が正常に発生しているか確認。"
      },
      {
        "step": 2,
        "title": "冷媒漏れ検知",
        "detail": "冷媒圧力が極端に低ければ配管溶接部やフレア部のリーク点検を実施。"
      },
      {
        "step": 3,
        "title": "四方弁点検",
        "detail": "四方弁コイルの通電状態および弁体の温度差（バイパス有無）を確認。"
      }
    ],
    "resetMethod": "冷媒修理または部品交換後、リセット。",
    "keywords": [
      "45",
      "高圧低下",
      "ガス欠",
      "冷媒漏れ",
      "四方弁",
      "日立"
    ]
  },
  {
    "id": "hitachi-47",
    "code": "47",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "低圧圧力低下防止異常（真空引き運転防止）",
    "urgency": "high",
    "description": "冷凍サイクルの低圧圧力が規定値以下に異常低下し、室内機の凍結や圧縮機破損を防ぐために停止しました。",
    "possibleCauses": [
      "冷媒ガス不足（ガス漏れ）",
      "電子膨張弁の絞りすぎ・目詰まり（閉固着）",
      "冷媒配管の閉塞（配管潰れ、ドライヤー詰まり）",
      "室内ファン停止または極度のフィルター詰まり"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "マニホールドによる低圧圧力測定",
        "detail": "低圧サービスポートでガス圧力を測定し、規定値以下（0.15MPa以下等）に落ちていないか確認。"
      },
      {
        "step": 2,
        "title": "電子膨張弁動作点検",
        "detail": "膨張弁前後の温度差を確認し、弁が開いているか点検。"
      },
      {
        "step": 3,
        "title": "ガス漏れ検査",
        "detail": "配管系統のガス漏れを点検し、規定冷媒量を再充填。"
      }
    ],
    "resetMethod": "ガス漏れ修理・冷媒充填後、電源再投入。",
    "keywords": [
      "47",
      "低圧低下",
      "冷媒不足",
      "ガス漏れ",
      "膨張弁閉塞",
      "凍結",
      "日立"
    ]
  },
  {
    "id": "hitachi-51",
    "code": "51",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "インバーター電流センサ異常（CT異常）",
    "urgency": "medium",
    "description": "インバーター基板上の電流検出センサ（CT）が、圧縮機停止中にもかかわらず電流値を検知するなど異常を示しました。",
    "possibleCauses": [
      "インバーター基板上の電流センサ（CT回路）故障",
      "電流センサコネクタの接触不良",
      "室外機インバーター基板不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "電源リセット",
        "detail": "電源ブレーカーを落として3分後に再投入し、再発するか確認。"
      },
      {
        "step": 2,
        "title": "インバーター基板交換",
        "detail": "再起動直後に51が出る場合はインバーター基板（CT内蔵）を交換。"
      }
    ],
    "resetMethod": "基板交換後、リセット。",
    "keywords": [
      "51",
      "電流センサ",
      "CT異常",
      "インバーター基板",
      "日立"
    ]
  },
  {
    "id": "hitachi-53",
    "code": "53",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "インバーターIPM保護作動（パワートランジスタ異常）",
    "urgency": "critical",
    "description": "インバーターの心臓部であるパワーモジュール（IPM）が過熱、過電流、または駆動電源電圧低下を検知して停止しました。",
    "possibleCauses": [
      "IPM（インテリジェントパワーモジュール）の短絡破損",
      "圧縮機モータの巻線短絡・焼損",
      "インバーター放熱グリス切れ・放熱フィン緩み",
      "室外ファン停止によるインバーターBOX内過熱"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "圧縮機巻線点検",
        "detail": "圧縮機端子(U,V,W)の相間抵抗および絶縁抵抗をメガテスターで測定。"
      },
      {
        "step": 2,
        "title": "IPMダイオード導通測定",
        "detail": "テスターのダイオードレンジでP-U,V,WおよびN-U,V,Wの順方向・逆方向特性を点検。"
      },
      {
        "step": 3,
        "title": "放熱状態点検",
        "detail": "IPMと放熱フィンの密着ネジ緩み、シリコングリスの乾燥がないか確認。"
      }
    ],
    "resetMethod": "不良部品（基板または圧縮機）交換後、電源再投入。",
    "keywords": [
      "53",
      "IPM",
      "パワートランジスタ",
      "過熱",
      "短絡",
      "インバーター",
      "日立"
    ]
  },
  {
    "id": "hitachi-54",
    "code": "54",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "インバーター放熱フィンサーミスタ過熱異常",
    "urgency": "high",
    "description": "インバーターパワートランジスタの放熱フィン温度が異常上昇（約95℃〜105℃以上）したため停止しました。",
    "possibleCauses": [
      "放熱フィンへのホコリ・油汚れ堆積による冷却不良",
      "室外ファンモータの停止・風量不足",
      "インバーター冷却ダクトの詰まり・変形",
      "フィンサーミスタの特性異常"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "放熱フィンの目視点検・清掃",
        "detail": "基板背面のアルミ放熱フィンにホコリが詰まっていないか確認しブラシで清掃。"
      },
      {
        "step": 2,
        "title": "室外ファン運転確認",
        "detail": "室外ファンが正常回転して電装品箱に冷却風が送られているか確認。"
      },
      {
        "step": 3,
        "title": "フィンサーミスタ抵抗値点検",
        "detail": "冷却後も異常表示が消えない場合はフィンサーミスタを点検・交換。"
      }
    ],
    "resetMethod": "冷却・清掃後、電源再投入。",
    "keywords": [
      "54",
      "放熱フィン",
      "フィン温度",
      "インバーター過熱",
      "日立"
    ]
  },
  {
    "id": "hitachi-57",
    "code": "57",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外ファンモータ異常（ファン保護作動）",
    "urgency": "high",
    "description": "室外ファンモータの過電流、ファンロック、または回転数検出異常を検知しました。",
    "possibleCauses": [
      "室外プロペラファンへの異物噛み込み（木の枝、ゴミ、氷結）",
      "強風（台風等）によるファン逆回転起動負荷",
      "室外DCファンモータの故障（ベアリング固着、巻線短絡）",
      "室外ファンコントローラ基板（ファンインバーター）不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "プロペラファンの手動回転点検",
        "detail": "電源を切り、ファンを手で回して軽く回転するか確認（異物・引っ掛かりの有無）。"
      },
      {
        "step": 2,
        "title": "ファンモータコネクタ・電圧点検",
        "detail": "ファンモータ電源電圧（DC280V〜330V）および制御電圧（DC15V）がきているか測定。"
      },
      {
        "step": 3,
        "title": "モータまたはファン基板交換",
        "detail": "モータロック時はモータ交換、電圧出力なしならファン基板交換。"
      }
    ],
    "resetMethod": "異物除去または部品交換後、ブレーカーリセット。",
    "keywords": [
      "57",
      "室外ファン",
      "ファンモータ",
      "DCファン",
      "ロック",
      "日立"
    ]
  },
  {
    "id": "hitachi-58",
    "code": "58",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "室外ファンコントローラ通信異常",
    "urgency": "high",
    "description": "室外メイン基板とファンモータ専用インバーターコントローラ間の通信異常を検知しました。",
    "possibleCauses": [
      "ファンコントローラ基板の電源ヒューズ断線",
      "基板間接続ハーネスの接触不良・外れ",
      "ファンコントローラ基板自体の故障"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "基板間ハーネス接続点検",
        "detail": "制御基板とファン基板間の通信コネクタを点検。"
      },
      {
        "step": 2,
        "title": "ファン基板交換",
        "detail": "配線正常ならファンコントローラ基板を交換。"
      }
    ],
    "resetMethod": "電源再投入。",
    "keywords": [
      "58",
      "ファンコントローラ",
      "ファン基板",
      "室外",
      "日立"
    ]
  },
  {
    "id": "hitachi-c1",
    "code": "C1",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "リモコン",
    "title": "リモコン伝送異常（室内〜リモコン通信エラー）",
    "urgency": "medium",
    "description": "液晶ワイヤードリモコンと室内ユニット間の通信が途絶しました。",
    "possibleCauses": [
      "リモコンコードの断線・挟み込み・ビス打ち込み破損",
      "リモコン端子台（A-B / 1-2）のネジ緩み・接触不良",
      "リモコン自体の基板故障",
      "室内機基板のリモコン通信回路不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "リモコン端子電圧測定",
        "detail": "室内機側リモコン端子台およびリモコン本体端子で、DC約12V〜17Vの通信電圧があるかテスターで測定。"
      },
      {
        "step": 2,
        "title": "仮設線テスト",
        "detail": "短い別線でリモコンを室内機直下に直結し、正常表示するか確認（配線断線の切り分け）。"
      },
      {
        "step": 3,
        "title": "交換",
        "detail": "直結でもNGならリモコンまたは室内機基板を交換。"
      }
    ],
    "resetMethod": "配線修理後、自動復帰または電源再投入。",
    "keywords": [
      "c1",
      "C1",
      "リモコン",
      "伝送",
      "通信エラー",
      "断線",
      "日立"
    ]
  },
  {
    "id": "hitachi-ee",
    "code": "EE",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "室外機",
    "title": "圧縮機保護警報（緊急ロックアウト）",
    "urgency": "critical",
    "description": "重大な冷凍サイクル異常または過電流が短時間内に連続して発生したため、機器保護のためにシステム全体が完全ロックアウト停止しました。",
    "possibleCauses": [
      "圧縮機過電流（アラーム39）の連続発報",
      "高圧過昇（アラーム41）の連続発報",
      "吐出温度過昇（アラーム07）の連続発報",
      "圧縮機内部の重大な機械的破損"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "エラー履歴の確認",
        "detail": "リモコンのチェックモード等で、EE直前に発報していた根本アラーム（07, 39, 41等）を確認。"
      },
      {
        "step": 2,
        "title": "根本原因の修理",
        "detail": "単なる電源リセットでは復帰しない場合があるため、冷媒漏れ・ファン停止・圧縮機破損等の根本原因を完全修理。"
      }
    ],
    "resetMethod": "根本原因修理後、室外機・室内機電源を完全遮断し、5分以上待機後に再投入。",
    "keywords": [
      "ee",
      "EE",
      "保護警報",
      "ロックアウト",
      "緊急停止",
      "圧縮機保護",
      "日立"
    ]
  },
  {
    "id": "hitachi-b1",
    "code": "b1",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "システム",
    "title": "室内ユニットアドレス設定異常",
    "urgency": "medium",
    "description": "室内機基板のアドレス設定が規定の範囲（0〜15または0〜63）を超えているか、設定ミスを検知しました。",
    "possibleCauses": [
      "室内機制御基板のロータリースイッチ(RSW)・ディップスイッチ(DSW)の設定誤り",
      "設定スイッチの接触不良"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "アドレススイッチ設定確認",
        "detail": "室内機基板のRSWおよびDSWの設定値を仕様書に従って正しく再設定。"
      }
    ],
    "resetMethod": "設定修正後、電源を再投入。",
    "keywords": [
      "b1",
      "B1",
      "アドレス設定",
      "室内アドレス",
      "日立"
    ]
  },
  {
    "id": "hitachi-b5",
    "code": "b5",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "システム",
    "title": "室内ユニット接続台数オーバー",
    "urgency": "high",
    "description": "1系統の室外ユニットに接続可能な室内ユニットの上限台数を超えて接続されています。",
    "possibleCauses": [
      "室内ユニット接続台数が室外機許容台数（例：最大16台）を超過",
      "他系統の室内機通信線が誤って混触・渡り接続されている"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "通信配線系統の確認",
        "detail": "室外機端子台から出ている通信線が別系統の冷媒配管系統と混じっていないか渡り配線を追跡確認。"
      },
      {
        "step": 2,
        "title": "接続台数の見直し",
        "detail": "許容台数内に収まるよう配線を分離。"
      }
    ],
    "resetMethod": "配線修正後、全電源を再投入。",
    "keywords": [
      "b5",
      "B5",
      "台数オーバー",
      "接続台数",
      "マルチ",
      "日立"
    ]
  },
  {
    "id": "hitachi-dd",
    "code": "dd",
    "maker": "hitachi",
    "makerName": "日立",
    "unit": "リモコン",
    "title": "リモコン配線誤り（誤接続検知）",
    "urgency": "medium",
    "description": "リモコン配線が誤った端子に接続されているか、他の室内機リモコン線とクロス接続されています。",
    "possibleCauses": [
      "リモコン配線の誤接続",
      "2台リモコン制御時の主・従（親・子）設定誤り"
    ],
    "checkPoints": [
      {
        "step": 1,
        "title": "リモコン配線と極性確認",
        "detail": "室内機側リモコン端子とリモコン側の端子接続が正しいか確認。"
      },
      {
        "step": 2,
        "title": "親機・子機設定確認",
        "detail": "2リモコン制御の場合、片方が「親」、もう片方が「子」に設定されているかリモコン裏面スイッチを確認。"
      }
    ],
    "resetMethod": "配線・スイッチ修正後、電源再投入。",
    "keywords": [
      "dd",
      "DD",
      "リモコン誤配線",
      "2リモコン",
      "日立"
    ]
  }
];

// メーカー一覧定義
const MAKERS = [
  { id: "all", name: "全メーカー", shortName: "ALL", color: "#ff7a00", bg: "#16191f" },
  { id: "daikin", name: "ダイキン", shortName: "DAIKIN", color: "#00b4d8", bg: "rgba(0, 180, 216, 0.12)", logoText: "DAIKIN" },
  { id: "panasonic", name: "パナソニック", shortName: "Panasonic", color: "#06d6a0", bg: "rgba(6, 214, 160, 0.12)", logoText: "Panasonic" },
  { id: "toshiba", name: "東芝", shortName: "TOSHIBA", color: "#ff3860", bg: "rgba(255, 56, 96, 0.12)", logoText: "TOSHIBA" },
  { id: "mitsubishi", name: "三菱 (電機/重工)", shortName: "MITSUBISHI", color: "#ff0055", bg: "rgba(255, 0, 85, 0.12)", logoText: "MITSUBISHI" },
  { id: "hitachi", name: "日立", shortName: "HITACHI", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", logoText: "HITACHI" }
];

// クイック症状タグ
const QUICK_SYMPTOMS = [
  { label: "💧 ドレン・水位", query: "ドレン" },
  { label: "🌪 ファン・送風", query: "ファン" },
  { label: "📡 通信・渡り線", query: "通信" },
  { label: "🔥 高圧・圧力", query: "高圧" },
  { label: "🌡 吐出温度・過熱", query: "吐出" },
  { label: "❄ 冷媒・ガス漏れ", query: "冷媒" },
  { label: "🔌 電源・逆相", query: "電源" },
  { label: "📟 基板・インバータ", query: "インバータ" },
  { label: "📍 センサ・サーミスタ", query: "サーミスタ" }
];

// 専用キーパッド用キー定義（左：英字、右：数字テンキー）
const KEYPAD_ALPHA_KEYS = [
  { char: "A", type: "letter" },
  { char: "B", type: "letter" },
  { char: "C", type: "letter" },
  { char: "D", type: "letter" },
  { char: "E", type: "letter" },
  { char: "F", type: "letter" },
  { char: "H", type: "letter" },
  { char: "J", type: "letter" },
  { char: "L", type: "letter" },
  { char: "P", type: "letter", span: "wide" },
  { char: "U", type: "letter", span: "wide" }
];

const KEYPAD_NUM_KEYS = [
  { char: "1", type: "digit" },
  { char: "2", type: "digit" },
  { char: "3", type: "digit" },
  { char: "4", type: "digit" },
  { char: "5", type: "digit" },
  { char: "6", type: "digit" },
  { char: "7", type: "digit" },
  { char: "8", type: "digit" },
  { char: "9", type: "digit" },
  { char: "CLR", type: "action", action: "clear", label: "C" },
  { char: "0", type: "digit" },
  { char: "BS", type: "action", action: "backspace", label: "⌫" }
];

const KEYPAD_KEYS = [...KEYPAD_ALPHA_KEYS, ...KEYPAD_NUM_KEYS];
