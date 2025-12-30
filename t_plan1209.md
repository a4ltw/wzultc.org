# WZULTC 課程頁面調整計劃
**日期**: 2025-12-09
**目標**: 調整課程頁面結構、更新教材、整合音檔播放功能

---

## 一、專案概述

### 當前架構
```
/home/asl/projects/wzultc.org/
├── docs/                          # gh-pages 輸出目錄
│   ├── index.html                 # 網站首頁
│   ├── enroll/                    # 招募頁面
│   ├── ebook/                     # 電子書頁面
│   └── poc/                       # POC 區域
│       ├── index.html
│       ├── play/
│       └── course/                # 目前課程位置 (需移動)
│           ├── index.html         # 課程列表頁
│           ├── 00/                # 第零課
│           │   ├── index.html
│           │   ├── page-01.jpg ~ page-10.jpg
│           │   └── 台越照護華語-入門級 0.pdf
│           ├── 01/                # 第一課
│           ├── 02/                # 第二課
│           └── 03/                # 第三課
├── t_newmaterial/                 # 新教材 PDF (來源檔案)
│   ├── 台越照護華語-入門級 0.pdf
│   ├── 台越照護華語-入門級 1.pdf
│   ├── 台越照護華語-入門級 2.pdf
│   └── 台越照護華語-入門級 3.pdf
└── t_recording/                   # 錄音檔案
    ├── 00-04.mp3, 00-05.mp3, 00-06.mp3, 00-07.mp3, 00-10.mp3
    ├── 01-03.mp3 ~ 01-10.mp3
    ├── 02-03.mp3 ~ 02-10.mp3
    └── 03-03.mp3 ~ 03-10.mp3
```

### 目標架構
```
/home/asl/projects/wzultc.org/
└── docs/
    ├── index.html                 # 網站首頁 (需更新連結)
    ├── enroll/
    ├── ebook/
    ├── poc/                       # POC 區域 (需更新連結)
    │   └── index.html
    └── course/                    # 新的課程位置 ★
        ├── index.html             # 課程列表頁 (更新導航連結)
        ├── 00/
        │   ├── index.html         # 更新：添加音檔播放器
        │   ├── page-01.jpg ~ page-10.jpg  # 從新 PDF 重新生成
        │   ├── 台越照護華語-入門級 0.pdf  # 新版 PDF
        │   └── 00-04.mp3, 00-05.mp3, 00-06.mp3, 00-07.mp3, 00-10.mp3  # 音檔 ★
        ├── 01/
        │   ├── index.html
        │   ├── page-01.jpg ~ page-10.jpg
        │   ├── 台越照護華語-入門級 1.pdf
        │   └── 01-03.mp3 ~ 01-10.mp3     # 音檔 ★
        ├── 02/
        │   ├── index.html
        │   ├── page-01.jpg ~ page-10.jpg
        │   ├── 台越照護華語-入門級 2.pdf
        │   └── 02-03.mp3 ~ 02-10.mp3     # 音檔 ★
        └── 03/
            ├── index.html
            ├── page-01.jpg ~ page-10.jpg
            ├── 台越照護華語-入門級 3.pdf
            └── 03-03.mp3 ~ 03-10.mp3     # 音檔 ★
```

---

## 二、主要任務清單

### Task 1: 準備新目錄結構
- [ ] 創建 `docs/course/` 目錄
- [ ] 創建 `docs/course/00/`, `01/`, `02/`, `03/` 子目錄

### Task 2: 處理新教材 PDF 並生成圖檔
**工具需求**: `pdftoppm` 或 `ImageMagick (convert)` 或 `pdf2image` (Python)

**處理流程**（針對每個課程 00, 01, 02, 03）：
```bash
# 檢查可用工具
which pdftoppm
which convert
which python3

# 方案 A: 使用 pdftoppm (poppler-utils)
pdftoppm -jpeg -r 150 "t_newmaterial/台越照護華語-入門級 0.pdf" docs/course/00/page

# 方案 B: 使用 ImageMagick
convert -density 150 "t_newmaterial/台越照護華語-入門級 0.pdf" -quality 90 docs/course/00/page-%02d.jpg

# 方案 C: 使用 Python pdf2image
python3 -c "
from pdf2image import convert_from_path
images = convert_from_path('t_newmaterial/台越照護華語-入門級 0.pdf', dpi=150)
for i, image in enumerate(images, start=1):
    image.save(f'docs/course/00/page-{i:02d}.jpg', 'JPEG')
"
```

**具體任務**：
- [ ] 檢查系統可用的 PDF 轉換工具
- [ ] 為課程 00 轉換 PDF → JPG (page-01.jpg ~ page-10.jpg)
- [ ] 為課程 01 轉換 PDF → JPG
- [ ] 為課程 02 轉換 PDF → JPG
- [ ] 為課程 03 轉換 PDF → JPG
- [ ] 複製新版 PDF 到各課程目錄

