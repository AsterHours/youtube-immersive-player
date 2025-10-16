# YouTube Immersive Player (Reduce UI Clutter)

Read this in other languages: **[中文 README](README.zh-CN.md)**

A lightweight **Tampermonkey** userscript that makes **[YouTube](https://www.youtube.com/)**’s default watch page more immersive:

- Toggle the **right-side recommendations drawer** with the **V key** or **middle-click on the video**
- Keep the **main video centered** with a subtle **fade-in**
- Use a **left→right transparent → theme background** gradient on the sidebar
- Hide certain fullscreen quick-action overlays to reduce distractions

> **Note:** In **fullscreen**, “swipe up to show recommendations” is a **native YouTube feature**, not implemented by this script.

---

## Install

1) Install the **Tampermonkey** browser extension: [tampermonkey.net](https://www.tampermonkey.net/)  
2) Open the userscript link and confirm installation (this URL also serves as the auto-update endpoint):

**Install / Auto-update URL:**  
https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js

---

## Features

- **V key / Middle-Click** to toggle the right drawer (default/non-theater mode)
- Main video **centered** + **fade-in** to avoid layout jank
- Sidebar **gradient** that respects YouTube’s light/dark theme
- Hide fullscreen quick-action overlays (e.g., `ytp-fullscreen-quick-actions`)
- Auto-adapt to masthead height and dynamic in-page navigation

---

## Usage

- Press **V** (when focus isn’t in an input/textarea) **or** **middle-click on the video** to show/hide the drawer  
- Move the mouse **out of the drawer** area to **auto-close** it

---

## Compatibility

- **Desktop browsers + Tampermonkey**  
- **Works only in landscape, non-theater mode**

---

## Changelog

**v1.45**
- Hide fullscreen quick actions/buttons
- Change shortcut to **V**
- Sidebar background → transparent-to-theme gradient

---

## Privacy

- The script runs locally in your browser  
- No network requests, tracking, or data collection

---

## Known limitations

- Theater mode and portrait layouts are intentionally out of scope  
- Fullscreen “swipe up” is a **YouTube native** behavior (not part of the script)

---

## Links

- Project home: **[GitHub Repository](https://github.com/AsterHours/youtube-immersive-player)**  
- Author: **[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

---

## License

MIT © Aster Hours