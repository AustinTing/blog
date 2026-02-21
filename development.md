# 開發路線圖

## 願景
- **當前：** 將儲存庫重建為全新的 Astro 專案，以 `references/astro-antfustyle-theme` 作為參考範本。
- **短期：** 透過逐步重建參考主題的功能，深入理解 Astro 基礎（routing、layouts、content collections、styling）。
- **中期：** 在核心網站對齊參考主題後，引入「Aha stack」——逐步加入 htmx 與 Alpine.js。
- **長期：** 對整個技術棧（從 content pipeline 到互動 widget）都有足夠的信心進行修改與擴充。

## 參考主題重點模組

- **Layouts & Base Components：** `src/layouts/*.astro`、`src/components/base/*` — 建立頁面骨架、metadata 與共用 UI 元件。
- **Navigation & Config：** `src/config.ts`、`src/components/nav/*` — 由中央 config 物件驅動導航與網站 metadata。
- **Content Collections：** `src/content.config.ts`、`src/content/**`、`src/content/schema.ts` — 以型別安全的方式組織 Markdown/MDX 內容。
- **Views & Widgets：** `src/components/views/*`、`src/components/widgets/*`、`src/components/toc/*` — 可複用的列表、卡片、目錄與互動輔助元件。
- **Styling & Backgrounds：** `src/styles/*.css`、`src/components/backgrounds/*` — 全域設計語言、動態背景與頁面視覺細節。
- **Integrations & Utilities：** `astro.config.ts`、`src/pages/rss.xml.js`、`src/utils/*` — 建置流程調整、RSS feed 與工具函式。

## 課程計畫

每個課程應在獨立的 PR 中完成，觸及 **3 至 5 個檔案**。「異動檔案」欄列出該課程的預定目標；必要時重複編輯先前建立的檔案亦可。

