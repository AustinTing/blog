## 1. 移除年份水平線

- [x] 1.1 刪除 `src/styles/timeline.css` 中 `.timeline-year-divider::before` 與 `::after` 的 CSS 規則（`content`, `height`, `background` 屬性）
- [x] 1.2 移除 `.timeline-year-divider` 的 `gap: 0.75rem`（線移除後 gap 無意義）
- [x] 1.3 移除手機版 `@media (max-width: 767px)` 中 `.timeline-year-divider::before { flex: 0 0 0 }` 的 override

## 2. 修正手機 tap highlight

- [x] 2.1 在 `.timeline-card-inner` 加入 `-webkit-tap-highlight-color: transparent`

## 3. 移除水平線的連帶回歸修正

移除 `::before` spacer 後衍生的定位與間距問題，一併修正。

- [x] 3.1 年份文字定位：`.timeline-year-divider` 加入 `padding-left: calc(var(--line-pos) - 1.5rem)`，補回原本 `::before` spacer 的水平位移
- [x] 3.2 左側卡片貼線：`.entry-left` 加入 `box-sizing: border-box`，修正 content-box 下 `padding-right` 在 `width` 之外導致卡片延伸至時間線的問題
- [x] 3.3 年份文字上下間距對稱：`.timeline-year-divider` 改為 `padding: 1rem 0`，移除 `.timeline-entries` 的 `padding-top: 0.5rem`，使年份文字上下各留 1rem 等距

## 4. UI 比例調整

- [x] 4.1 時間線位置：`--line-pos` 從 `35%` 調整為 `45%`，修正左欄對中文文字過窄的問題（左右比例由 35/65 調整為 45/55）

## 5. 驗證

- [x] 5.1 執行 `pnpm astro check` 確認無錯誤
- [x] 5.2 執行 `pnpm build` 確認建置成功
