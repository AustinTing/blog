## ADDED Requirements

### Requirement: Multi-color gradient palette
系統 SHALL 提供以紫、粉、橘為基底的多色漸層色彩系統，取代現有的單一紫色調。所有色彩 SHALL 透過 CSS 自訂屬性定義於 `:root`。

#### Scenario: Page background uses warm gradient
- **WHEN** 使用者載入任何頁面
- **THEN** 頁面背景 SHALL 顯示從紫到粉到暖白的漸層效果

#### Scenario: Accent colors include pink and orange variants
- **WHEN** CSS 自訂屬性被載入
- **THEN** SHALL 包含 `--accent`（紫）、`--accent-pink`、`--accent-orange` 以及 `--gradient-kirakira` 漸層定義

### Requirement: Card hover kirakira effect
文章列表的卡片 SHALL 在 hover 時展現閃亮的互動回饋。

#### Scenario: Post card hover shows gradient border and glow
- **WHEN** 使用者 hover 文章卡片
- **THEN** 卡片 SHALL 展現漸層色邊框或 glow 效果
- **AND** transition 時間 SHALL 在 0.2s ~ 0.3s 之間，產生流暢感

### Requirement: Display font for headings
站名與頁面標題 SHALL 使用 Quicksand 字體（或同等圓潤風格字體），透過 Google Fonts 載入。文章內文 SHALL 維持 Inter 或同等無襯線可讀字體。

#### Scenario: Heading renders in display font
- **WHEN** 頁面載入完成
- **THEN** `h1` 元素 SHALL 以 Quicksand 字體渲染
- **AND** SHALL 使用 `font-display: swap` 避免字體載入阻塞

#### Scenario: Body text remains in readable font
- **WHEN** 使用者閱讀文章內文
- **THEN** 段落文字 SHALL 以 Inter 或系統無襯線字體渲染

### Requirement: Reading zone remains calm
文章內文區域（`.post-content`）SHALL 維持高可讀性，不包含 keyframe 動畫。允許的視覺點綴僅限於 CSS transitions。

#### Scenario: Article links have subtle hover glow
- **WHEN** 使用者 hover 文章內的超連結
- **THEN** 連結 SHALL 顯示微光效果（如 `text-shadow` glow）
- **AND** 效果 SHALL 使用 `transition` 而非 `animation`

#### Scenario: Heading decorative symbol
- **WHEN** 文章內的 `h2` 渲染時
- **THEN** MAY 在標題前顯示小型裝飾符號（如 ✦）

#### Scenario: No keyframe animations in reading zone
- **WHEN** 使用者瀏覽 `.post-content` 區域
- **THEN** 該區域內 SHALL NOT 包含任何 `@keyframes` 動畫

### Requirement: View Transitions for page navigation
頁面切換 SHALL 使用 Astro View Transitions API 提供過場動畫。

#### Scenario: Page transition plays on navigation
- **WHEN** 使用者點擊站內連結切換頁面
- **THEN** SHALL 播放 fade + 微 slide 的過場動畫

#### Scenario: Transition does not block interaction
- **WHEN** 過場動畫進行中
- **THEN** 動畫時間 SHALL 不超過 300ms

### Requirement: Respect reduced motion preference
所有裝飾性動畫 SHALL 尊重使用者的 `prefers-reduced-motion` 系統偏好設定。

#### Scenario: Reduced motion disables animations
- **WHEN** 使用者系統設定 `prefers-reduced-motion: reduce`
- **THEN** 所有 keyframe 動畫 SHALL 被停用
- **AND** transitions 的時間 SHALL 縮短至接近即時（≤ 0.01s）
- **AND** 頁面基本功能與可讀性 SHALL 不受影響
