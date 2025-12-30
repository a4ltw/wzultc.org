# 網站流量統計系統使用說明

## 簡介

本網站已整合 **Google Analytics 4 (GA4)** 流量統計系統，可以追蹤：

- ✅ **網頁瀏覽次數** - 每個頁面的訪問量
- ✅ **音檔播放次數** - 哪些音檔被播放及播放完成率
- ✅ **檔案下載次數** - PDF 等檔案的下載統計

## 設定步驟

### 1. 取得 Google Analytics 測量 ID

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 建立新的 GA4 資源
3. 取得測量 ID（格式：`G-XXXXXXXXXX`）

### 2. 設定測量 ID

編輯 `/docs/assets/js/analytics.js` 檔案：

```javascript
// 將下方的 'G-XXXXXXXXXX' 替換成您的 GA4 測量 ID
window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

將 `G-XXXXXXXXXX` 替換成您從 Google Analytics 取得的實際測量 ID。

### 3. 部署網站

推送變更到 GitHub，網站會自動透過 GitHub Pages 更新。

## 追蹤功能說明

### 頁面瀏覽追蹤

自動追蹤所有頁面的瀏覽次數，無需額外設定。

在 GA4 中查看：
- **報表 > 生命週期 > 參與 > 網頁和畫面**

### 音檔播放追蹤

自動偵測並追蹤所有 `<audio>` 標籤的播放行為。

追蹤的事件：
- `audio_play` - 音檔開始播放
- `audio_complete` - 音檔播放完成

在 GA4 中查看：
- **報表 > 生命週期 > 參與 > 事件**
- 篩選事件名稱：`audio_play` 或 `audio_complete`

### 檔案下載追蹤

自動追蹤所有帶有 `download` 屬性的連結，以及 PDF、DOC、ZIP 等檔案的下載。

追蹤的事件：
- `file_download` - 檔案被點擊下載

在 GA4 中查看：
- **報表 > 生命週期 > 參與 > 事件**
- 篩選事件名稱：`file_download`

## 已整合的頁面

統計系統已整合到以下所有頁面：

- ✅ 主頁 (`/index.html`)
- ✅ 課程列表 (`/course/index.html`)
- ✅ 所有課程頁面 (`/course/00/`, `/course/01/`, `/course/02/`, `/course/03/`)
- ✅ 電子書頁面 (`/ebook/index.html`)
- ✅ 招募頁面 (`/enroll/index.html`)
- ✅ POC 展示頁面 (`/poc/index.html`, `/poc/play/`, `/poc/course/`)

## 測試統計功能

在設定完測量 ID 後，可以透過瀏覽器開發者工具測試：

1. 開啟網站並按 `F12` 打開開發者工具
2. 切換到「Console」標籤
3. 應該會看到以下訊息：
   - `✅ Google Analytics 已初始化`
   - `🎵 已為 X 個音檔添加追蹤`
   - `📥 已為 X 個下載連結添加追蹤`

4. 播放音檔或下載檔案時，會看到：
   - `🎵 追蹤音檔播放: XX-XX.mp3`
   - `📥 追蹤檔案下載: 檔名.pdf`

## 查看統計報表

1. 登入 [Google Analytics](https://analytics.google.com/)
2. 選擇您的資源
3. 查看即時報表：**報表 > 即時**
4. 查看詳細報表：**報表 > 生命週期**

## 自訂事件追蹤（進階）

如果需要追蹤自訂事件，可以在頁面中使用：

```javascript
// 追蹤自訂事件
window.Analytics.trackCustomEvent('event_name', {
    category: '分類',
    label: '標籤',
    value: 1
});
```

## 技術支援

如有問題，請參考：
- [Google Analytics 4 說明文件](https://support.google.com/analytics/answer/10089681)
- 聯絡網站管理員

---

建立日期：2025-12-09
版本：1.0
