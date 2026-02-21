## Context

部落格已有完整的 Astro 腳手架，包含 BaseLayout、Head 元件、Footer，以及 Cloudflare Pages 部署流程。目前除了 `index.astro` 之外，沒有任何內容頁面。此次設計目標是建立最小可用的部落格功能：以 MDX 定義文章、列出所有文章、逐篇渲染。需引入一個第一方依賴：`@astrojs/mdx`（Astro 官方 MDX 整合，Astro v5 中 glob loader 處理 `.mdx` 檔案的必要條件）。

## Goals / Non-Goals

**Goals:**
- 定義具備型別驗證的 MDX content collection
- 於 `/blog` 渲染依日期排序（最新在前）的文章列表
- 於 `/blog/[slug]` 渲染單篇文章，顯示標題與日期
- 在全站加入 NavBar，連結至 `/blog`

**Non-Goals:**
- 分頁、標籤、分類或搜尋功能
- RSS feed 或 sitemap
- 超出 Astro 內建 Shiki 預設值的語法高亮設定
- UnoCSS 或任何 utility-class 框架（延至 Aha stack 階段）
- 留言、按讚或任何動態互動

## Decisions

### 1. 使用 Astro Content Collections，不用 raw MDX imports

於 `src/content.config.ts` 使用 `defineCollection` 搭配 `astro:content` 的 `z` schema。

**為何如此：** Content collections 提供 frontmatter 型別驗證、從檔名自動推導 slug、內建 `getCollection` / `render` API，並與參考主題的實作方式一致（`references/astro-antfustyle-theme/src/content.config.ts`）。使用 `import.meta.glob` 手動引入 MDX 則需自行處理 schema 驗證，不具結構上的優勢。

### 2. 使用 MDX 而非純 Markdown

Collection 設定為接受 `.mdx` 檔案。

**為何如此：** MDX 允許在文章中引入 Astro/JSX 元件，這在 Aha stack 階段引入 htmx/Alpine.js 互動元件時會是必要條件。若日後從 `.md` 遷移至 `.mdx`，需重新命名所有文章；從一開始就使用 MDX 可避免此遷移成本。

### 3. 文章頁面沿用 BaseLayout，暫不建立獨立的 PostLayout

`/blog/[slug].astro` 將渲染內容包裝於現有的 `BaseLayout` 中。

**為何如此：** 現行 BaseLayout 接受 `title` 與 `description` props，並提供 `<slot />`，足以支撐文章頁面需求。獨立的 `PostLayout`（含閱讀時間、目錄、上下篇連結等）屬於後續課程範疇。此時引入會超出 3–5 個檔案的目標。

### 4. NavBar 作為獨立元件置於 `src/components/nav/`

新增 `NavBar.astro`，並於 `BaseLayout` 中的 `<Head>` 與 `<slot />` 之間加入。

**為何如此：** 與參考主題的元件目錄結構一致。將其放在 `base/` 目錄也曾考慮，但 `nav/` 更能清楚表達元件的職責，且與參考主題吻合。BaseLayout 成為新增或移除 nav 的唯一入口點。

### 5. 透過 frontmatter `draft: boolean` 過濾草稿

`draft: true` 的文章不出現在列表頁，且在正式建置時不生成對應的靜態路徑（Astro 的靜態生成只會為 `getStaticPaths` 回傳的 entry 建立頁面）。

**為何如此：** 簡單的 opt-in 草稿機制，不依賴檔名慣例（如 `_` 前綴）。與參考主題的 schema 設計一致。

## Risks / Trade-offs

- **MDX 增加少量建置時間** → 可接受；Astro 在建置時編譯 MDX，無執行期效能損耗。
- **開發模式下草稿 slug 可直接存取** → `pnpm dev` 時，所有 collection entry 均可存取，草稿過濾僅作用於靜態路徑生成。風險極低，因草稿不會出現在任何連結中。
- **BaseLayout 耦合** → NavBar 放入 BaseLayout 表示每個頁面都會有 nav。若日後需要無 nav 的頁面，須透過 prop 判斷或獨立 layout 處理。MVP 範疇內可接受。

## Open Questions

- NavBar 是否只需 "Blog" 連結，或同時加入 "Home"？（細節層級，不影響整體架構，可於實作時決定。）
