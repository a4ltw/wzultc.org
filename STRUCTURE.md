# 網站目錄結構

本文件說明 `wzultc.org` 專案的資料夾架構與各目錄用途。最後更新：2026-07-20。

```
wzultc.org/
│
├── src/                              原始碼（Astro 頁面與元件）
│   ├── pages/                        頁面路由（檔名對應 URL）
│   │   ├── index.astro               首頁 /
│   │   ├── about.astro               關於計畫 /about
│   │   ├── contact.astro             聯絡資訊 /contact
│   │   ├── enroll.astro              越南學伴招募 /enroll
│   │   ├── gallery.astro             相片牆 /gallery
│   │   ├── media.astro               媒體報導 /media
│   │   ├── partners.astro            合作夥伴 /partners
│   │   ├── pcp.astro                 PCP 頁面 /pcp
│   │   ├── research.astro            研究成果 /research
│   │   ├── team.astro                團隊 /team
│   │   ├── videos.astro              影片 /videos
│   │   │
│   │   ├── course.astro              華語課程總覽 /course
│   │   ├── course/
│   │   │   ├── [id].astro            舊式動態課程頁 /course/{id}（相容舊網址）
│   │   │   ├── l1.astro              L1 課程頁
│   │   │   ├── i/{00–12}.astro       課程內頁 /course/i/00–12（13 個靜態頁）
│   │   │   ├── 00/i.astro            舊 URL 相容（轉址至 /course/i/00）
│   │   │   ├── 01/i.astro            舊 URL 相容（轉址至 /course/i/01）
│   │   │   ├── 06-vocab.astro        第 6 課詞彙附頁
│   │   │   └── 07-new.astro          第 7 課預覽頁
│   │   │
│   │   ├── skills.astro              專技教材總覽 /skills
│   │   ├── skills/
│   │   │   └── [code].astro          動態教材頁 /skills/{code}（由 videos.json 驅動）
│   │   │                              code 格式：{單元}-{語言}-{類型}，如 A01-ZH-S
│   │   │
│   │   ├── r/                        活動紀錄頁 /r/{日期}（7 個頁面）
│   │   │   ├── 20260115.astro
│   │   │   ├── 20260226.astro
│   │   │   ├── 20260305-1.astro
│   │   │   ├── 20260305-2.astro
│   │   │   ├── 20260318.astro
│   │   │   ├── 20260320.astro
│   │   │   └── 20260422.astro
│   │   │
│   │   ├── quiz/                     測驗頁 /quiz
│   │   │   ├── index.astro           測驗首頁
│   │   │   └── catheter.astro        導尿管照護測驗
│   │   │
│   │   └── prototype/
│   │       └── ai-intro.astro        AI 翻譯工具介紹頁
│   │
│   ├── data/                         資料檔（頁面共用）
│   │   ├── videos.json               教材/影片資料中樞（S/P/V 三型）
│   │   │                              - S（簡報）：含 count（頁數）
│   │   │                              - P（流程圖）：含 count（頁數）
│   │   │                              - V（影片）：含 youtubeId
│   │   └── courseTitles.json         課程標題對照表
│   │
│   ├── layouts/
│   │   └── Layout.astro              全站共用版面（含 Header/Footer）
│   │
│   ├── components/
│   │   ├── Header.astro              頂部導覽列
│   │   ├── Header.test.js            Header 單元測試
│   │   ├── Footer.astro              頁尾
│   │   └── Footer.test.js            Footer 單元測試
│   │
│   └── styles/
│       └── global.css                全站樣式（Tailwind 基礎設定）
│
├── public/                           靜態資源（建置時直接複製到 docs/）
│   ├── assets/
│   │   ├── course/                   課程素材，依課程編號分資料夾
│   │   │   ├── 00/ … 12/             舊版課程（各課 PDF、JPG、MP3）
│   │   │   └── l0/ … l12/            新版課程（各課 PDF、JPG、MP3）
│   │   ├── events/                   活動照片（27 個日期資料夾）
│   │   │   └── {日期}/               如 20260422/，含活動 JPG 照片
│   │   ├── partners/                 合作夥伴 Logo
│   │   ├── team/                     團隊照片
│   │   ├── qrcode/                   QR Code 圖檔
│   │   └── js/                       前端 JavaScript
│   │
│   └── videos/                       專技教材靜態資源（120 個 code 資料夾）
│       └── {code}/                   如 A01-ZH-S/、F03-ID-P/
│           ├── slides.pdf            原始 PDF
│           └── slide-NN.jpg          PDF 轉出的頁面圖（01 起算）
│
├── docs/                             建置輸出（GitHub Pages 部署來源）
│                                      執行 npm run build 後自動產生，勿手動編輯
│
├── design/                           品牌素材
│   └── logo.pdf                      品牌 Logo 原始檔
│
├── _material/                        非部署用素材（不在 git）
│   └── ebook/                        電子書框架測試素材（存查）
│
├── node_modules/                     NPM 依賴（自動產生，勿提交）
├── .astro/                           Astro 快取（自動產生）
├── .git/                             Git 版本控制
│
├── README.md                         專案說明
├── STRUCTURE.md                      本文件，目錄架構說明
├── CLAUDE.md                         Claude Code 開發指南
├── astro.config.mjs                  Astro 設定（含 URL 轉址規則）
├── package.json                      專案依賴與指令定義
├── package-lock.json                 依賴版本鎖定
├── tsconfig.json                     TypeScript 設定
├── vitest.config.js                  Vitest 測試設定
├── vitest.setup.js                   Vitest 環境初始化
└── download_l1_assets.py             L1 課程素材下載腳本
```

---

## 新增課程流程（概要）

1. 將 PDF 放入 `public/assets/course/{課程編號}/`
2. 用 `pdftoppm -jpeg -r 150` 將 PDF 轉為 JPG 頁面圖
3. 在 `src/data/courseTitles.json` 加入課程標題
4. 在 `src/pages/course.astro` 對應級別區塊新增課程卡片
5. 執行 `npm run build` 並提交

---

## 新增活動頁面流程（概要）

1. 將活動照片放入 `public/assets/events/{日期}/`
2. 在 `src/pages/r/` 新增對應日期的 `.astro` 檔
3. 執行 `npm run build` 並提交

---

## 新增專技教材（skills）流程（概要）

教材資料由 `src/data/videos.json` 統一管理，頁面由 `src/pages/skills/[code].astro` 動態生成。

1. 將 PDF 放入 `public/videos/{code}/slides.pdf`
2. 用 `pdftoppm` 轉出 `slide-01.jpg` … `slide-NN.jpg`
3. 在 `videos.json` 新增對應的 S 或 P 型條目（含 `count` 頁數）
4. 若為影片（V 型），在 `astro.config.mjs` 的 `redirects` 新增 `/video/{code}` 轉址
5. 執行 `npm run build` 並提交

---

## URL 轉址規則

所有短網址與外部連結轉址定義於 `astro.config.mjs` 的 `redirects`：
- 社群：`/fb`, `/yt`, `/ig`
- 外部工具：`/tool/translate`, `/tool/careconnect`, `/tool/VirtualPatient`
- 影片轉址：`/video/{code}` → YouTube（共 66 個 V 型教材）
- 檔案：`/files/mid-*`, `/2025mid`, `/2026apply`, `/file/*`
- 表單：`/visit/1142`, `/form/connect`
