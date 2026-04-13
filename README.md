# WZULTC 官方網站

**文藻跨語照護計畫**官方網站，提供越南籍移工中文照護語言課程及計畫相關資訊。

## 基本資訊

| 項目 | 內容 |
|------|------|
| 網址 | https://wzultc.org |
| GitHub | https://github.com/a4ltw/wzultc.org |
| 技術棧 | Astro 5.x + Tailwind CSS 4.x + TypeScript |
| 部署方式 | GitHub Pages 自動部署（push to master → /docs） |

---

## 開發指令

```bash
npm run dev       # 本地開發 http://localhost:4321
npm run build     # 建置輸出至 ./docs
npm run preview   # 預覽正式版
```

部署流程：編輯 `src/` → `npm run build` → `git commit & push`

---

## 主要頁面

| 路徑 | 說明 |
|------|------|
| `/` | 首頁 |
| `/enroll` | 越南學伴招募頁 |
| `/course` | 課程總覽（入門級 / 基礎級） |
| `/course/[id]` | 個別課程頁（含音檔、PDF、頁面圖） |
| `/r/[活動代碼]` | 活動紀錄頁（如 `/r/20260226`） |
| `/about` | 關於計畫 |
| `/team` | 團隊介紹 |
| `/partners` | 合作夥伴 |
| `/research` | 研究成果 |
| `/gallery` | 相片牆 |
| `/videos` | 影片頁 |
| `/media` | 媒體報導 |
| `/contact` | 聯絡資訊 |

### 短網址（URL Redirects）

| 短網址 | 目的地 |
|--------|--------|
| `/fb` | Facebook 粉絲頁 |
| `/ig` | Instagram |
| `/yt` | YouTube 頻道 |
| `/files/mid-zh` | 期中報告（中文） |
| `/prototype/ai` | AI 翻譯原型工具 |

---

## 課程結構

| 級別 | 課程編號 | 色系 |
|------|---------|------|
| 入門級（Sơ cấp） | 第 0–6 課 | 藍色（sky / teal） |
| 基礎級（Cơ bản） | 第 7–12 課 | 紅色（rose / red） |

課程素材（PDF、音檔、頁面圖）存放於 `public/assets/course/{00-12}/`。

新增課程步驟請參閱 `CLAUDE.md`。

---

## 目錄結構

詳見 `STRUCTURE.md`。

---

## 更新歷程

詳見 `CHANGELOG.md`。
