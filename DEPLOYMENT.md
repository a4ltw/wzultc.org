# WZULTC 網站部署說明

## 專案概述

本專案使用 Astro 靜態網站生成器建置，輸出到 `docs/` 目錄，可直接部署到 GitHub Pages。

## 技術架構

- **框架**: Astro 5.16.6
- **UI**: Tailwind CSS 4.x
- **語言**: TypeScript
- **部署**: GitHub Pages
- **網域**: wzultc.org (透過 CNAME)

## 本地開發

### 開發模式
```bash
npm run dev
```
開發伺服器會在 http://localhost:4321 啟動

### 建置網站
```bash
npm run build
```
建置結果會輸出到 `docs/` 目錄

### 預覽建置結果
```bash
npm run preview
```

## 部署到 GitHub Pages

### 方法 1：透過 Git Push（推薦）

1. 確保所有變更已建置：
```bash
npm run build
```

2. 提交變更：
```bash
git add .
git commit -m "Update website content"
```

3. 推送到 GitHub：
```bash
git push origin master
```

GitHub Pages 會自動從 `master` 分支的 `docs/` 目錄部署網站。

### 方法 2：手動部署

如果 GitHub Pages 設定正確，只要推送到 master 分支，網站就會自動更新。

## GitHub Pages 設定

確保你的 GitHub repository 設定中：
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `master`
4. Folder: `/docs`
5. Custom domain: `wzultc.org`（已透過 CNAME 設定）

## 專案結構

```
wzultc.org/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # 主要版面配置
│   ├── components/
│   │   ├── Header.astro        # 導航列
│   │   └── Footer.astro        # 頁尾
│   ├── pages/                  # 所有頁面
│   │   ├── index.astro         # 首頁
│   │   ├── about.astro         # 計畫說明
│   │   ├── team.astro          # 主持團隊
│   │   ├── partners.astro      # 合作場域
│   │   ├── course.astro        # 華語教材
│   │   ├── enroll.astro        # 招募頁面
│   │   ├── videos.astro        # 教學影片
│   │   ├── research.astro      # 研究成果
│   │   ├── gallery.astro       # 活動剪影
│   │   ├── media.astro         # 媒體報導
│   │   ├── news.astro          # 最新消息
│   │   └── contact.astro       # 聯絡我們
│   └── styles/
│       └── global.css          # Tailwind CSS
├── public/
│   ├── CNAME                   # 網域設定
│   ├── assets/                 # 靜態資源
│   │   ├── js/analytics.js     # Google Analytics
│   │   ├── qrcode/             # QR codes
│   │   └── poster.png          # 招募海報
│   └── course/                 # 課程資料
│       ├── 00/ to 06/          # 各課程（圖片、音訊、PDF）
│       └── ...
├── docs/                       # 建置輸出（GitHub Pages 來源）
├── astro.config.mjs            # Astro 配置
├── tailwind.config.mjs         # Tailwind 配置
├── package.json
└── tsconfig.json
```

## 常見指令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置網站
npm run build

# 預覽建置結果
npm run preview

# 停用遙測
npx astro telemetry disable
```

## 更新內容流程

1. **修改內容**: 編輯 `src/pages/` 中的 `.astro` 檔案
2. **測試**: 使用 `npm run dev` 本地測試
3. **建置**: 執行 `npm run build`
4. **提交**: `git add . && git commit -m "描述"`
5. **部署**: `git push origin master`
6. **等待**: GitHub Pages 自動部署（通常 1-5 分鐘）

## 新增靜態資源

將檔案放到 `public/` 目錄：
- 圖片：`public/assets/images/`
- 文件：`public/assets/docs/`
- 其他：`public/assets/`

建置後會自動複製到 `docs/` 目錄。

## 移植到自架主機

### 使用 Nginx

1. 建置網站：
```bash
npm run build
```

2. 將 `docs/` 目錄內容複製到伺服器：
```bash
scp -r docs/* user@server:/var/www/wzultc.org/
```

3. Nginx 設定範例：
```nginx
server {
    listen 80;
    server_name wzultc.org www.wzultc.org;
    root /var/www/wzultc.org;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 啟用 gzip 壓縮
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

### 使用 Apache

1. 建置網站（同上）

2. Apache 設定範例：
```apache
<VirtualHost *:80>
    ServerName wzultc.org
    ServerAlias www.wzultc.org
    DocumentRoot /var/www/wzultc.org

    <Directory /var/www/wzultc.org>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # 啟用 .htaccess
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
</VirtualHost>
```

## 疑難排解

### 建置失敗
- 檢查 Node.js 版本（需要 18+）
- 刪除 `node_modules/` 和 `package-lock.json`，重新安裝
- 檢查是否有語法錯誤

### GitHub Pages 沒有更新
- 確認 `docs/` 目錄已提交
- 檢查 GitHub Actions 是否有錯誤
- 等待 5-10 分鐘讓 CDN 更新

### 樣式沒有套用
- 確認 Tailwind CSS 已正確安裝
- 執行 `npm run build` 重新建置
- 清除瀏覽器快取

## 聯絡資訊

如有問題，請聯絡：wzultc@gmail.com

---
最後更新：2024-12-30