### Task 3: 複製音檔到各課程目錄
```bash
# 將課程 00 的音檔複製到 docs/course/00/
cp t_recording/00-*.mp3 docs/course/00/

# 將課程 01 的音檔複製到 docs/course/01/
cp t_recording/01-*.mp3 docs/course/01/

# 將課程 02 的音檔複製到 docs/course/02/
cp t_recording/02-*.mp3 docs/course/02/

# 將課程 03 的音檔複製到 docs/course/03/
cp t_recording/03-*.mp3 docs/course/03/
```
- [ ] 複製課程 00 的音檔（5 個檔案）
- [ ] 複製課程 01 的音檔（8 個檔案）
- [ ] 複製課程 02 的音檔（8 個檔案）
- [ ] 複製課程 03 的音檔（8 個檔案）
- [ ] 驗證音檔完整性（共 29 個檔案）

### Task 4: 更新課程頁面 HTML (00/index.html, 01/index.html, 02/index.html, 03/index.html)

**音檔命名規則**：
- 課程代號-頁碼.mp3
- 例如：`00-04.mp3` = 第零課第 4 頁
- 注意：並非所有頁面都有音檔

**已知音檔對應**：
```
課程 00: 04, 05, 06, 07, 10 (5 個音檔)
課程 01: 03, 04, 05, 06, 07, 08, 09, 10 (8 個音檔)
課程 02: 03, 04, 05, 06, 07, 08, 09, 10 (8 個音檔)
課程 03: 03, 04, 05, 06, 07, 08, 09, 10 (8 個音檔)
```

**HTML 結構調整**：
```html
<!-- 原本的結構 -->
<img src="page-04.jpg" alt="第 4 頁" class="page-image" loading="lazy">
<div class="page-number">第 4 頁</div>

<!-- 新結構 (有音檔的頁面) -->
<div class="page-container">
    <img src="page-04.jpg" alt="第 4 頁" class="page-image" loading="lazy">
    <div class="page-footer">
        <div class="page-number">第 4 頁</div>
        <audio controls class="audio-player">
            <source src="00-04.mp3" type="audio/mpeg">
            您的瀏覽器不支援音訊播放。
        </audio>
    </div>
</div>

<!-- 新結構 (無音檔的頁面) -->
<div class="page-container">
    <img src="page-01.jpg" alt="第 1 頁" class="page-image" loading="lazy">
    <div class="page-number">第 1 頁</div>
</div>
```

**CSS 更新**：
```css
.page-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto 30px;
}

.page-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}

.audio-player {
    width: 100%;
    max-width: 500px;
    height: 40px;
}
```

**任務清單**：
- [ ] 更新 `docs/course/00/index.html`：添加音檔播放器（頁面 4, 5, 6, 7, 10）
- [ ] 更新 `docs/course/01/index.html`：添加音檔播放器（頁面 3-10）
- [ ] 更新 `docs/course/02/index.html`：添加音檔播放器（頁面 3-10）
- [ ] 更新 `docs/course/03/index.html`：添加音檔播放器（頁面 3-10）
- [ ] 更新導航連結（移除 `/poc` 路徑）
- [ ] 更新 PDF 下載連結

### Task 5: 更新課程列表頁面 (course/index.html)
```html
<!-- 更新導航連結 -->
<div class="nav-links">
    <a href="/">返回網站首頁</a>
</div>
```
- [ ] 複製 `docs/poc/course/index.html` 到 `docs/course/index.html`
- [ ] 移除 POC 相關導航連結
- [ ] 簡化麵包屑導航

### Task 6: 更新網站其他頁面連結

**需要更新的檔案**：
1. `docs/index.html` - 網站首頁
   - 新增課程頁面連結：`<a href="/course">課程頁面</a>`

2. `docs/poc/index.html` - POC 首頁
   - 更新課程連結：從 `course/` 改為 `/course`

**任務清單**：
- [ ] 檢查 `docs/index.html`，添加課程連結（如果適當）
- [ ] 更新 `docs/poc/index.html` 的課程連結
- [ ] 檢查其他可能連結到課程的頁面

### Task 7: 清理舊檔案（可選）
- [ ] 決定是否保留 `docs/poc/course/`（建議：先保留作為備份）
- [ ] 未來可移除或添加重定向

---

## 三、實施順序

### Phase 1: 準備與測試
1. 檢查系統工具（PDF 轉換）
2. 創建新目錄結構
3. 測試 PDF 轉 JPG 流程（先測試一個課程）

### Phase 2: 批量處理
4. 批量轉換所有課程的 PDF → JPG
5. 複製所有音檔到各課程目錄
6. 複製新版 PDF 到各課程目錄

### Phase 3: HTML 更新
7. 更新所有課程的 index.html（添加音檔播放器）
8. 更新課程列表頁面
9. 更新網站導航連結

