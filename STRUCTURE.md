# 網站目錄結構

本文件說明 `wzultc.org` 專案的資料夾架構與各目錄用途。

```
wzultc.org/
│
├── src/                          原始碼（Astro 頁面與元件）
│   ├── pages/                    頁面路由（檔名對應 URL）
│   │   ├── index.astro           首頁 /
│   │   ├── course.astro          課程總覽 /course
│   │   ├── course/
│   │   │   ├── [id].astro        動態課程頁 /course/00–12
│   │   │   ├── 06-vocab.astro    第 6 課詞彙附頁
│   │   │   └── 07-new.astro      第 7 課預覽頁
│   │   ├── r/                    活動紀錄頁 /r/{日期}
│   │   │   ├── 20260115.astro
│   │   │   ├── 20260226.astro
│   │   │   ├── 20260318.astro
│   │   │   └── 20260320.astro
│   │   ├── prototype/
│   │   │   └── ai-intro.astro    AI 翻譯工具介紹頁
│   │   ├── enroll.astro          越南學伴招募 /enroll
│   │   ├── about.astro           關於計畫 /about
│   │   ├── team.astro            團隊 /team
│   │   ├── partners.astro        合作夥伴 /partners
│   │   ├── research.astro        研究成果 /research
│   │   ├── gallery.astro         相片牆 /gallery
│   │   ├── videos.astro          影片 /videos
│   │   ├── media.astro           媒體報導 /media
│   │   └── contact.astro         聯絡資訊 /contact
│   │
│   ├── layouts/
│   │   └── Layout.astro          全站共用版面（含 Header/Footer）
│   │
│   ├── components/
│   │   ├── Header.astro          頂部導覽列
│   │   └── Footer.astro          頁尾
│   │
│   └── styles/
│       └── global.css            全站樣式（Tailwind 基礎設定）
│
├── public/                       靜態資源（建置時直接複製到 docs/）
│   ├── assets/
│   │   ├── course/               課程素材，依課程編號分資料夾
│   │   │   ├── 00/ … 12/         各課 PDF、頁面圖（JPG）、音檔（MP3）
│   │   ├── events/               活動照片，依日期命名（如 20260226/）
│   │   ├── partners/             合作夥伴 Logo
│   │   ├── team/                 團隊照片
│   │   ├── qrcode/               QR Code 圖檔
│   │   └── js/                   前端 JavaScript
│   ├── course/                   課程舊版靜態頁（入門級 00–06）
│   └── r/                        活動紀錄附件（如 PDF）
│       └── 20260115/pdf/
│
├── docs/                         建置輸出（GitHub Pages 部署來源）
│                                  執行 npm run build 後自動產生，勿手動編輯
│
├── t_newmaterial/                待上架教材素材（已上架的移至 archived/t_newmaterial/）
│   ├── 20260305-1/               待上架：產學攜手工作會議照片
│   └── 20260305-2/               待上架：傳藝系跨域合作活動照片
│
├── design/
│   └── logo.pdf                  品牌 Logo 原始檔
│
├── archived/                     封存的舊檔案（不再使用）
│   ├── docs_old_backup/          舊版建置輸出備份（2025-12-30）
│   ├── docs_original/            原始版建置輸出備份（2025-12-29）
│   ├── _material/                舊 HTML5 eBook 框架素材
│   ├── t_plan1209.md             2025-12-09 規劃文件
│   └── website_content_slim.md   精簡版計畫說明文件
│
├── node_modules/                 NPM 依賴（自動產生，勿提交）
├── .git/                         Git 版本控制
│
├── README.md                     專案說明（本機開發入口）
├── STRUCTURE.md                  本文件，目錄架構說明
├── CLAUDE.md                     Claude Code 開發指南（含新增課程流程）
├── CHANGELOG.md                  版本更新紀錄
├── DEPLOYMENT.md                 部署環境設定
├── astro.config.mjs              Astro 設定（含 URL 轉址規則）
├── package.json                  專案依賴與指令定義
└── package-lock.json             依賴版本鎖定
```

---

## 新增課程流程（概要）

1. 將 PDF 放入 `public/assets/course/{課程編號}/`
2. 用 `pdftoppm` 將 PDF 轉為 JPG 頁面圖
3. 在 `src/pages/course/[id].astro` 的 `courses` 陣列加入課程定義
4. 在 `src/pages/course.astro` 對應級別區塊新增課程卡片
5. 執行 `npm run build` 並提交

詳細步驟請參閱 `CLAUDE.md`。

---

## 新增活動頁面流程（概要）

1. 將活動照片放入 `public/assets/events/{日期}/`
2. 在 `src/pages/r/` 新增對應日期的 `.astro` 檔
3. 執行 `npm run build` 並提交
