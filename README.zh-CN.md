# YouTube沉浸式播放器（减少界面干扰）

**[English](README.md)** · **[简体中文](README.zh-CN.md)** · **[繁體中文](README.zh-TW.md)** · **[日本語](README.ja.md)**

一款轻量的 Tampermonkey 用户脚本，让 YouTube 默认观看页面更沉浸，**帮助你专注于内容。**

### 功能特性

- 主视频**居中**并带有**淡入**效果
- 减少布局抖动与视觉干扰
- 在横屏布局中将右侧推荐收纳到抽屉里
- **按 V** 切换右侧抽屉（**剧场模式除外**）
- 在默认观看页上**在视频区域中键**也可切换抽屉

### 隐私

- 脚本仅在你的浏览器本地运行  
- 不发起任何网络请求、无跟踪、无数据收集

---

## 安装

> 请先安装 **[Tampermonkey](https://www.tampermonkey.net/)**。  
> 你大概率会从以下链接获取它：

- **[Tampermonkey – Chrome 网上应用店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**
- 🦊 **[Tampermonkey – Firefox 扩展](https://addons.mozilla.org/firefox/addon/tampermonkey/)**
-  **[Tampermonkey – App Store](https://apps.apple.com/us/app/tampermonkey/id6738342400)**

### A) Chromium 系（Chrome / Edge / Brave / Opera / Vivaldi）

1. **打开扩展管理页**  
   - 右上角 **更多（三点） → 扩展程序 → 管理扩展程序**。

2. **找到 Tampermonkey → 详情（Details）**  
   - Chrome 用户可直接打开：**[chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)**  
   > 如果在 GitHub 上点击这些内部链接不起作用，请**复制到地址栏**打开。

3. **开启“开发者模式（Developer mode）”**（通常在扩展页右上角）。

4. **允许脚本在所有站点运行**（Tampermonkey 的详情页）：  
   - **Site access** → **On all sites**  
   - （可选）如果希望在隐身窗口使用，启用 **Allow in Incognito**

5. **[打开此链接安装用户脚本](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**，在 Tampermonkey 弹窗中确认。

### B) Firefox

1. 打开 **附加组件管理器** → **扩展**：**[about:addons](about:addons)** → **Tampermonkey** → **权限**  
   - 确保勾选**允许访问所有网站的数据**（默认）  
   - （可选）**在私密窗口运行**

2. **[打开此链接安装用户脚本](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**，在 Tampermonkey 中确认。

### C) Safari（macOS / iOS）

1. **macOS Safari：**Safari → **设置** → **扩展** → 启用 **Tampermonkey**  
   - 点击 Tampermonkey → **编辑网站** → 允许 **所有网站**（或单独添加 **[YouTube](https://www.youtube.com/)**）  
   - （可选）需要时在**私人浏览**中启用
2. **iOS/iPadOS Safari：**系统“设置” → **Safari** → **扩展** → 启用 **Tampermonkey** 并允许网站访问  
3. **[打开此链接安装用户脚本](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)**，在 Tampermonkey 中确认。

---

安装完成后，**[打开任意 YouTube 视频](https://www.youtube.com/watch?v=az0J8O8wRU8)**，按 **V** 即可切换（**剧场模式**与**竖屏布局**除外）。  
在默认观看页，你也可以**在视频区域中键**来切换抽屉。

---

## 兼容性

- **桌面浏览器 + Tampermonkey**
- 已在 Chrome 测试，理论上兼容所有浏览器
- **仅在横屏、非剧场模式下工作**

### 更新日志

**v1.45**
- 隐藏全屏快捷操作/按钮
- 将快捷键改为 **V**，以适配新的 YouTube 默认布局
- 侧栏背景改为 透明 → 主题色 渐变

### 已知限制

- 剧场模式与竖屏布局不在本脚本范围  
- 全屏“上滑呼出推荐”为 **YouTube 原生** 行为（不属于脚本功能）

### 链接

- 项目主页：**[GitHub Repository](https://github.com/AsterHours/youtube-immersive-player)**  
- 作者：**[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

---

## 许可证

MIT © Aster Hours
