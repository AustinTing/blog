## 1. CSS 變數新增

- [ ] 1.1 在 `src/styles/main.css` 的 `:root` 中新增 `--accent-blue: #4e6cd2`

## 2. 篩選按鈕樣式更新

- [ ] 2.1 在 `src/styles/timeline.css` 中將 `.filter-btn.filter-work.active` 的 `background` 與 `border-color` 改為 `var(--accent-blue)`

## 3. Category badge 樣式更新

- [ ] 3.1 在 `src/styles/timeline.css` 中將 `.badge-work` 的 `background` 與 `color` 改為使用 `var(--accent-blue)`

## 4. 元件結構調整

- [ ] 4.1 在 `src/components/CategoryFilter.astro` 為 All 按鈕加上 `filter-all` class

## 5. 驗證

- [ ] 5.1 執行 `pnpm astro check` 確認無錯誤
- [ ] 5.2 執行 `pnpm build` 確認建置成功
