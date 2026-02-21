## 1. Content Collection 定義

- [x] 1.1 建立 `src/content.config.ts`，使用 `defineCollection` + zod schema 定義 `blog` collection（欄位：`title`、`description`、`date`、`draft`、`category`（選填 enum：`work` | `learning` | `life` | `travel` | `other`））
- [x] 1.2 建立 `src/content/blog/` 目錄，新增至少一篇範例 `.mdx` 文章供開發測試用（含完整 frontmatter）

## 2. NavBar 元件

- [x] 2.1 建立 `src/components/nav/NavBar.astro`，包含首頁（`/`）與 Blog（`/blog`）連結，並使用 `Astro.url` 實作 active 連結樣式
- [x] 2.2 在 `src/layouts/BaseLayout.astro` 中引入並渲染 `NavBar`（置於 `<Head>` 與 `<slot />` 之間）

## 3. Blog 列表頁

- [x] 3.1 建立 `src/pages/blog/index.astro`：使用 `getCollection('blog')` 取得所有 `draft: false` 的文章，依 `date` 欄位由新至舊排序，渲染含標題、描述、日期與連結的列表

## 4. Blog 文章頁

- [x] 4.1 建立 `src/pages/blog/[slug].astro`：於 `getStaticPaths` 中僅回傳 `draft: false` 的 entry，使用 `render()` 渲染 MDX 內容，透過 BaseLayout props 傳入 `title` 與 `description`

## 5. 驗證

- [x] 5.1 執行 `pnpm astro check`，確認無 TypeScript 型別錯誤
- [x] 5.2 執行 `pnpm build`，確認正式建置成功
- [x] 5.3 手動瀏覽器驗證：NavBar 在所有頁面可見、`/blog` 正確列出文章、`/blog/[slug]` 正確渲染文章內容
