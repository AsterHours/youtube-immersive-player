# YouTube 沉浸式播放器（減少介面干擾）

**[English](README.md)** · **[简体中文](README.zh-CN.md)** · **[繁體中文](README.zh-TW.md)** · **[日本語](README.ja.md)**

一款輕量的 Tampermonkey 使用者腳本，讓 YouTube 預設的觀看頁更沉浸，  **幫助你專注於內容。**

### 功能特性

- 主影片**置中**並帶有**淡入**效果
- 減少版面跳動與視覺雜訊
- 在橫向版面中把右側推薦收納到抽屜
- **按 V** 切換右側抽屜（**劇院模式除外**）
- 在預設觀看頁**於影片區域按滑鼠中鍵**也可切換抽屜

### 隱私

- 腳本僅在你的瀏覽器本機執行  
- 不發送任何網路請求、無追蹤、無資料蒐集

---

## 安裝

> 請先安裝 **[Tampermonkey](https://www.tampermonkey.net/)**。  
> 你大多會從以下連結取得：

- **[Tampermonkey – Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**
- 🦊 **[Tampermonkey – Firefox 擴充套件](https://addons.mozilla.org/firefox/addon/tampermonkey/)**
-  **[Tampermonkey – App Store](https://apps.apple.com/us/app/tampermonkey/id6738342400)**

### A) Chromium 系（Chrome / Edge / Brave / Opera / Vivaldi）

1. **開啟擴充功能管理頁**  
   - 右上角 **更多（三點）→ 擴充功能 → 管理擴充功能**。

2. **找到 Tampermonkey → 詳細資料（Details）**  
   - Chrome 使用者可直接開啟：**[chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)**  
   > 若在 GitHub 點擊這類內部連結無法開啟，請**複製到網址列**。

3. **開啟「開發人員模式（Developer mode）」**（通常在右上角）。

4. **允許腳本在所有網站執行**（Tampermonkey 的詳細資料頁）：  
   - **Site access** → **On all sites**  
   - （選用）若需在無痕視窗使用，勾選 **Allow in Incognito**

5. **[開啟此連結安裝使用者腳本](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**，在 Tampermonkey 中確認。

### B) Firefox

1. 開啟 **附加元件管理員** → **擴充套件**：**[about:addons](about:addons)** → **Tampermonkey** → **權限**  
   - 確認**可存取所有網站的資料**（預設）  
   - （選用）**允許在隱私瀏覽視窗中執行**

2. **[開啟此連結安裝使用者腳本](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**，在 Tampermonkey 中確認。

### C) Safari（macOS / iOS）

1. **macOS Safari：**Safari → **設定** → **擴充功能** → 啟用 **Tampermonkey**  
   - 點選 Tampermonkey → **編輯網站** → 允許 **所有網站**（或新增 **[YouTube](https://www.youtube.com/)**）  
   - （選用）需要時在**私人瀏覽**中啟用
2. **iOS/iPadOS Safari：**系統**設定** → **Safari** → **擴充功能** → 啟用 **Tampermonkey** 並允許網站存取  
3. **[開啟此連結安裝使用者腳本](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**，在 Tampermonkey 中確認。

---

安裝完成後，**[打開任一 YouTube 影片](https://www.youtube.com/watch?v=az0J8O8wRU8)**，按 **V** 可切換（**劇院模式**與**直向版面**除外）。  
在預設觀看頁，你也可以**在影片區域按滑鼠中鍵**來切換抽屜。

---

## 相容性

- **桌面瀏覽器 + Tampermonkey**
- 已於 Chrome 測試，理論上支援所有瀏覽器
- **僅在橫向、非劇院模式下運作**

### 更新日誌

**v1.45**
- 隱藏全螢幕快捷操作/按鈕
- 快捷鍵改為 **V**，以符合 YouTube 新的預設介面
- 側欄背景改為 透明 → 主題色 漸層

### 已知限制

- 劇院模式與直向版面不在此腳本範圍  
- 全螢幕「上滑顯示推薦」為 **YouTube 原生** 行為（非腳本功能）

### 連結

- 專案首頁：**[GitHub Repository](https://github.com/AsterHours/youtube-immersive-player)**  
- 作者：**[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

---

## 授權

MIT © Aster Hours
