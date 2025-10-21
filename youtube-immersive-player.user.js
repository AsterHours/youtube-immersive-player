// ==UserScript==
// @name         YouTube Immersive Player | YouTube沉浸式播放器
// @namespace    https://github.com/AsterHours/youtube-immersive-player
// @description  Please check the GitHub link above. 请访问上方的GitHub链接查看说明。
// @license      MIT © Aster Hours
// @version      1.55
// @author       Aster
// @match        https://www.youtube.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js
// @downloadURL  https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js
// ==/UserScript==

(function () {
  'use strict';

  // ==========================================================
  // CONFIG 用户设置区 / User Config / 設定
  // ==========================================================
  const CONFIG = {
    // ENABLE_INLINE_RECS
    // EN: Enable immersive right panel behavior.
    // ZH: 启用沉浸式右侧推荐栏行为。
    // JA: 没入型の右側パネル挙動を有効化。
    ENABLE_INLINE_RECS: true,

    // ALLOW_RIGHT_ON_NORMAL
    // EN: Show floating right drawer in normal (non-theater, non-fullscreen) mode.
    // ZH: 普通模式（非影院/非全屏）显示右侧悬浮抽屉。
    // JA: 通常モード（シアター/全画面以外）で右ドロワーを表示。
    ALLOW_RIGHT_ON_NORMAL: true,

    // ALLOW_RIGHT_ON_THEATER
    // EN: Show floating right drawer in theater mode (overlays, does not shrink primary).
    // ZH: 剧场模式下显示覆盖式抽屉（不收窄主区）。
    // JA: シアターモードで右ドロワーを重ねて表示（メイン幅は縮めない）。
    ALLOW_RIGHT_ON_THEATER: true,

    // TOGGLE_WITH_MMB_ON_VIDEO
    // EN: Middle-click on the video toggles the right drawer (non-fullscreen).
    // ZH: 非全屏时，对视频中键切换右侧抽屉。
    // JA: 全画面以外で動画上の中クリックで右ドロワーを切替。
    TOGGLE_WITH_MMB_ON_VIDEO: true,

    // TOGGLE_WITH_V_KEY
    // EN: Key "V" toggles the right drawer (ignored in inputs/comments).
    // ZH: “V” 键切换右侧抽屉（输入/评论中无效）。
    // JA: 「V」キーで右ドロワー切替（入力/コメント中は無効）。
    TOGGLE_WITH_V_KEY: true,

    // AUTO_HIDE_SECONDARY_ON_LEAVE
    // EN: Auto collapse when mouse leaves #secondary.
    // ZH: 鼠标移出 #secondary 自动折叠。
    // JA: #secondary からマウスが離れたら自動で折りたたむ。
    AUTO_HIDE_SECONDARY_ON_LEAVE: true,

    // KEEP_SECONDARY_WHEN_OVER_POPUP
    // EN: Do not collapse when moving into popups/menus.
    // ZH: 移入弹出菜单时不折叠。
    // JA: ポップアップ/メニューへ移動時は折りたたまない。
    KEEP_SECONDARY_WHEN_OVER_POPUP: true,

    // HIDE_PLAY_PAUSE_BEZEL
    // EN: Hide big Play/Pause bezel (keep other bezels like volume/speed).
    // ZH: 隐藏中间大“播放/暂停”提示（保留音量/倍速等）。
    // JA: 中央の大きい再生/一時停止ベゼルのみ非表示（音量/速度は維持）。
    HIDE_PLAY_PAUSE_BEZEL: true,

    // HIDE_ALL_BEZELS
    // EN: Hide ALL bezels (aggressive).
    // ZH: 隐藏所有 Bezel（更激进）。
    // JA: すべてのベゼルを非表示（強力）。
    HIDE_ALL_BEZELS: false,

    // FIX_POPUP_MENU_ON_TOP
    // EN: Raise popup z-index to be above the drawer.
    // ZH: 提升弹出菜单层级高于抽屉。
    // JA: ポップアップの z-index をドロワーより上に。
    FIX_POPUP_MENU_ON_TOP: true,

    // OPEN_RIGHT_ON_CHAPTER_BUTTON
    // EN: Clicking .ytp-chapter-title.ytp-button toggles the right drawer (normal/theater).
    // ZH: 点击 .ytp-chapter-title.ytp-button 切换右侧抽屉（普通/剧场）。
    // JA: .ytp-chapter-title.ytp-button クリックで右ドロワーを切替（通常/シアター）。
    OPEN_RIGHT_ON_CHAPTER_BUTTON: true,

    // MMB_ACTS_AS_V_IN_FULLSCREEN
    // EN: In fullscreen, middle-click outside recommended items -> prevent default & simulate "V" (native toggle).
    // ZH: 全屏下，中键点非“推荐元素”→ 阻止默认 & 模拟“V”（原生切换）。
    // JA: 全画面時、おすすめ要素以外を中クリック→ デフォルト無効＆「V」を擬似送信（ネイティブ切替）。
    MMB_ACTS_AS_V_IN_FULLSCREEN: true,
  };
  // =================== CONFIG END ===========================























    
  // ==========================================================
  // Style assembly / 样式拼接 / スタイル組立
  // ==========================================================
  const STYLE_ID = 'tm-youtube-inline-recommend-style-v1-55';

  let css = `
    html, body { overflow-x: hidden !important; }
  `;

  if (CONFIG.ENABLE_INLINE_RECS) {
    css += `
      /* Hide secondary by default to avoid flicker / 默认隐藏避免闪现 / 初期は非表示でフリッカー防止 */
      #secondary { display: none !important; }

      ${CONFIG.ALLOW_RIGHT_ON_NORMAL ? `
      /* Normal (non-theater, non-fullscreen) floating drawer */
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
        ) !important;
        overflow-y: auto !important;
        opacity: 0 !important;
        pointer-events: none !important;
        z-index: 9999 !important;
        transition: opacity 0.3s ease !important;
      }
      ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.show {
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      /* Primary shrink + transitions (theater->normal back animation preserved) */
      ytd-watch-flexy:not([theater]):not([fullscreen]) #primary {
        margin: 0 auto !important;
        max-width: calc(100% - 475px) !important;
        opacity: 0;
        transition: max-width 0.25s ease, opacity 0.4s ease !important;
      }
      ytd-watch-flexy:not([theater]):not([fullscreen]).ready #primary { opacity: 1 !important; }

      /* Center video container */
      ytd-watch-flexy:not([theater]):not([fullscreen]) .html5-video-container,
      ytd-watch-flexy:not([theater]):not([fullscreen]) video.video-stream {
        position: relative !important;
        margin: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        width: auto !important;
        height: auto !important;
      }
      ` : ''}

      ${CONFIG.ALLOW_RIGHT_ON_THEATER ? `
      /* Theater (non-fullscreen): overlay drawer, primary not shrunk */
      ytd-watch-flexy[theater]:not([fullscreen]) #secondary {
        display: block !important;
        position: fixed !important;
        top: var(--tm-ytright-top, 56px) !important;
        right: 0 !important;
        width: min(420px, 36vw) !important;
        height: calc(100% - var(--tm-ytright-top, 56px)) !important;
        background: linear-gradient(
          to right,
          rgba(0,0,0,0) 0%,
          var(--yt-spec-general-background-a, #0f0f0f) 10%,
          var(--yt-spec-general-background-a, #0f0f0f) 100%
        ) !important;
        overflow-y: auto !important;
        opacity: 0 !important;
        pointer-events: none !important;
        z-index: 10010 !important;
        transition: opacity 0.3s ease !important;
      }
      ytd-watch-flexy[theater]:not([fullscreen]) #secondary.show {
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      ` : ''}

      /* Trim buttons inside secondary & offset list for gradient */
      #secondary yt-button-renderer.yt-spec-button-view-model,
      #secondary .yt-spec-button-view-model { display: none !important; }
      #secondary #items { transform: translateX(20px); }

      /* Hide fullscreen quick actions (unchanged) */
      #movie_player > div.ytp-overlays-container > div.ytp-overlay-bottom-right > div.ytp-fullscreen-quick-actions,
      #movie_player > div.ytp-fullscreen-grid > button { display: none !important; }
    `;
  }

  if (CONFIG.HIDE_ALL_BEZELS) {
    css += `#movie_player .ytp-bezel { display: none !important; }`;
  } else if (CONFIG.HIDE_PLAY_PAUSE_BEZEL) {
    css += `
      #movie_player .ytp-bezel[aria-label="播放"],
      #movie_player .ytp-bezel[aria-label="暂停"],
      #movie_player .ytp-bezel[aria-label="Play"],
      #movie_player .ytp-bezel[aria-label="Pause"],
      #movie_player [role="status"][aria-label="播放"] .ytp-bezel,
      #movie_player [role="status"][aria-label="暂停"] .ytp-bezel,
      #movie_player [role="status"][aria-label="Play"] .ytp-bezel,
      #movie_player [role="status"][aria-label="Pause"] .ytp-bezel { display: none !important; }
    `;
  }

  if (CONFIG.FIX_POPUP_MENU_ON_TOP) {
    css += `
      ytd-popup-container { position: relative !important; z-index: 100000 !important; }
      tp-yt-iron-dropdown { z-index: 100001 !important; }
      ytd-menu-popup-renderer { position: relative !important; z-index: 100002 !important; }
      .ytd-menu-popup-renderer,
      .ytd-simple-menu-header-renderer,
      .ytd-menu-service-item-renderer { position: relative !important; z-index: 100003 !important; }
    `;
  }

  // ==========================================================
  // Inject style / 样式注入 / スタイル注入
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
  // Masthead top var / 顶部高度变量 / ヘッダ高さ
  // ==========================================================
  function setTopVar() {
    const masthead = document.getElementById('masthead');
    const top = (masthead && masthead.offsetHeight) || 56;
    document.documentElement.style.setProperty('--tm-ytright-top', `${top}px`);
  }

  // ==========================================================
  // Popup detection helpers / 弹层判定 / ポップアップ判定
  // ==========================================================
  function isEnteringPopup(e) {
    if (!CONFIG.KEEP_SECONDARY_WHEN_OVER_POPUP) return false;
    const rt = e && e.relatedTarget;
    if (rt && isPopupNode(rt)) return true;

    const path = (typeof e.composedPath === 'function') ? e.composedPath() : [];
    if (path && path.some(isPopupNode)) return true;

    if (rt && rt.getRootNode) {
      const root = rt.getRootNode();
      const host = root && root.host;
      if (host && isPopupNode(host)) return true;
    }
    return false;
  }

  function isPopupNode(node) {
    if (!node || node.nodeType !== 1) return false;
    try {
      if (
        node.matches?.('ytd-popup-container, tp-yt-iron-dropdown, ytd-menu-popup-renderer, .ytp-ce-element, .ytd-menu-popup-renderer, [role="menu"]')
        || node.id === 'contentWrapper'
      ) return true;

      let p = node;
      for (let i = 0; i < 5 && p; i++) {
        if (
          p.matches?.('ytd-popup-container, tp-yt-iron-dropdown, ytd-menu-popup-renderer, .ytp-ce-element, .ytd-menu-popup-renderer, [role="menu"]')
          || p.id === 'contentWrapper'
        ) return true;
        p = p.parentElement || (p.getRootNode && p.getRootNode().host) || null;
      }
    } catch (_) {}
    return false;
  }

  // ==========================================================
  // Mode guards / 模式判断 / モード判定
  // ==========================================================
  function canShowRightOnCurrentMode(flexy) {
    if (!flexy) return false;
    if (flexy.hasAttribute('fullscreen')) return false;
    const isTheater = flexy.hasAttribute('theater');
    return isTheater ? !!CONFIG.ALLOW_RIGHT_ON_THEATER : !!CONFIG.ALLOW_RIGHT_ON_NORMAL;
  }

  // Is recommended target (endscreen/cards/related/videowall etc.)
  function isRecommendedTarget(target) {
    if (!target || !target.closest) return false;
    return !!target.closest(`
      #secondary,
      ytd-compact-video-renderer,
      a.ytp-endscreen-content,
      .ytp-endscreen-content,
      .ytp-videowall-still,
      .ytp-modern-videowall-still,
      .ytp-videowall-content,
      .ytp-suggestion-panel,
      .ytp-suggestion-set,
      .ytp-ce-element,
      .ytp-miniplayer-suggestion,
      .ytp-relatedthumb-link
    `.replace(/\n/g, ' '));
  }

  // Send native "V" to player (fullscreen use)
  function sendKeyVToPlayer() {
    const targets = [];
    const movie = document.getElementById('movie_player');
    const video = document.querySelector('video.video-stream');
    if (document.activeElement) targets.push(document.activeElement);
    if (movie) targets.push(movie);
    if (video) targets.push(video);
    targets.push(document.body, document);

    const opts = { key: 'v', code: 'KeyV', keyCode: 86, which: 86, bubbles: true, cancelable: true };
    for (const t of targets) { try { t.dispatchEvent(new KeyboardEvent('keydown', opts)); } catch (_) {} }
    for (const t of targets) { try { t.dispatchEvent(new KeyboardEvent('keyup',   opts)); } catch (_) {} }
  }

  // Toggle helper for drawer (non-fullscreen)
  function performVToggle(secondary) {
    if (!CONFIG.TOGGLE_WITH_V_KEY) return;
    const flexy = document.querySelector('ytd-watch-flexy');
    if (!canShowRightOnCurrentMode(flexy)) return;
    secondary.classList.toggle('show');
  }

  // ==========================================================
  // Init interactions / 交互绑定 / インタラクション初期化
  // ==========================================================
  function initToggle(secondary) {
    if (!secondary || secondary.dataset.tmBound) return;
    secondary.dataset.tmBound = '1';

    // Click chapter button -> toggle drawer (normal/theater)
    document.addEventListener('click', (e) => {
      if (!CONFIG.OPEN_RIGHT_ON_CHAPTER_BUTTON || !CONFIG.ENABLE_INLINE_RECS) return;
      const btn = e.target && e.target.closest?.('.ytp-chapter-title.ytp-button');
      if (!btn) return;

      const flexy = document.querySelector('ytd-watch-flexy');
      if (!canShowRightOnCurrentMode(flexy)) return;

      // === 改动点：由 add('show') -> toggle('show') ===
      secondary.classList.toggle('show');
    });

    // Middle-click behavior (covers fullscreen & non-fullscreen)
    document.addEventListener('mousedown', (e) => {
      if (e.button !== 1) return;

      const flexy = document.querySelector('ytd-watch-flexy');
      const isFullscreen = !!(flexy && flexy.hasAttribute('fullscreen')) || !!document.fullscreenElement;

      if (isFullscreen && CONFIG.MMB_ACTS_AS_V_IN_FULLSCREEN) {
        // Fullscreen: outside recommended -> block default & send native "V"; stay in fullscreen
        if (!isRecommendedTarget(e.target)) {
          e.preventDefault();
          sendKeyVToPlayer();
        }
        return; // On recommended elements: keep default middle-click (e.g., open link in new tab)
      }

      // Non-fullscreen: middle-click video toggles drawer
      if (CONFIG.TOGGLE_WITH_MMB_ON_VIDEO) {
        const video = e.target.closest && e.target.closest('video.video-stream');
        if (!video) return;
        if (!canShowRightOnCurrentMode(flexy)) return;
        secondary.classList.toggle('show');
        e.preventDefault();
      }
    });

    // Key "V" -> toggle drawer (non-fullscreen only; ignore inputs/comments)
    if (CONFIG.TOGGLE_WITH_V_KEY) {
      document.addEventListener('keydown', (e) => {
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
        if (!e.key || e.key.toLowerCase() !== 'v') return;

        const flexy = document.querySelector('ytd-watch-flexy');
        const isFullscreen = !!(flexy && flexy.hasAttribute('fullscreen')) || !!document.fullscreenElement;
        if (isFullscreen) return; // let YouTube handle native "V" in fullscreen

        performVToggle(secondary);
      });
    }

    // Auto collapse when leaving #secondary (unless entering popup)
    if (CONFIG.AUTO_HIDE_SECONDARY_ON_LEAVE) {
      secondary.addEventListener('mouseleave', (e) => {
        if (isEnteringPopup(e)) return;
        secondary.classList.remove('show');
      });
    }
  }

  // ==========================================================
  // Bootstrapping / 启动 & 观察 / 起動
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

    // Normal mode fade-in of #primary retained
    if (!flexy.classList.contains('ready')) {
      requestAnimationFrame(() => flexy.classList.add('ready'));
    }
    return true;
  }

  const tryInit = setInterval(() => { if (init()) clearInterval(tryInit); }, 500);
  window.addEventListener('resize', setTopVar);

  const app = document.querySelector('ytd-app') || document.body;
  new MutationObserver(() => { init(); }).observe(app, { childList: true, subtree: true });

})();
