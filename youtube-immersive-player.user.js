// ==UserScript==
// @name         YouTube Immersive Player | YouTube沉浸式播放器
// @namespace    https://github.com/AsterHours/youtube-immersive-player
// @description  Please check the GitHub link above. 请访问上方的GitHub链接查看说明。
// @license      MIT © Aster Hours
// @version      1.49
// @author       Aster
// @match        https://www.youtube.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js
// @downloadURL  https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js
// ==/UserScript==

(function () {
  'use strict';

  // ==========================================================
  // CONFIG 用户设置区 / User Config Flags / 設定スイッチ
  // ==========================================================
  const CONFIG = {
    // OPEN_RIGHT_ON_CHAPTER_BUTTON  <-- !NEW!
    // EN: Clicking the in-player chapter title button (.ytp-chapter-title.ytp-button) opens the right drawer.
    // ZH: 点击播放器内章节标题按钮（.ytp-chapter-title.ytp-button）时展开右侧抽屉。
    // JA: プレーヤー内の章タイトルボタン（.ytp-chapter-title.ytp-button）クリックで右側ドロワーを開く。
    OPEN_RIGHT_ON_CHAPTER_BUTTON: true,
    
    // ENABLE_INLINE_RECS
    // EN: Enable the immersive right-panel behavior (hide by default, float drawer on normal mode).
    // ZH: 启用沉浸式右侧推荐栏（默认隐藏，普通模式可浮出抽屉）。
    // JA: 没入型の右側おすすめパネルを有効化（デフォルト非表示、通常モードでドロワー表示）。
    ENABLE_INLINE_RECS: true,

    // ALLOW_RIGHT_ON_NORMAL
    // EN: Allow the right recommendations panel to appear in normal (non-theater, non-fullscreen) mode.
    // ZH: 在普通模式（非影院、非全屏）下允许显示右侧推荐栏。
    // JA: 通常モード（シアター/全画面以外）で右側パネルの表示を許可。
    ALLOW_RIGHT_ON_NORMAL: true,

    // TOGGLE_WITH_MMB_ON_VIDEO
    // EN: Middle-click on the video toggles the right recommendations panel.
    // ZH: 中键点击视频可切换右侧推荐栏显隐。
    // JA: 動画上の中クリックで右側パネルの表示/非表示を切り替え。
    TOGGLE_WITH_MMB_ON_VIDEO: true,

    // TOGGLE_WITH_V_KEY
    // EN: Press "V" to toggle the right recommendations panel (ignored in inputs/comments).
    // ZH: 按下 “V” 切换右侧推荐栏（输入框/评论区中无效）。
    // JA: 「V」キーで右側パネルを切替（入力欄/コメント中は無効）。
    TOGGLE_WITH_V_KEY: true,

    // AUTO_HIDE_SECONDARY_ON_LEAVE
    // EN: Auto collapse the right panel when the mouse leaves #secondary.
    // ZH: 鼠标移出 #secondary 时自动折叠右侧推荐栏（原有功能）。
    // JA: マウスが #secondary から離れたら自動で折りたたむ（既存機能）。
    AUTO_HIDE_SECONDARY_ON_LEAVE: true,

    // KEEP_SECONDARY_WHEN_OVER_POPUP
    // EN: Do NOT collapse if the mouse enters popup menu (e.g., #contentWrapper / menu dropdown).
    // ZH: 鼠标移向弹出菜单（如 #contentWrapper/下拉菜单）时，不自动折叠。
    // JA: ポップアップメニュー（#contentWrapper 等）へ移動する場合は折りたたまない。
    KEEP_SECONDARY_WHEN_OVER_POPUP: true,

    // HIDE_PLAY_PAUSE_BEZEL
    // EN: Hide the big Play/Pause bezel overlay in the center (keep other bezels like volume/speed).
    // ZH: 隐藏中间巨大“播放/暂停”提示（保留音量/倍速等其他提示）。
    // JA: 中央の大きい再生/一時停止ベゼルのみ非表示（音量/速度などは維持）。
    HIDE_PLAY_PAUSE_BEZEL: true,

    // HIDE_ALL_BEZELS
    // EN: Hide ALL bezel overlays (more aggressive). Use with caution.
    // ZH: 隐藏所有 bezel 提示（更激进）。谨慎开启。
    // JA: すべてのベゼル表示を非表示（強力設定）。要注意。
    HIDE_ALL_BEZELS: false,

    // FIX_POPUP_MENU_ON_TOP
    // EN: Lift popup menu z-index above the right panel so the menu is not covered.
    // ZH: 提升弹出菜单层级到推荐栏之上，避免被遮挡。
    // JA: ポップアップメニューの z-index を右パネルより上にする（被らないように）。
    FIX_POPUP_MENU_ON_TOP: true,
  };
  // ============== CONFIG 结束 / End / 終了 ===================
























  // ==========================================================
  // 常量与样式拼接 / Constants & CSS Assembly / 定数とCSS組み立て
  // ==========================================================
  const STYLE_ID = 'tm-youtube-inline-recommend-style-v1-48';

  // 防止横向滚动条
  let css = `
    html, body { overflow-x: hidden !important; }
  `;

  // ====== 沉浸式布局样式 / Immersive Layout CSS / 没入レイアウトCSS ======
  if (CONFIG.ENABLE_INLINE_RECS) {
    css += `
      /* 默认隐藏推荐栏以避免闪现 | Hide secondary by default to avoid flicker | 初期は非表示でフリッカー防止 */
      #secondary { display: none !important; }
      ${CONFIG.ALLOW_RIGHT_ON_NORMAL ? `
      /* 普通模式下的浮动右侧栏 | Floating right panel in normal mode | 通常モードでの右側フロート */
      ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary {
        display: block !important;
        position: absolute !important;
        top: var(--tm-ytright-top, 56px) !important;
        right: 0 !important;
        width: min(420px, 38vw) !important;
        height: calc(100% - var(--tm-ytright-top, 56px)) !important;
        background: linear-gradient(
          to right,
          rgba(0,0,0,0) 0%,
          var(--yt-spec-general-background-a, #0f0f0f) 10%,
          var(--yt-spec-general-background-a, #0f0f0f) 100%
        ) !important; /* 渐变过渡 / Gradient / グラデーション */
        overflow-y: auto !important;
        opacity: 0 !important;
        pointer-events: none !important;
        z-index: 9999 !important; /* 右侧栏层级 / Right panel layer / レイヤ */
        transition: opacity 0.3s ease !important;
      }
      /* 显示状态 | Visible state | 表示時 */
      ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.show {
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      /* 主区居中 + 动画 | Center primary + transitions | メイン中央 & トランジション */
      ytd-watch-flexy:not([theater]):not([fullscreen]) #primary {
        margin: 0 auto !important;
        max-width: calc(100% - 475px) !important;
        opacity: 0;
        transition: max-width 0.25s ease, opacity 0.4s ease !important;
      }
      ytd-watch-flexy:not([theater]):not([fullscreen]).ready #primary { opacity: 1; }
      /* 视频容器居中 | Center video container | ビデオコンテナ中央寄せ */
      ytd-watch-flexy:not([theater]):not([fullscreen]) .html5-video-container,
      ytd-watch-flexy:not([theater]):not([fullscreen]) video.video-stream {
        position: relative !important;
        margin: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        width: auto !important;
        height: auto !important;
      }
      /* 减少推荐项内按钮干扰 | Reduce buttons inside secondary | 二次要素ボタンを抑制 */
      #secondary yt-button-renderer.yt-spec-button-view-model,
      #secondary .yt-spec-button-view-model { display: none !important; }
      /* 推荐列表右移 20px，留渐变空间 | Shift list 20px for gradient | リストを20px右へ */
      #secondary #items { transform: translateX(20px); }
      ` : ''}
      /* 隐藏全屏快捷操作按钮 | Hide fullscreen quick actions | 全画面クイック操作非表示 */
      #movie_player > div.ytp-overlays-container > div.ytp-overlay-bottom-right > div.ytp-fullscreen-quick-actions,
      #movie_player > div.ytp-fullscreen-grid > button { display: none !important; }
    `;
  }

  // ====== Bezel 控制样式 / Bezel Control CSS / ベゼル制御CSS ======
  if (CONFIG.HIDE_ALL_BEZELS) {
    css += `
      /* 一键隐藏所有 Bezel / Hide ALL bezels / すべてのベゼルを非表示 */
      #movie_player .ytp-bezel { display: none !important; }
    `;
  } else if (CONFIG.HIDE_PLAY_PAUSE_BEZEL) {
    css += `
      /* 仅隐藏播放/暂停 Bezel / Only hide Play/Pause bezel / 再生/一時停止のみ非表示 */
      #movie_player .ytp-bezel[aria-label="播放"],
      #movie_player .ytp-bezel[aria-label="暂停"],
      #movie_player .ytp-bezel[aria-label="Play"],
      #movie_player .ytp-bezel[aria-label="Pause"],
      #movie_player [role="status"][aria-label="播放"] .ytp-bezel,
      #movie_player [role="status"][aria-label="暂停"] .ytp-bezel,
      #movie_player [role="status"][aria-label="Play"] .ytp-bezel,
      #movie_player [role="status"][aria-label="Pause"] .ytp-bezel {
        display: none !important;
      }
    `;
  }

  // ====== 弹层层级修复 / Popup z-index Fix / ポップアップ重なり順修正 ======
  if (CONFIG.FIX_POPUP_MENU_ON_TOP) {
    css += `
      /* 确保弹出层在右侧栏之上 / Ensure popup is above secondary / ポップアップを右パネルより上に */
      ytd-popup-container { position: relative !important; z-index: 100000 !important; }
      tp-yt-iron-dropdown { z-index: 100001 !important; }
      ytd-menu-popup-renderer { position: relative !important; z-index: 100002 !important; }
      .ytd-menu-popup-renderer,
      .ytd-simple-menu-header-renderer,
      .ytd-menu-service-item-renderer { position: relative !important; z-index: 100003 !important; }
    `;
  }


  // ==========================================================
  // 样式注入 / Inject Styles / スタイル注入
  // ==========================================================
  function injectStyle() {
    if (!document.getElementById(STYLE_ID)) {
      const el = document.createElement('style');
      el.id = STYLE_ID;
      el.textContent = css;
      document.head.appendChild(el);
    }
  }

  // ==========================================================
  // 顶部高度变量 / Set Top Var (masthead height) / ヘッダー高さ設定
  // ==========================================================
  function setTopVar() {
    const masthead = document.getElementById('masthead');
    const top = (masthead && masthead.offsetHeight) || 56;
    document.documentElement.style.setProperty('--tm-ytright-top', `${top}px`);
  }

  // ==========================================================
  // 进入弹层判定 / Detect Entering Popup / ポップアップへの移動判定
  // - 用于防止鼠标从 #secondary 移到菜单时误折叠
  // ==========================================================
  function isEnteringPopup(e) {
    if (!CONFIG.KEEP_SECONDARY_WHEN_OVER_POPUP) return false;

    // relatedTarget 直接判定
    const rt = e && e.relatedTarget;
    if (rt && isPopupNode(rt)) return true;

    // composedPath 对 Shadow DOM 友好
    const path = (typeof e.composedPath === 'function') ? e.composedPath() : [];
    if (path && path.some(isPopupNode)) return true;

    // Shadow DOM 宿主兜底
    if (rt && rt.getRootNode) {
      const root = rt.getRootNode();
      const host = root && root.host;
      if (host && isPopupNode(host)) return true;
    }
    return false;
  }

  // ==========================================================
  // 弹层节点识别 / Identify Popup Nodes / ポップアップノード判定
  // - 匹配 ytd-popup-container / tp-yt-iron-dropdown / ytd-menu-popup-renderer / #contentWrapper
  // ==========================================================
  function isPopupNode(node) {
    if (!node || node.nodeType !== 1) return false; // ELEMENT_NODE
    try {
      if (
        node.matches?.('ytd-popup-container, tp-yt-iron-dropdown, ytd-menu-popup-renderer, .ytd-menu-popup-renderer, [role="menu"]')
        || node.id === 'contentWrapper'
      ) return true;

      // 祖先回溯几层，避免漏判
      let p = node;
      for (let i = 0; i < 5 && p; i++) {
        if (
          p.matches?.('ytd-popup-container, tp-yt-iron-dropdown, ytd-menu-popup-renderer, .ytd-menu-popup-renderer, [role="menu"]')
          || p.id === 'contentWrapper'
        ) return true;
        p = p.parentElement || (p.getRootNode && p.getRootNode().host) || null;
      }
    } catch (_) {}
    return false;
  }

  // ==========================================================
  // 切换/交互初始化 / Init Toggle & Interactions / トグル初期化
  // - 保留原有交互：中键 + V 键；不新增快捷键
  // - 离开 secondary 自动折叠（进入弹层时除外）
  // - 新增：点击章节标题按钮时展开右侧抽屉（受开关控制）
  // ==========================================================
  function initToggle(secondary) {
    if (!secondary || secondary.dataset.tmBound) return;
    secondary.dataset.tmBound = '1';

    // 点击播放器内的章节标题按钮 -> 展开右侧抽屉（仅普通模式）
    document.addEventListener('click', (e) => {
      if (!CONFIG.OPEN_RIGHT_ON_CHAPTER_BUTTON) return;
      if (!CONFIG.ENABLE_INLINE_RECS || !CONFIG.ALLOW_RIGHT_ON_NORMAL) return;

      const chapterBtn = e.target && e.target.closest?.('.ytp-chapter-title.ytp-button');
      if (!chapterBtn) return;

      const flexy = document.querySelector('ytd-watch-flexy');
      if (!flexy || flexy.hasAttribute('theater') || flexy.hasAttribute('fullscreen')) return;

      // 展开（不 toggle，避免误收起）
      secondary.classList.toggle('show');
      // 不阻止默认行为，保持 YouTube 自身动作
    });

    // 中键点击视频 -> 切换右侧栏
    if (CONFIG.TOGGLE_WITH_MMB_ON_VIDEO) {
      document.addEventListener('mousedown', (e) => {
        if (e.button === 1) {
          const video = e.target.closest && e.target.closest('video.video-stream');
          if (video) { secondary.classList.toggle('show'); e.preventDefault(); }
        }
      });
    }

    // V 键 -> 切换右侧栏（忽略输入框/评论区）
    if (CONFIG.TOGGLE_WITH_V_KEY) {
      document.addEventListener('keydown', (e) => {
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
        if (e.key && e.key.toLowerCase() === 'v') secondary.classList.toggle('show');
      });
    }

    // 移出 secondary 自动折叠；若进入弹层则不折叠
    if (CONFIG.AUTO_HIDE_SECONDARY_ON_LEAVE) {
      secondary.addEventListener('mouseleave', (e) => {
        if (isEnteringPopup(e)) return;
        secondary.classList.remove('show');
      });
    }
  }

  // ==========================================================
  // 初始化入口 / Init Entrypoint / 初期化エントリ
  // - 注入样式、设置顶部高度、绑定交互
  // - 站内跳转与窗口尺寸变化时复用
  // ==========================================================
  function init() {
    injectStyle();
    setTopVar();

    if (!CONFIG.ENABLE_INLINE_RECS) return true;

    const flexy = document.querySelector('ytd-watch-flexy');
    if (!flexy) return false;

    const secondary = flexy.querySelector('#secondary');
    const primary = flexy.querySelector('#primary');
    if (!secondary || !primary) return false;

    initToggle(secondary);

    // 触发主区淡入动画
    if (!flexy.classList.contains('ready')) {
      requestAnimationFrame(() => flexy.classList.add('ready'));
    }
    return true;
  }

  // ==========================================================
  // 启动与监听 / Bootstrapping & Observers / 起動と監視
  // ==========================================================
  // 定时重试：保证首次能挂上
  const tryInit = setInterval(() => { if (init()) clearInterval(tryInit); }, 500);

  // 窗口缩放：更新顶部变量
  window.addEventListener('resize', setTopVar);

  // 站内导航（SPA）变化：重新初始化必要逻辑
  const app = document.querySelector('ytd-app') || document.body;
  new MutationObserver(() => { init(); }).observe(app, { childList: true, subtree: true });

})();
