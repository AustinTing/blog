## Context

目前網站使用單一紫色調搭配毛玻璃效果，視覺風格為典型工程師部落格。現有結構：

- `src/styles/main.css`：5 個 CSS 自訂屬性（`--page-bg`, `--text-color`, `--accent`, `--accent-soft`, `--card-border`）
- `src/layouts/BaseLayout.astro`：body.page → NavBar → main.page-content → Footer
- 無字體載入（宣告了 Inter 但未 import）、無動畫 keyframes、無 View Transitions

設計目標是在不破壞閱讀體驗的前提下，融入 KIRAKIRA（閃亮）DOKIDOKI（心動）的視覺個性。

## Goals / Non-Goals

**Goals:**
- 建立「劇場模式」分區策略：表現區（header / footer / 首頁列表 / 頁面過場）可視覺張力全開，閱讀區（文章內文）維持乾淨安靜
- 將色彩系統從單一紫色擴展為粉彩多色漸層
- 加入裝飾性微動畫（hover 閃光、卡片互動回饋）
- 替換標題字體為更具個性的字體
- 加入 Astro View Transitions 頁面過場
- 尊重 `prefers-reduced-motion` 偏好

**Non-Goals:**
- 不做深色模式（另案處理）
- 不使用 JS 粒子引擎（Canvas / WebGL），僅用 CSS 動畫
- 不引入 CSS 框架（維持原生 CSS）
- 不改動文章的資料結構或 content collection schema

## Decisions

### D1: 色彩系統 — 多色漸層 + 粉彩 accent 色

**選擇：** 以現有紫色為基底，擴展為紫→粉→橘的暖色漸層，搭配粉彩系的 accent 變體。

**原因：** 保持與現有品牌的連續性，同時加入 KIRAKIRA 必要的色彩豐富度。多色漸層比單色更能傳達「閃亮心動」的情緒。

```css
/* 新色彩系統 */
--accent-pink: #e879a8;
--accent-orange: #f0a05e;
--gradient-kirakira: linear-gradient(135deg, #b586f0, #e879a8, #f0a05e);
--page-bg: radial-gradient(ellipse at top, #f3eeff, #fdf0f5 40%, #fff8f3 70%, #ffffff 100%);
```

**替代方案（未選）：** 全面改為粉色主題 — 太失去工程師部落格的底蘊，反差感會消失。

### D2: 動畫策略 — 純 CSS + Astro View Transitions

**選擇：** 所有裝飾性動畫用 CSS keyframes + transitions 實現。頁面切換使用 Astro 內建 View Transitions API。

**原因：** 零 JS 依賴、效能好、瀏覽器原生支援。CSS 動畫已足以實現 hover glow、漸層流動等效果。

**替代方案（未選）：** Canvas 粒子系統 — 過重，且會持續佔用 GPU，影響閱讀時的效能與電池。

### D3: 字體配置 — 標題用 Quicksand，內文維持 Inter

**選擇：** 標題字體換成 Quicksand（圓潤、友善、帶點可愛感），透過 Google Fonts 載入。內文維持 Inter（也順便正式載入）。

**原因：** Quicksand 的圓潤字形與技術內文的理性排版形成反差（標題在撒嬌，內文在講道理）。同時確保正文的可讀性不受影響。

**替代方案（未選）：** 手寫風字體（如 Caveat）— 過於 casual，標題的資訊傳遞能力會下降。

### D4: 表現區 vs 閱讀區的分界實作

**選擇：** 透過 CSS class 命名慣例區分，不需要結構性改動。

- 表現區元素（`.site-nav`, `.post-item`, `.site-footer`）加入動畫與裝飾樣式
- 閱讀區（`.post-content`）僅允許極微量的點綴：連結 hover glow、h2 前裝飾符號
- 閱讀區內不出現動畫 keyframes，只有 transition

### D5: View Transitions 過場

**選擇：** 使用 Astro 內建的 `<ViewTransitions />` 元件，搭配 `transition:animate` directive。

**實作方式：**
- 在 `Head.astro` 中引入 `<ViewTransitions />`
- 頁面切換時使用 fade + 微 slide 效果
- 不做複雜的 morph 動畫（保持簡潔）

## Risks / Trade-offs

- **效能** → CSS 動畫可能影響低階裝置。緩解：使用 `prefers-reduced-motion` 完全停用動畫。
- **字體載入延遲** → Google Fonts 可能導致 FOUT。緩解：使用 `font-display: swap` + preconnect。
- **漸層相容性** → `color-mix()` 和現代 CSS 需要較新瀏覽器。緩解：目標受眾為技術人員，瀏覽器相容性不是大問題。
- **視覺一致性** → 多色漸層容易看起來雜亂。緩解：限制在 3 個主色（紫、粉、橘），所有衍生色從這三色混合。
