// ==UserScript==
// @name         YouTube Immersive Player  |  YouTube沉浸式播放器
// @namespace    https://github.com/AsterHours/youtube-immersive-player
// @description  Please check the GitHub link above. 请访问上方的GitHub链接查看说明。
// @license      MIT © Aster Hours
// @version      1.45
// @author       Aster
// @match        https://www.youtube.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js
// @downloadURL  https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js
// ==/UserScript==

(function () {
    'use strict';

    const STYLE_ID = 'tm-youtube-inline-recommend-style-v1-45';
    const css = `
    html, body { overflow-x: hidden !important; }

    /* 默认强制隐藏推荐栏，避免闪现 */
    #secondary {
        display: none !important;
    }

    /* 普通模式下允许展示推荐栏 */
    ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary {
        display: block !important;
        position: absolute !important;
        top: var(--tm-ytright-top, 56px) !important;
        right: 0 !important;
        width: min(420px, 38vw) !important;
        height: calc(100% - var(--tm-ytright-top, 56px)) !important;
        /* 渐变：左侧完全透明 -> 右侧为主题背景色（--yt-spec-general-background-a 随深/浅色切换） */
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

    /* 主视频区居中 + 动画 */
    ytd-watch-flexy:not([theater]):not([fullscreen]) #primary {
        margin: 0 auto !important;
        max-width: calc(100% - 475px) !important;
        opacity: 0;
        transition: max-width 0.25s ease, opacity 0.4s ease !important;
    }
    ytd-watch-flexy:not([theater]):not([fullscreen]).ready #primary {
        opacity: 1;
    }

    /* 视频容器居中 */
    ytd-watch-flexy:not([theater]):not([fullscreen]) .html5-video-container,
    ytd-watch-flexy:not([theater]):not([fullscreen]) video.video-stream {
        position: relative !important;
        margin: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        width: auto !important;
        height: auto !important;
    }

    /* 移除推荐视频内的按钮（减少干扰） */
    #secondary yt-button-renderer.yt-spec-button-view-model,
    #secondary .yt-spec-button-view-model {
        display: none !important;
    }

    /* 所有推荐视频整体右移 20px（留出渐变过渡空间） */
    #secondary #items {
        transform: translateX(20px);
    }

    /* 隐藏元素：全屏快捷操作/按钮 */
    #movie_player > div.ytp-overlays-container > div.ytp-overlay-bottom-right > div.ytp-fullscreen-quick-actions,
    #movie_player > div.ytp-fullscreen-grid > button {
        display: none !important;
    }
    `;

    function injectStyle() {
        if (!document.getElementById(STYLE_ID)) {
            const styleEl = document.createElement('style');
            styleEl.id = STYLE_ID;
            styleEl.textContent = css;
            document.head.appendChild(styleEl);
        }
    }

    function setTopVar() {
        const masthead = document.getElementById('masthead');
        const top = masthead?.offsetHeight || 56;
        document.documentElement.style.setProperty('--tm-ytright-top', `${top}px`);
    }

    function initToggle(secondary) {
        if (!secondary || secondary.dataset.tmBound) return;
        secondary.dataset.tmBound = '1';

        // 中键点击视频区域时切换推荐栏（仅拦截视频上的中键）
        document.addEventListener('mousedown', (e) => {
            if (e.button === 1) {
                const video = e.target.closest('video.video-stream');
                if (video) {
                    secondary.classList.toggle('show');
                    e.preventDefault();
                }
            }
        });

        // 键盘 V 切换推荐栏（忽略输入框/评论区）
        document.addEventListener('keydown', (e) => {
            const target = e.target;
            if (
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable
            ) return;

            if (e.key.toLowerCase() === 'v') {
                secondary.classList.toggle('show');
            }
        });

        // 鼠标移出推荐栏时自动关闭
        secondary.addEventListener('mouseleave', () => {
            secondary.classList.remove('show');
        });
    }

    function init() {
        injectStyle();
        setTopVar();

        const flexy = document.querySelector('ytd-watch-flexy');
        if (!flexy) return false;

        const secondary = flexy.querySelector('#secondary');
        const primary = flexy.querySelector('#primary');
        if (!secondary || !primary) return false;

        initToggle(secondary);

        // 给主容器打 class，用来触发淡入动画
        if (!flexy.classList.contains('ready')) {
            requestAnimationFrame(() => flexy.classList.add('ready'));
        }

        return true;
    }

    // 定时重试，保证首次能挂上
    const tryInit = setInterval(() => { if (init()) clearInterval(tryInit); }, 500);

    // 窗口缩放时更新顶部高度
    window.addEventListener('resize', setTopVar);

    // 监听页面变化，保证在站内跳转时也能运行
    const app = document.querySelector('ytd-app') || document.body;
    new MutationObserver(() => {
        init();
    }).observe(app, { childList: true, subtree: true });
})();
