---
name: reurl
description: 在 wzultc.org 新增縮網址（短路徑轉址）。用法：/reurl /path/name https://目標網址
allowed-tools: Bash, Read, Edit
---

# 新增縮網址

用法：`/reurl /path/name https://目標網址`

引數：`$ARGUMENTS`（格式：`/短路徑 目標URL`）

執行以下步驟：

1. 解析 `$ARGUMENTS`，拆出短路徑（第一個參數）與目標 URL（第二個參數）
2. 讀取 `astro.config.mjs`，在 `redirects` 區塊末尾加入新的一行：
   ```
   '/短路徑': '目標URL',
   ```
3. 執行 `npm run build` 建置網站
4. `git add astro.config.mjs docs/<路徑>/` 並 commit、push
   - commit message 格式：`add <短路徑> redirect`

完成後告知使用者完整的縮網址（`https://wzultc.org<短路徑>`）。
