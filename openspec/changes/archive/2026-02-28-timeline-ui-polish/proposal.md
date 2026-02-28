## Why

時間軸首頁有兩個視覺細節問題：年份旁的水平分隔線增加了視覺雜訊，手機版點擊卡片時出現的系統預設黑色 highlight 框與整體設計風格不符。

## What Changes

- 移除 `.timeline-year-divider::before` 與 `::after` 的水平線，年份文字單獨顯示
- 在 `.timeline-card-inner` 加入 `-webkit-tap-highlight-color: transparent`，消除手機版點擊黑框

## Capabilities

### Modified Capabilities

- `timeline-layout`: 移除年份水平線，修正手機點擊 highlight

## Impact

- `src/styles/timeline.css`：兩處純 CSS 修改，無邏輯變更