| 課程 | 主題 | 異動檔案（3-5） | 參考指標 | 概念與備註 | 狀態 |
| --- | --- | --- | --- | --- | --- |
| 1 | 初始化 Astro 工作區（腳手架、dev scripts） | `package.json`、`astro.config.mjs`、`tsconfig.json`、`src/pages/index.astro`、`src/styles/main.css` | `package.json`、`astro.config.ts`、`src/pages/index.mdx`、`src/styles/main.css` | 初始化 pnpm、建立基本路由、介紹 layout slot 佔位符 | ✅ 完成 |
| 2 | 部署至 Cloudflare Pages | `.github/workflows/deploy-cloudflare-pages.yml`、`development.md`、`README.md`、`src/pages/index.astro` | [Cloudflare Pages 文件](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/) | 連接 GitHub、管理 Secrets、透過 GitHub Actions 自動化部署 | ✅ 完成 |
| 3 | Base layout 與 head metadata | `src/layouts/BaseLayout.astro`、`src/components/base/Head.astro`、`src/components/base/Footer.astro`、`src/styles/page.css` | `src/layouts/BaseLayout.astro`、`src/components/base/Head.astro`、`Footer.astro` | 學習 Astro layout slots、metadata 注入、共用 footer 結構 | ✅ 完成 |
| 4 | Minimal blog MVP（NavBar + content collection + blog 頁面） | `src/content.config.ts`、`src/components/nav/NavBar.astro`、`src/layouts/BaseLayout.astro`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro` | `src/content.config.ts`、`src/components/nav/*`、`src/pages/blog/*` | Content collections（glob loader、zod schema、MDX）、NavBar active 狀態、blog 列表頁與文章頁 | ✅ 完成 |
| 5 | Background canvas 與 hero shell | `src/components/backgrounds/Background.astro`、`src/components/backgrounds/Plum.astro`、`src/components/base/Backdrop.astro`、`src/pages/index.astro`、`src/styles/main.css` | `src/components/backgrounds/*`、`src/components/base/Backdrop.astro`、`src/pages/index.mdx` | 組合多層背景、管理 hero 內容的 slot | 未開始 |
| 6 | 由 config 驅動的導航 | `src/config.ts`、`src/components/nav/NavBar.astro`、`src/components/nav/NavItem.astro`、`src/components/base/Link.astro`、`src/layouts/BaseLayout.astro` | `src/config.ts`、`src/components/nav/*`、`src/components/base/Link.astro` | 將導航連結提取至中央 config、練習 props/loops、確保無障礙性 | 未開始 |
| 7 | Blog 列表視圖與文章 metadata（強化版） | `src/components/views/ListView.astro`、`src/components/views/ListItem.astro`、`src/components/base/PostMeta.astro`、`src/pages/blog/index.astro` | `src/components/views/ListView.astro`、`ListItem.astro`、`src/components/base/PostMeta.astro` | 將列表重構為可複用的 view 元件、加入 metadata 顯示 | 未開始 |
| 8 | 單篇文章 layout 與目錄 | `src/pages/blog/[slug].astro`、`src/components/views/RenderPost.astro`、`src/components/toc/TOC.astro`、`src/styles/markdown.css`、`src/components/base/Categorizer.astro` | `src/pages/blog/[...slug].astro`、`src/components/views/RenderPost.astro`、`src/components/toc/*`、`src/styles/markdown.css`、`src/components/base/Categorizer.astro` | 獨立的 post layout、目錄生成、標籤分組、Markdown 樣式主題 | 未開始 |
| 9 | Projects 與 highlight 區塊 | `src/pages/projects.mdx`、`src/components/views/CardView.astro`、`src/components/views/CardItem.astro`、`src/content/projects/project-01.mdx`、`src/pages/index.astro` | `src/pages/projects.mdx`、`src/components/views/CardView.astro`、`CardItem.astro`、`src/content/projects/*`、`src/pages/index.mdx` | 建立卡片 layout、將 collection 資料連結至首頁 highlight | 未開始 |
| 10 | Streams、shorts 與 tabbed layout | `src/layouts/TabbedLayout.astro`、`src/pages/streams.mdx`、`src/pages/feeds.mdx`、`src/components/views/RenderPage.astro` | `src/layouts/TabbedLayout.astro`、`src/pages/streams.mdx`、`feeds.mdx`、`src/components/views/RenderPage.astro` | 建立分頁體驗、複用 Markdown layout、處理短篇內容 | 未開始 |
| 11 | Widgets：theme、search、top button、loader | `src/components/widgets/ThemeSwitch.astro`、`src/components/widgets/SearchSwitch.astro`、`src/components/widgets/ToTopButton.astro`、`src/components/widgets/Loader.astro` | `src/components/widgets/*` | 接入 client-side islands、管理 Astro scripts、無障礙性考量 | 未開始 |
| 12 | 分享、留言與 feeds | `src/components/widgets/ShareLink.astro`、`src/components/widgets/Giscus.astro`、`src/pages/rss.xml.js`、`src/components/base/PostMeta.astro`、`src/pages/manifest.webmanifest.js` | `src/components/widgets/ShareLink.astro`、`Giscus.astro`、`src/pages/rss.xml.js`、`src/components/base/PostMeta.astro`、`src/pages/manifest.webmanifest.js` | 社群整合、RSS 生成、PWA metadata | 未開始 |
| 13 | Aha stack 起步（htmx + Alpine.js） | `package.json`、`src/layouts/BaseLayout.astro`、`src/components/widgets/LogoButton.astro`、`src/pages/shorts.mdx` | 參考 `src/components/widgets/*` 與 `src/pages/shorts.mdx` 的模式 | 導入 htmx 請求、Alpine.js 狀態片段、漸進增強策略 | 未開始 |

## 下一步
1. 每完成一個課程，更新上方表格的狀態欄為 `✅ 完成`，並在表格下方補充備註。
2. 準備好進入 Aha stack 時，先以小型實驗（例如 Alpine.js 主題切換）驗證，再納入正式課程。

### Cloudflare Pages 部署
- 專案控制台範本：`https://dash.cloudflare.com/?to=/<account-id>/pages/view/<CLOUDFLARE_PROJECT_NAME>`（佈建後替換 `<account-id>` 與 `<CLOUDFLARE_PROJECT_NAME>`）。
- GitHub Actions Secrets：`CLOUDFLARE_ACCOUNT_ID`、`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_PROJECT_NAME`。
- 建議的環境變數對應：`CLOUDFLARE_API_TOKEN` → 具備 Pages + Workers KV 存取權限的 Scoped token；`CLOUDFLARE_ACCOUNT_ID` → Cloudflare 帳號總覽頁面。

> 課程 3 備註：目前 layout 層級的輔助功能（skip link、footer 間距）放置於 `BaseLayout.astro`。待共用頁面增多後，可考慮將其移至獨立的 `src/styles/page.css`。

## 待釐清問題
- 在課程 5 前決定偏好的 CSS 策略（維持原生 CSS 如參考主題，或改用 utility-first 類別框架）。
- 評估是否直接移植參考主題的 OG image 生成功能，或在早期課程中以更簡單的靜態替代方案取代。
- 在內容豐富的課程上線前，規劃如何區分 Cloudflare Pages preview 與 production 環境的設定（自訂網域、analytics token）。
