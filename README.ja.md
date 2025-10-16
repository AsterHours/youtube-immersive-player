# YouTube Immersive Player（UI ノイズを削減）

**[English](README.md)** · **[简体中文](README.zh-CN.md)** · **[繁體中文](README.zh-TW.md)** · **[日本語](README.ja.md)**

軽量な Tampermonkey ユーザースクリプトです。YouTube の標準視聴ページをより没入的にし、  
**コンテンツへ集中できるようにします。**

### 特長

- メイン動画を**中央寄せ**し、**フェードイン**で表示
- レイアウトのガタつきと視覚的な雑音を抑制
- 横向きレイアウトでは、右側のおすすめをドロワーに収納
- **V キー**で右ドロワーをトグル（**シアターモードを除く**）
- 標準の視聴ページでは、**動画上でミドルクリック**でもトグル可能

### プライバシー

- スクリプトはブラウザ内でローカルに実行  
- ネットワークリクエスト、トラッキング、データ収集は一切なし

---

## インストール

> まず **[Tampermonkey](https://www.tampermonkey.net/)** をインストールしてください。  
> 入手先の例：

- **[Tampermonkey – Chrome ウェブストア](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**
- 🦊 **[Tampermonkey – Firefox アドオン](https://addons.mozilla.org/firefox/addon/tampermonkey/)**
-  **[Tampermonkey – App Store](https://apps.apple.com/us/app/tampermonkey/id6738342400)**

### A) Chromium 系（Chrome / Edge / Brave / Opera / Vivaldi）

1. **拡張機能のページを開く**  
   - 右上の **その他（三点）→ 拡張機能 → 拡張機能を管理**。

2. **Tampermonkey → 詳細** を開く  
   - Chrome なら直接：**[chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)**  
   > GitHub から内部リンクが開けない場合は、**URL をコピーしてアドレスバーに貼り付け**てください。

3. 拡張ページ右上の **「デベロッパーモード」** をオン。

4. **全サイトでユーザースクリプトを実行できるよう許可**（Tampermonkey の詳細ページ）：  
   - **Site access** → **On all sites**  
   - （任意）**Allow in Incognito**（シークレットウィンドウでの利用）

5. **[このリンクを開いてユーザースクリプトをインストール](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** → Tampermonkey で承認。

### B) Firefox

1. **アドオンマネージャ** → **拡張機能**：**[about:addons](about:addons)** → **Tampermonkey** → **Permissions**  
   - **すべてのサイトのデータにアクセス** が許可されていることを確認（既定）  
   - （任意）**プライベートウィンドウで実行** を許可
2. **[ユーザースクリプトを開いてインストール](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** → Tampermonkey で承認。

### C) Safari（macOS / iOS）

1. **macOS Safari：**Safari → **設定** → **機能拡張** → **Tampermonkey** を有効化  
   - Tampermonkey → **Web サイトを編集** → **すべての Web サイト** を許可（または **[YouTube](https://www.youtube.com/)** を追加）  
   - （任意）**プライベートブラウズ**でも有効化
2. **iOS/iPadOS Safari：**システムの **設定** → **Safari** → **機能拡張** → **Tampermonkey** を有効化し、Web サイトアクセスを許可  
3. **[このリンクを開いてユーザースクリプトをインストール](https://raw.githubusercontent.com/AsterHours/youtube-immersive-player/main/youtube-immersive-player.user.js)** → Tampermonkey で承認。

---

インストール後、**[任意の YouTube 動画](https://www.youtube.com/watch?v=az0J8O8wRU8)** を開き、**V** を押してドロワーを切り替え（**シアターモード**と**縦向きレイアウト**では無効）。  
標準の視聴ページでは、**動画上でミドルクリック**でも切り替えられます。

---

## 互換性

- **デスクトップブラウザ + Tampermonkey**
- Chrome で検証済み。基本的に他のブラウザでも動作する想定
- **横向き・非シアターモードでのみ動作**

### 変更履歴

**v1.45**
- フルスクリーンのクイックアクション/ボタンを非表示
- ショートカットを **V** に変更（YouTube の新しい既定レイアウトに対応）
- サイドバー背景を「透明 → テーマ色」のグラデーションに変更

### 既知の制限

- シアターモードと縦向きレイアウトは対象外  
- フルスクリーンの「上方向スワイプでおすすめ表示」は **YouTube のネイティブ機能**

### リンク

- プロジェクト：**[GitHub Repository](https://github.com/AsterHours/youtube-immersive-player)**  
- 作者：**[Aster](https://github.com/AsterHours)**  
- **[YouTube](https://www.youtube.com/)**  
- **[Tampermonkey](https://www.tampermonkey.net/)**

---

## ライセンス

MIT © Aster Hours