### Phase 4: 測試與驗證
10. 本地測試所有頁面
11. 檢查所有連結
12. 檢查音檔播放功能
13. 檢查圖片顯示

### Phase 5: 部署
14. Git commit 變更
15. Push 到 gh-pages 分支（如果需要）

---

## 四、技術細節

### PDF 轉圖檔參數建議
- **DPI**: 150 (平衡品質與檔案大小)
- **格式**: JPEG
- **品質**: 85-90
- **命名**: page-01.jpg, page-02.jpg, ... page-10.jpg

### 音檔播放器設計
- 使用 HTML5 `<audio>` 元素
- 提供 controls 控制介面
- 放置在圖片下方，居中對齊
- 響應式設計，適應不同螢幕尺寸
- 音檔路徑：同目錄下的 `XX-YY.mp3`

### 瀏覽器相容性
- HTML5 audio 支援：Chrome, Firefox, Safari, Edge
- MP3 格式支援：所有現代瀏覽器

---

## 五、風險與注意事項

### 潛在問題
1. **PDF 轉換工具未安裝**
   - 解決方案：提供多種工具選項，或手動轉換後上傳

2. **音檔路徑錯誤**
   - 解決方案：使用相對路徑 `XX-YY.mp3`（同目錄）

3. **檔案大小問題**
   - 每個課程約 10 張圖片，每張 200-300KB
   - 所有音檔約 11MB
   - 總計約 20-25MB，符合 GitHub Pages 限制

4. **連結斷裂**
   - 解決方案：保留舊的 POC 路徑作為備份

### 測試檢查清單
- [ ] 所有課程頁面可正常訪問
- [ ] 圖片正確顯示
- [ ] 音檔可正常播放
- [ ] PDF 下載連結正常
- [ ] 導航連結正確
- [ ] 手機瀏覽器測試
- [ ] 桌面瀏覽器測試

---

## 六、預期結果

完成後，使用者可以：
1. 從 `wzultc.org/course` 直接訪問課程（不需要透過 /poc）
2. 查看更新後的教材內容
3. 在瀏覽器中直接播放對應頁面的錄音
4. 下載最新版本的 PDF 教材

---

## 七、後續優化建議

1. **音檔載入優化**
   - 考慮使用 `preload="metadata"` 減少初始載入時間

2. **播放狀態記憶**
   - 使用 localStorage 記住使用者的學習進度

3. **鍵盤快捷鍵**
   - 空白鍵：播放/暫停
   - 方向鍵：上一頁/下一頁

4. **播放列表功能**
   - 連續播放整課音檔

5. **離線功能**
   - Service Worker 快取資源

---

## 八、開發命令參考

### PDF 轉換命令（選擇一種）

```bash
# 方案 A: pdftoppm (推薦)
for i in 0 1 2 3; do
    pdftoppm -jpeg -r 150 "t_newmaterial/台越照護華語-入門級 ${i}.pdf" "docs/course/0${i}/page"
    # 重新命名檔案：page-1.jpg → page-01.jpg
    cd "docs/course/0${i}"
    for f in page-*.jpg; do
        mv "$f" "$(printf 'page-%02d.jpg' ${f#page-})"
    done
    cd -
done

# 方案 B: ImageMagick
for i in 0 1 2 3; do
    convert -density 150 "t_newmaterial/台越照護華語-入門級 ${i}.pdf" \
            -quality 90 "docs/course/0${i}/page-%02d.jpg"
done

# 方案 C: Python 腳本
cat > convert_pdfs.py << 'EOF'
from pdf2image import convert_from_path
import os

courses = ['0', '1', '2', '3']
for course in courses:
    pdf_path = f"t_newmaterial/台越照護華語-入門級 {course}.pdf"
    output_dir = f"docs/course/0{course}"
    os.makedirs(output_dir, exist_ok=True)

    images = convert_from_path(pdf_path, dpi=150)
    for i, image in enumerate(images, start=1):
        image.save(f"{output_dir}/page-{i:02d}.jpg", "JPEG", quality=90)
    print(f"課程 {course} 轉換完成")
EOF

python3 convert_pdfs.py
```

### 複製檔案命令

```bash
# 創建目錄
mkdir -p docs/course/{00,01,02,03}

# 複製音檔到各課程目錄
cp t_recording/00-*.mp3 docs/course/00/
cp t_recording/01-*.mp3 docs/course/01/
cp t_recording/02-*.mp3 docs/course/02/
cp t_recording/03-*.mp3 docs/course/03/

# 複製 PDF
cp "t_newmaterial/台越照護華語-入門級 0.pdf" "docs/course/00/"
cp "t_newmaterial/台越照護華語-入門級 1.pdf" "docs/course/01/"
cp "t_newmaterial/台越照護華語-入門級 2.pdf" "docs/course/02/"
cp "t_newmaterial/台越照護華語-入門級 3.pdf" "docs/course/03/"
```

---

**計劃制定完成，準備立即執行。**
