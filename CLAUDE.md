# CLAUDE.md

此檔案提供 Claude Code（claude.ai/code）在本儲存庫中工作時的指引。

## 專案目的

這是一個正式的個人部落格，採用 **Aha stack**（Astro + htmx + Alpine.js）技術架構。開發新功能時，參考 `references/astro-antfustyle-theme` 的解法，但須自行重新實作。進度追蹤於 [development.md](development.md)。

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
references/    # 唯讀：astro-antfustyle-theme 參考實作
development.md # 動態路線圖，在此更新開發進度
AGENTS.md      # 協作原則（工作流程的唯一可信來源）
```

**資料流：** `pages/` → `layouts/BaseLayout.astro` → `components/base/` 元件。Props 使用 TypeScript 介面；頁面內容透過 `<slot />` 注入。

**路徑別名：** `~/*` 對應 `src/*`（定義於 [tsconfig.json](tsconfig.json)）。

## 重要慣例

- **參考主題為唯讀。** 須重新實作功能，不得直接複製 `references/` 中的檔案。在提交訊息中說明參考了哪些參考檔案。
- **樣式：** 使用原生 CSS 搭配自訂屬性，視需要引入 UnoCSS 等工具類別框架。
- **`development.md`** 須隨時反映最新的開發進度與路線圖變更。
- **文件語言：** 所有文件（Markdown、注解說明等）使用正體中文撰寫；技術名詞（框架、API、工具名稱等）維持英文。程式碼與程式碼注解維持英文。
- **Git commit 訊息：** title 使用英文（conventional commit 格式），body 使用正體中文。

## References 管理

`references/astro-antfustyle-theme/` 透過 **git subtree** 引入，上游為 https://github.com/lin-stephanie/astro-antfustyle-theme。

```bash
# 更新到上游最新版本
git subtree pull --prefix=references/astro-antfustyle-theme https://github.com/lin-stephanie/astro-antfustyle-theme main --squash
```

## 部署

透過 GitHub Actions 部署至 Cloudflare Pages。需設定三個儲存庫 Secret：`CLOUDFLARE_ACCOUNT_ID`、`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_PROJECT_NAME`。

## 環境設定

### 本機開發環境

Node 與 openspec 透過 **nvm** 管理。`~/.zshenv` 已設定 nvm 初始化，讓非互動式 shell（包含 Claude Code 的 Bash tool）也能找到相關指令：

```bash
# ~/.zshenv
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

openspec CLI 安裝於 node v24.13.1 的全域環境。升級 node 後需重新 `npm install -g openspec`。

### Claude Code web 環境

在 Claude Code web（`claude.ai/code`）的 sandbox 中，環境與本機不同：

- **`$HOME` 為 `/root`**，`~/.zshenv` 不存在，nvm 初始化腳本不會自動執行
- **nvm 安裝於 `/opt/nvm/nvm.sh`**（非 `~/.nvm`）
- **Node v22.22.0 已直接掛載於 `/opt/node22/bin/`**，PATH 已包含此路徑，無需 nvm 即可直接使用 `node`、`npm`、`npx`、`pnpm`
- 全域 npm 套件安裝位置：`/opt/node22/lib/node_modules/`
- **openspec CLI 未安裝**（npm 上的 `openspec@0.0.0` 是空殼套件，無 binary）；openspec 工作流程須手動建立 artifact 檔案，或等待正式 CLI 可用
