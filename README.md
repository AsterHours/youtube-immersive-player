# YouTube Immersive Player (Reduce UI Clutter)

**[English](README.md)** · **[简体中文](README.zh-CN.md)** · **[繁體中文](README.zh-TW.md)** · **[日本語](README.ja.md)**

A lightweight Tampermonkey userscript that makes YouTube’s default watch page more immersive,

**helps** you focus on the content.

### Features

- Main video **centered** + **fade-in**
- Avoid layout jank and visual clutter
- Hide recommended videos in right drawer in landscape layouts
- **Press V** to toggle the right drawer, **except** in theater mode
- **Middle-Click on the video** to toggle the drawer on default watch view

### Privacy

- The script runs locally in your browser  
- No network requests, tracking, or data collection

---

## Install

> Make sure **[Tampermonkey](https://www.tampermonkey.net/)** is installed first.  
> You're likely gonna get it from one of these links:

- **[Tampermonkey – Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**
- 🦊 **[Tampermonkey – Get this Extension for Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)**
-  **[Tampermonkey on the App Store](https://apps.apple.com/us/app/tampermonkey/id6738342400)**

### A) Chromium-based browsers (Chrome / Edge / Brave / Opera / Vivaldi)

1. **Open your extensions page**  
   - At the top right, select **More (three dots) → Extensions → Manage extensions**.

2. **Find Tampermonkey → Details**  
   - Chrome users may use this direct link: **[chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)**  
   > If internal links don’t open from GitHub, **copy and paste into the address bar**.

3. **Turn on “Developer mode”** (usually top-right of the extensions page).

4. **Allow running userscripts on all sites** (in Tampermonkey’s Details):  
   - **Site access** → **On all sites**  
   - *(Optional)* **Allow in Incognito** if you want it in private windows

5. **[Open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** and confirm in Tampermonkey.

### B) Firefox

1. Open **Add-ons Manager** → **Extensions**: **[about:addons](about:addons)** → **Tampermonkey** → **Permissions**  
   - Ensure it can **access data for all websites** (default)  
   - *(Optional)* **Run in Private Windows** if desired
2. **[Open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** and confirm in Tampermonkey.

### C) Safari (macOS / iOS)

1. **macOS Safari:** Safari → **Settings** → **Extensions** → Enable **Tampermonkey**  
   - Click Tampermonkey → **Edit Websites** → Allow on **All Websites** (or add **[YouTube](https://www.youtube.com/)**)  
   - *(Optional)* Allow in Private Browsing if you need it  
2. **iOS/iPadOS Safari:** Settings app → **Safari** → **Extensions** → Enable **Tampermonkey** and allow Website Access  
3. **[Open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** and confirm in Tampermonkey.

---

After installation, **[go to a YouTube video](https://www.youtube.com/watch?v=az0J8O8wRU8)** and press **V** anywhere (works globally **except** in **theater mode** and **portrait layouts**).  
On the default watch page, you can also **middle-click the video** to toggle the drawer.

---

## Compatibility

- **Desktop browsers + Tampermonkey**
- Tested on Chrome but it should work for all browsers.
- **Works only in landscape, non-theater mode**

### Changelog

**v1.45**
- Hide fullscreen quick actions/buttons
- Change shortcut to **V** to match new YouTube default layout
- Sidebar background → transparent-to-theme gradient

### Known limitations

- Theater mode and portrait layouts are intentionally out of scope  
- Fullscreen “swipe up” is a **YouTube native** behavior (not part of the script)

### Links

- Project home: **[GitHub Repository](https://github.com/AsterHours/youtube-immersive-player)**  
- Author: **[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

---

## License

MIT © Aster Hours
