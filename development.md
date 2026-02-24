# 開發路線圖

## 願景

以 **Aha stack**（Astro + htmx + Alpine.js）打造功能完整的個人部落格。開發新功能時參考 `references/astro-antfustyle-theme` 的解法，自行重新實作。日常開發流程以 **openspec** 管理。

## 已完成的基礎建設

- Astro 專案初始化、pnpm 工作區
- Cloudflare Pages 部署（GitHub Actions）
- BaseLayout + Head / Footer 元件
- Content collections（blog）、NavBar、blog 列表頁與文章頁
- 首頁改為文章列表

## 參考主題重點模組

開發相似功能時，可查閱以下參考主題對應路徑：

- **Layouts & Base Components：** `src/layouts/*.astro`、`src/components/base/*`
- **Navigation & Config：** `src/config.ts`、`src/components/nav/*`
- **Content Collections：** `src/content.config.ts`、`src/content/**`、`src/content/schema.ts`
- **Views & Widgets：** `src/components/views/*`、`src/components/widgets/*`、`src/components/toc/*`
- **Styling & Backgrounds：** `src/styles/*.css`、`src/components/backgrounds/*`
- **Integrations & Utilities：** `astro.config.ts`、`src/pages/rss.xml.js`、`src/utils/*`

## Cloudflare Pages 部署

- 專案控制台範本：`https://dash.cloudflare.com/?to=/<account-id>/pages/view/<CLOUDFLARE_PROJECT_NAME>`（佈建後替換 `<account-id>` 與 `<CLOUDFLARE_PROJECT_NAME>`）。
- GitHub Actions Secrets：`CLOUDFLARE_ACCOUNT_ID`、`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_PROJECT_NAME`。
- 建議的環境變數對應：`CLOUDFLARE_API_TOKEN` → 具備 Pages + Workers KV 存取權限的 Scoped token；`CLOUDFLARE_ACCOUNT_ID` → Cloudflare 帳號總覽頁面。
