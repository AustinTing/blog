# Lesson 01：啟動 Astro 工作區

> 聚焦把空的資料夾變成可以運行的 Astro 專案，奠定後續課程的環境基礎。

## 本次新增的檔案
- `package.json`：建立 `astro`、`@astrojs/check`、`typescript` 的開發依賴，並提供 `dev`、`build`、`check` 等腳本。
- `astro.config.mjs`：透過 `defineConfig` 指定 `srcDir` 與 `publicDir`，同時允許本機網路上的其他裝置存取開發伺服器。
- `tsconfig.json`：啟用 Astro 推薦的嚴格型別設定，並加入 `~/` 開頭的路徑別名，讓元件引用更簡潔。
- `src/pages/index.astro`：放入第一個頁面，稍後課程會持續在此頁串接新的版型。
- `src/styles/main.css`：集中控制版面的背景、字體與 hero 區塊樣式，確保初始化畫面有一致的外觀。

## 關鍵程式區塊
- `src/pages/index.astro` 中的 `lessons` 陣列：示範如何在 Astro 中混用 JavaScript 與模板，渲染出「接下來要學的項目」清單。
- `BaseLayout` 匯入 `main.css`：讓全站共享同一套基礎樣式，不必在各頁面重複載入。
- `package.json` 的 `check` 指令：日後每個 lesson 完成後都可以執行 `pnpm check` 做靜態檢查，提早發現錯誤。

## 現在可以做什麼
- 在專案根目錄執行 `pnpm install` 安裝依賴，接著用 `pnpm dev` 啟動開發伺服器。
- 修改 `src/pages/index.astro` 或 `src/styles/main.css`，瀏覽器會立即熱更新，方便練習版面調整。
- 把 `development.md` 當成學習地圖，每完成一項就更新狀態，累積學習足跡。

## 下一步建議
- 讀一遍 `references/astro-antfustyle-theme` 的資料夾結構，熟悉之後要重現的功能長什麼樣子。
- 註冊或登入 Cloudflare，取得帳號 ID 與 API Token，這會是 Lesson 02 的主軸。
- 準備建立共用版型與 `<head>` 中的 SEO 標籤，這會是 Lesson 03 的主軸。
