// ==UserScript==
// @name         YouTube Immersive Player | YouTube沉浸式播放器
// @namespace    https://github.com/AsterHours/youtube-immersive-player
// @description  Please check the GitHub link above. 请访问上方的GitHub链接查看说明。
// @license      MIT © Aster Hours
// @version      1.58
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
    ENABLE_INLINE_RECS: true,
    ALLOW_RIGHT_ON_NORMAL: true,
    ALLOW_RIGHT_ON_THEATER: true,
    TOGGLE_WITH_MMB_ON_VIDEO: true,
    TOGGLE_WITH_V_KEY: true,
    AUTO_HIDE_SECONDARY_ON_LEAVE: true,
    KEEP_SECONDARY_WHEN_OVER_POPUP: true,
    HIDE_PLAY_PAUSE_BEZEL: true,
    HIDE_ALL_BEZELS: false,
    FIX_POPUP_MENU_ON_TOP: true,
    OPEN_RIGHT_ON_CHAPTER_BUTTON: true,
    MMB_ACTS_AS_V_IN_FULLSCREEN: true,
  };

  const STYLE_ID = 'tm-youtube-inline-recommend-style-v1-55';

  let css = `
    html, body { overflow-x: hidden !important; }
  `;

  if (CONFIG.ENABLE_INLINE_RECS) {
    css += `
      #secondary { display: none !important; }

      #secondary yt-lockup-view-model {
        display: flex !important;
      }
      #secondary #items,
      #secondary ytd-watch-next-secondary-results-renderer {
        scrollbar-width: none !important;
      }

      #secondary #items::-webkit-scrollbar,
      #secondary ytd-watch-next-secondary-results-renderer::-webkit-scrollbar {
        display: none !important;
      }
      #secondary .yt-lockup-view-model__content-image {
        flex: 0 0 200px !important;
        width: 200px !important;
        max-width: 200px !important;
      }
      #secondary {
        overflow: hidden !important;
      }

      ${CONFIG.ALLOW_RIGHT_ON_NORMAL ? `
      ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary {
        display: block !important;
        position: absolute !important;
        top: var(--tm-ytright-top, 56px) !important;
        right: 0 !important;
        width: min(420px, 38.2vw) !important;
        height: calc(100% - var(--tm-ytright-top, 56px)) !important;
        background: linear-gradient(
          to right,
          rgba(0,0,0,0) 0%,
          var(--yt-spec-base-background) 12%,
          var(--yt-spec-base-background) 100%
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

      ytd-watch-flexy:not([theater]):not([fullscreen]) #primary {
        flex: 0 0 calc(100% - min(420px, 38vw)) !important;
        margin: 0 auto !important;
      }
      ytd-watch-flexy:not([theater]):not([fullscreen]).ready #primary { opacity: 1 !important; }

      ytd-watch-flexy:not([theater]):not([fullscreen]) .html5-video-container {
        display: flex !important;
        justify-content: center !important;
      }
      ytd-watch-flexy:not([theater]):not([fullscreen]) video.video-stream {
        position: relative !important;
        left: 0 !important;
        right: 0 !important;
        margin: 0 auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
      }
      ` : ''}

      ${CONFIG.ALLOW_RIGHT_ON_THEATER ? `
      ytd-watch-flexy[theater]:not([fullscreen]) #secondary {
        display: block !important;
        position: fixed !important;
        top: var(--tm-ytright-top, 56px) !important;
        right: 0 !important;
        width: min(420px, 38.2vw) !important;
        height: calc(100% - var(--tm-ytright-top, 56px)) !important;
        background: linear-gradient(
          to right,
          rgba(0,0,0,0) 0%,
          var(--yt-spec-base-background) 12%,
          var(--yt-spec-base-background) 100%
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

      #secondary yt-button-renderer.yt-spec-button-view-model,
      #secondary .yt-spec-button-view-model { display: none !important; }
      #secondary #items { transform: translateX(20px); }

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


  function injectStyle() {
    if (!document.getElementById(STYLE_ID)) {
      const el = document.createElement('style');
      el.id = STYLE_ID;
      el.textContent = css;
      document.head.appendChild(el);
    }
  }

  function setTopVar() {
    const masthead = document.getElementById('masthead');
    const top = (masthead && masthead.offsetHeight) || 56;
    document.documentElement.style.setProperty('--tm-ytright-top', `${top}px`);
  }

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
      if (node.matches?.('ytd-popup-container, tp-yt-iron-dropdown, ytd-menu-popup-renderer, .ytp-ce-element, .ytd-menu-popup-renderer, [role="menu"]') || node.id === 'contentWrapper') return true;
      let p = node;
      for (let i = 0; i < 5 && p; i++) {
        if (p.matches?.('ytd-popup-container, tp-yt-iron-dropdown, ytd-menu-popup-renderer, .ytp-ce-element, .ytd-menu-popup-renderer, [role="menu"]') || p.id === 'contentWrapper') return true;
        p = p.parentElement || (p.getRootNode && p.getRootNode().host) || null;
      }
    } catch (_) {}
    return false;
  }

  function canShowRightOnCurrentMode(flexy) {
    if (!flexy) return false;
    if (flexy.hasAttribute('fullscreen')) return false;
    const isTheater = flexy.hasAttribute('theater');
    return isTheater ? !!CONFIG.ALLOW_RIGHT_ON_THEATER : !!CONFIG.ALLOW_RIGHT_ON_NORMAL;
  }

  function isRecommendedTarget(target) {
    if (!target || !target.closest) return false;
    return !!target.closest(`#secondary, ytd-compact-video-renderer, a.ytp-endscreen-content, .ytp-endscreen-content, .ytp-videowall-still, .ytp-modern-videowall-still, .ytp-videowall-content, .ytp-suggestion-panel, .ytp-suggestion-set, .ytp-ce-element, .ytp-miniplayer-suggestion, .ytp-relatedthumb-link`.replace(/\n/g, ' '));
  }

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

  function performVToggle(secondary) {
    if (!CONFIG.TOGGLE_WITH_V_KEY) return;
    const flexy = document.querySelector('ytd-watch-flexy');
    if (!canShowRightOnCurrentMode(flexy)) return;
    secondary.classList.toggle('show');
  }

  function initToggle(secondary) {
    if (!secondary || secondary.dataset.tmBound) return;
    secondary.dataset.tmBound = '1';

    document.addEventListener('click', (e) => {
      if (!CONFIG.OPEN_RIGHT_ON_CHAPTER_BUTTON || !CONFIG.ENABLE_INLINE_RECS) return;
      const btn = e.target && e.target.closest?.('.ytp-chapter-title.ytp-button');
      if (!btn) return;
      const flexy = document.querySelector('ytd-watch-flexy');
      if (!canShowRightOnCurrentMode(flexy)) return;
      secondary.classList.toggle('show');
    });

    document.addEventListener('mousedown', (e) => {
      if (e.button !== 1) return;
      const flexy = document.querySelector('ytd-watch-flexy');
      const isFullscreen = !!(flexy && flexy.hasAttribute('fullscreen')) || !!document.fullscreenElement;
      if (isFullscreen && CONFIG.MMB_ACTS_AS_V_IN_FULLSCREEN) {
        if (!isRecommendedTarget(e.target)) {
          e.preventDefault();
          sendKeyVToPlayer();
        }
        return;
      }
      if (CONFIG.TOGGLE_WITH_MMB_ON_VIDEO) {
        const video = e.target.closest && e.target.closest('video.video-stream');
        if (!video) return;
        if (!canShowRightOnCurrentMode(flexy)) return;
        secondary.classList.toggle('show');
        e.preventDefault();
      }
    });

    if (CONFIG.TOGGLE_WITH_V_KEY) {
      document.addEventListener('keydown', (e) => {
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
        if (!e.key || e.key.toLowerCase() !== 'v') return;
        const flexy = document.querySelector('ytd-watch-flexy');
        const isFullscreen = !!(flexy && flexy.hasAttribute('fullscreen')) || !!document.fullscreenElement;
        if (isFullscreen) return;
        performVToggle(secondary);
      });
    }

    if (CONFIG.AUTO_HIDE_SECONDARY_ON_LEAVE) {
      secondary.addEventListener('mouseleave', (e) => {
        if (isEnteringPopup(e)) return;
        secondary.classList.remove('show');
      });
    }
  }

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
