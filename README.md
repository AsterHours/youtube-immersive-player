<div align="center">
  <h1>YouTube Immersive Player</h1>

  <p><strong><a href="README.md">English</a></strong> · <strong><a href="README.zh-CN.md">简体中文</a></strong> · <strong><a href="README.zh-TW.md">繁體中文</a></strong> · <strong><a href="README.ja.md">日本語</a></strong></p>

  <img src="./example.png"
       alt="YouTube Immersive Player – demo"
       width="800"
       style="max-width:100%; height:auto;">
  <br>
  <em>A configurable userscript that reduces YouTube’s UI clutter and helps you focus on the content.</em>
</div>

<br><br>

### Features

- Main video **centered**, with fade-in  
- Avoid layout jank and visual clutter  
- Hide recommended videos in **the** right drawer  
- On the default watch page **and in fullscreen**: **press V** to toggle the right drawer  
- On the default watch page: **middle-click** the video to toggle the drawer  
- Easy to toggle features in **the** userscript


### Privacy

To function properly, the script requires enabling **Developer Mode** for your userscript extension.

The script runs locally in your browser with no network requests, tracking, or data collection.

<br>

---

<br>

# Install

If you **already use** userscripts, **[open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**.

> After installation, **[go to a YouTube video](https://www.youtube.com/watch?v=az0J8O8wRU8)** and press **V**.  
> On the default watch page, you can also **middle-click** the video to toggle the drawer.  
> It should work <mark>**except**</mark> in theater mode and portrait layouts.

Otherwise, follow the steps below, **depending on your browser**:

<br><br>

### A) Chromium-based browsers 
(Chrome / Edge / Brave / Opera / Vivaldi)

> Make sure **[Tampermonkey](https://www.tampermonkey.net/)** is installed first.  
> You’ll likely get it from **[Tampermonkey – Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**

1. **Open your extensions page**  
   - At the top right, select **More (three dots) → Extensions → Manage extensions**.

2. **Find Tampermonkey → Details**  
   - Chrome users may use this direct link: **[chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)**  
   > If internal links don’t open from GitHub, **copy and paste into the address bar**.

3. **Turn on “Developer Mode”** (usually top-right of the extensions page).

4. **Allow running userscripts on all sites** (in Tampermonkey’s **Details** page):  
   - **Site access** → **On all sites**  
   - *(Optional)* **Allow in Incognito** if you want it in private windows

5. **[Open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** and confirm in Tampermonkey.

<br><br>

### B) 🦊 Firefox

> Make sure **[Tampermonkey](https://www.tampermonkey.net/)** is installed first.  
> You’ll likely get it from **[Tampermonkey – Get this Extension for Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)**

1. Open **Add-ons Manager** → **Extensions**: **[about:addons](about:addons)** → **Tampermonkey** → **Permissions**  
   - Ensure it can **access data for all websites** (default)  
   - *(Optional)* **Run in Private Windows** if desired

2. **[Open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** and confirm in Tampermonkey.

<br><br>

### C)  macOS / iOS Safari

> Make sure **[Tampermonkey](https://www.tampermonkey.net/)** (or another userscript manager) is installed **first**.  
> You’ll likely get it from **[Tampermonkey on the App Store](https://apps.apple.com/us/app/tampermonkey/id6738342400)**

1. **macOS Safari:** Safari → **Settings** → **Extensions** → Enable **Tampermonkey**  
   - Click Tampermonkey → **Edit Websites** → Allow on **All Websites** (or add **[YouTube](https://www.youtube.com/)**)  
   - *(Optional)* Allow in Private Browsing if you need it  
2. **iOS/iPadOS Safari:** Settings app → **Safari** → **Extensions** → Enable **Tampermonkey** and allow Website Access  
3. **[Open this link to install the userscript](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** and confirm in Tampermonkey.

<br><br><br>

---

<br>

### Changelog
- See [Releases](https://github.com/AsterHours/youtube-immersive-player/releases)

### Compatibility

- **Desktop browsers + Tampermonkey**
- Tested on Chrome; it should work in other browsers as well.
- **Works only in landscape, non-theater mode**
- Theater mode and portrait layouts are intentionally out of scope  
- Fullscreen “swipe up” is a **YouTube-native** behavior (not part of the script)

### Links

- Project home: **[GitHub Repository](https://github.com/AsterHours/youtube-immersive-player)**  
- Author: **[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

<br>

## License

MIT © Aster Hours
