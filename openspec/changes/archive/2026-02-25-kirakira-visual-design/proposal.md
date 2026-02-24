## Why

目前網站視覺風格偏向典型工程師部落格（沉穩、極簡），與站主追求的「反差萌」個性不符。希望融入 KIRAKIRA（閃亮）、DOKIDOKI（心動）的視覺語言，讓技術部落格擁有意料之外的活力與可愛感，同時不犧牲文章的閱讀體驗。

## What Changes

- 重新設計色彩系統：從單一紫色調擴展為多色漸層，融入粉彩與閃亮感
- 為 header、footer、首頁文章列表等「表現區」加入裝飾性動畫與視覺特效（星光粒子、hover 閃光、漸層動畫）
- 為文章閱讀區建立「安靜模式」：維持高可讀性，僅透過極微量的點綴（連結 glow、標題裝飾符號）滲入個性
- 加入頁面過場動畫（Astro View Transitions）
- 標題字體更換為更具個性的字體，內文維持可讀性字體

## Capabilities

### New Capabilities
- `kirakira-theme`: 閃亮心動視覺主題系統 — 包含色彩變數、漸層定義、裝飾性動畫（星光粒子、hover 特效）、字體配置、以及閱讀區與表現區的分區策略

### Modified Capabilities
<!-- 無需修改既有 spec 層級的需求 -->

## Impact

- `src/styles/` — 大幅改動全域 CSS 變數與樣式
- `src/components/base/Head.astro` — 加入新字體載入
- `src/layouts/BaseLayout.astro` — 加入過場動畫、背景效果結構
- `src/components/` — 可能新增裝飾性元件（星光粒子、動畫元素）
- `src/pages/` — 首頁與文章頁的視覺調整
- 效能考量：動畫需注意 `prefers-reduced-motion` 與行動裝置效能
