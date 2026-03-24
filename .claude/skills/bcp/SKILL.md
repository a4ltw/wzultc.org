---
name: bcp
description: Build, commit and push. 執行 npm run build 建置網站後提交並推送到遠端。
allowed-tools: Bash
---

# Build, Commit, Push

執行以下步驟部署網站：

1. 執行 `npm run build` 建置網站
2. 使用 `git add` 加入所有變更的檔案（包含 docs/ 資料夾）
3. 使用 `git commit` 提交變更，commit message 請根據變更內容自動產生
4. 使用 `git push` 推送到遠端

如有引數 $ARGUMENTS，請將其作為 commit message 使用。
