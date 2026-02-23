## 1. 刪除學習相關檔案

- [x] 1.1 刪除 `lessons/` 目錄（含三個 .md 課程文件）
- [x] 1.2 刪除 `src/pages/blog/index.astro`（`/blog` 列表路由）

## 2. 改寫首頁

- [x] 2.1 將 `src/pages/index.astro` 改寫為文章列表頁（邏輯同原 `blog/index.astro`）

## 3. 清除學習相關文字

- [x] 3.1 更新 `Head.astro` 中的 `SITE_DESCRIPTION` 常數
- [x] 3.2 更新 `Footer.astro`，移除「Built while studying the Astro AntfuStyle Theme」文字
- [x] 3.3 更新 `NavBar.astro`，移除 `/blog` 連結

## 4. 驗證

- [x] 4.1 執行 `pnpm astro check` 確認無 TypeScript 錯誤
- [x] 4.2 執行 `pnpm build` 確認正式建置成功
- [x] 4.3 手動確認：`/` 顯示文章列表，連結可點擊導向 `/blog/[slug]`
- [x] 4.4 手動確認：`/blog` 路由回傳 404
