# YouTube沉浸式播放器、减少UI阻挡

阅读英文版：**[English README](README.md)**

一个让 **[YouTube](https://www.youtube.com/)** 默认观看页面更沉浸的 **Tampermonkey** 脚本：

- 按 **V 键** 呼出/隐藏 **右侧推荐抽屉**
- 在 **视频区域**按 **鼠标中键** 呼出/隐藏 **右侧推荐抽屉**
- **主视频居中** 并配合 **淡入动画**，减少布局跳动
- 侧栏采用 **从左到右 透明 → 主题背景色** 的渐变（随深/浅色）
- 隐藏部分 **全屏快捷操作** 浮层，减少遮挡

> **说明：** 在 **全屏** 下“上滑呼出推荐”是 **YouTube 原生功能**，不是脚本实现。

---

## 安装

1) 安装浏览器扩展 **[Tampermonkey](https://www.tampermonkey.net/)**
2) 打开[这个链接](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)并确认安装（同时作为自动更新地址）：

---

## 功能

- **V 键 / 中键** 切换右侧抽屉（仅横屏/非影院模式）
- 主视频 **居中** + **淡入动画**
- 侧栏 **渐变背景**（随 YouTube 深/浅色主题）
- 隐藏全屏快捷操作（如 `ytp-fullscreen-quick-actions`）
- 自适应顶部栏高度、监听站内跳转自动应用

---

## 使用

- 在视频区域 **中键** 或按 **V**，右侧抽屉显示/隐藏  
- 鼠标移出右侧抽屉，**自动关闭**

---

## 兼容性 · Compatibility

- **桌面浏览器 + Tampermonkey**  
- **仅在横屏、非影院模式下工作**

---

## 更新日志

**v1.45**
- 新增：隐藏全屏快捷操作与按钮
- 快捷键改为 **V**
- 右侧推荐背景改为 透明→主题色 渐变

---

## 隐私

- 脚本仅在本地浏览器运行  
- 不发起任何网络请求、无统计与收集

---

## 已知限制

- 影院模式与竖屏布局不在本脚本范围

---

## 链接

- 项目主页：**[GitHub 仓库](https://github.com/AsterHours/youtube-immersive-player)**  
- 作者：**[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

---

## 许可证

MIT © Aster Hours
