## 1. 移除年份水平線

- [x] 1.1 刪除 `src/styles/timeline.css` 中 `.timeline-year-divider::before` 與 `::after` 的 CSS 規則（`content`, `height`, `background` 屬性）
- [x] 1.2 移除 `.timeline-year-divider` 的 `gap: 0.75rem`（線移除後 gap 無意義）
- [x] 1.3 移除手機版 `@media (max-width: 767px)` 中 `.timeline-year-divider::before { flex: 0 0 0 }` 的 override

## 2. 修正手機 tap highlight

- [x] 2.1 在 `.timeline-card-inner` 加入 `-webkit-tap-highlight-color: transparent`

## 3. 驗證

- [x] 3.1 執行 `pnpm astro check` 確認無錯誤
- [x] 3.2 執行 `pnpm build` 確認建置成功
