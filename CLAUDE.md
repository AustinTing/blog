# CLAUDE.md

此檔案提供 Claude Code（claude.ai/code）在本儲存庫中工作時的指引。

## 專案目的

這是一個以學習為導向的 Astro 部落格，目標是逐步重建 `references/astro-antfustyle-theme` 參考主題。每個課程產出一個小型且易於審閱的 PR（3-5 個檔案）。進度追蹤於 [development.md](development.md)。

**學習路線：** Astro 基礎 → 對齊參考主題 → 加入「Aha stack」（Astro + htmx + Alpine.js）。

## 指令

```bash
pnpm dev          # 啟動開發伺服器（熱重載，支援區域網路存取）
pnpm build        # 正式環境建置
pnpm preview      # 在本機預覽正式建置結果
pnpm astro check  # TypeScript 型別檢查
```

請使用 `pnpm`（而非 npm/yarn）。提交功能性 PR 前，須執行 `pnpm astro check && pnpm build`。

## 架構

```
src/
  pages/       # 檔案路由（Astro 頁面）
  layouts/     # HTML 外殼模板（BaseLayout.astro 包覆所有頁面）
  components/
    base/      # 基礎元件：Head.astro、Footer.astro
  styles/      # 全域 CSS，使用自訂屬性定義主題
public/        # 靜態資源（favicon、PWA 圖示）
lessons/       # 每個已完成課程的 Markdown 說明文件
references/    # 唯讀：astro-antfustyle-theme 參考實作
development.md # 動態路線圖，在此更新課程進度
AGENTS.md      # 協作原則（工作流程的唯一可信來源）
```

**資料流：** `pages/` → `layouts/BaseLayout.astro` → `components/base/` 元件。Props 使用 TypeScript 介面；頁面內容透過 `<slot />` 注入。

**路徑別名：** `~/*` 對應 `src/*`（定義於 [tsconfig.json](tsconfig.json)）。

## 重要慣例

- **參考主題為唯讀。** 須重新實作功能，不得直接複製 `references/` 中的檔案。在提交訊息中說明參考了哪些參考檔案。
- **樣式：** 使用原生 CSS 搭配自訂屬性，尚未引入工具類別框架（UnoCSS 將於 Aha stack 階段加入）。
- **課程／PR：** 每個課程控制在 3-5 個檔案。引入互動功能時，須在 PR 說明中記錄手動瀏覽器驗證結果。
- **`development.md`** 須隨時反映最新的課程進度與路線圖變更。

## References 管理

`references/astro-antfustyle-theme/` 透過 **git subtree** 引入，上游為 https://github.com/lin-stephanie/astro-antfustyle-theme。

```bash
# 更新到上游最新版本
git subtree pull --prefix=references/astro-antfustyle-theme https://github.com/lin-stephanie/astro-antfustyle-theme main --squash
```

## 部署

透過 GitHub Actions 部署至 Cloudflare Pages。需設定三個儲存庫 Secret：`CLOUDFLARE_ACCOUNT_ID`、`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_PROJECT_NAME`。
