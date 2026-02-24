## 1. 色彩系統與 CSS 變數

- [x] 1.1 擴充 `src/styles/main.css` 的 `:root`，新增色彩變數（`--accent-pink`、`--accent-orange`、`--gradient-kirakira`），並將 `--page-bg` 改為暖色多色漸層
- [x] 1.2 更新現有元件的色彩（卡片邊框、陰影、hover 狀態）以使用新調色盤

## 2. 字體載入

- [x] 2.1 在 `src/components/base/Head.astro` 加入 Google Fonts import（Quicksand 用於標題、Inter 用於內文），搭配 preconnect 與 `font-display: swap`
- [x] 2.2 更新 `src/styles/main.css` 的 font-family 宣告：標題使用 Quicksand，內文使用 Inter

## 3. 卡片 Hover 效果

- [x] 3.1 為 `src/pages/index.astro` 的 `.post-item:hover` 加入 KIRAKIRA 漸層邊框 + glow 效果，transition 時間 0.2s–0.3s

## 4. 閱讀區微點綴

- [x] 4.1 為 `.post-content` 內的超連結加入 hover 微光效果（`text-shadow`），僅使用 CSS `transition`
- [x] 4.2 透過 CSS `::before` 在 `.post-content` 的 `h2` 標題前加入裝飾符號（✦）

## 5. View Transitions 頁面過場

- [x] 5.1 在 `src/components/base/Head.astro` 引入 Astro `<ClientRouter />`，設定 fade 過場效果（250ms）

## 6. Reduced Motion 與無障礙

- [x] 6.1 加入 `@media (prefers-reduced-motion: reduce)` 規則，停用所有 keyframe 動畫並將 transition 時間縮短至 ≤ 0.01s

## 7. 驗證

- [x] 7.1 執行 `pnpm astro check && pnpm build` 確認無型別錯誤或建置失敗
