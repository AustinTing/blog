## Context

首頁目前是簡單的 `<ul>` 文章清單，使用 Astro 靜態建置。要改為時間軸佈局，加入 category 篩選。專案使用 AHA stack（Astro + htmx + Alpine.js），目前部署在 Cloudflare Pages（靜態模式）。

## Goals / Non-Goals

**Goals:**
- 首頁改為垂直時間軸佈局，文章按年份分組
- 支援 All / Work / Life 三種篩選狀態
- 響應式設計：桌面版左年份右卡片，手機版垂直堆疊
- 卡片支援可選的 cover 圖片
- Schema 新增 cover、tags 欄位，category 簡化為 work | life

**Non-Goals:**
- htmx 分頁載入（待文章量增長後再加）
- Tags 篩選 UI（tags 先入 schema，但不用於篩選）
- 搜尋功能
- SSR / hybrid mode

## Decisions

### 1. 篩選用 Alpine.js client-side filter

**選擇：** Alpine.js `x-show` 控制文章顯示/隱藏

**替代方案：**
- htmx + API endpoint：需要 SSR mode，目前文章量不需要
- 純 CSS `:target` 或 checkbox hack：不夠靈活，URL 狀態管理困難

**理由：** 只有三種狀態（all / work / life），Alpine.js 極為輕量，不需要 server roundtrip。所有文章 HTML 都在頁面上，Alpine.js 只做 show/hide。文章量在百篇以內完全沒有效能問題。

### 2. 年份分組在 Astro build time 處理

**選擇：** 在 `index.astro` 的 frontmatter script 中，將文章按年份分組為 `Map<number, Post[]>` 結構，模板層直接迭代渲染

**理由：** 這是純資料轉換，適合在 build time 處理。模板只需 nested loop：外層年份、內層文章。

### 3. 元件拆分策略

**選擇：** 拆出兩個元件
- `TimelineCard.astro`：單張文章卡片（badge + 標題 + 說明 + cover）
- `CategoryFilter.astro`：篩選按鈕群組（包含 Alpine.js 邏輯）

**理由：** 卡片邏輯獨立且可能在其他地方重用。篩選元件包含 Alpine.js 互動狀態，獨立封裝較乾淨。時間軸的結構（年份分組 + 時間線）直接在 `index.astro` 中處理，因為它與頁面佈局緊密耦合。

### 4. Alpine.js 篩選與年份分組的互動

**選擇：** Alpine.js 在最外層 `<div x-data>` 管理 `filter` 狀態。每張卡片用 `x-show="filter === 'all' || filter === category"` 控制。年份標題也用 `x-show` 根據該年份下是否有可見文章來決定顯示。

**理由：** 當用戶選 "Work" 時，如果某年份只有 Life 文章，該年份標題也應該隱藏。用 Alpine.js 的 `x-effect` 或 CSS `:has()` 判斷。優先使用 CSS `:has()` 因為不需要額外 JS 邏輯。

### 5. 樣式方案

**選擇：** 在 `src/styles/` 新增 `timeline.css`，使用原生 CSS + 自訂屬性，延續 KIRAKIRA 主題

**理由：** 與現有樣式架構一致。時間軸樣式量較大，獨立檔案方便維護。

### 6. Cover 圖片處理

**選擇：** `cover` 欄位為 `string`，儲存相對於 `public/` 的圖片路徑（例如 `/images/covers/hello-world.jpg`）。卡片中用 `<img>` 渲染，加上 `loading="lazy"`。

**替代方案：** 使用 Astro 的 `image()` schema helper 搭配 `<Image />` 元件做最佳化

**理由：** 先用簡單的 string 路徑方案快速實作。之後可以升級為 Astro Image 最佳化，不影響 schema 結構。

## Risks / Trade-offs

- **[所有文章 HTML 一次載入]** → 目前文章量極少，無影響。文章超過 100 篇時再考慮 htmx 分頁，屆時只需加 API endpoint + 修改觸發方式，卡片 HTML 結構不變。
- **[CSS `:has()` 瀏覽器支援]** → 主流瀏覽器已全面支援（2023 年底起）。若需相容舊瀏覽器，可退回 Alpine.js `x-show` 方案。
- **[category 改為必填 + 縮減選項]** → 既有文章需更新 frontmatter，但目前只有一篇，影響極小。
