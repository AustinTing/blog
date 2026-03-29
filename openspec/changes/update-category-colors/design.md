## Approach

直接修改 CSS 自訂屬性與對應的樣式規則，將 Work 的顏色從紫色改為靛藍色。

### 色彩配置

| 分類 | 顏色 | CSS 變數 | Hex |
|------|------|---------|-----|
| All | 紫色 | `--accent` | `#6c4ed2` |
| Work | 靛藍 | `--accent-blue`（新增） | `#4e6cd2` |
| Life | 粉紅 | `--accent-pink` | `#e879a8` |

### 修改點

1. **`src/styles/main.css`** — 在 `:root` 新增 `--accent-blue: #4e6cd2`
2. **`src/styles/timeline.css`** — 將 `.filter-btn.filter-work.active` 的 `background` 與 `border-color` 改為 `var(--accent-blue)`；將 `.badge-work` 的顏色改為 `var(--accent-blue)`
3. **`src/components/CategoryFilter.astro`** — 為 All 按鈕加上 `filter-all` class，使結構更明確

### 不變之處

- All 按鈕的預設 `.filter-btn.active` 樣式已是 `--accent`，無需修改
- Life 相關樣式完全不變
- 篩選邏輯（Alpine.js）不受影響
