## Why

目前 All 和 Work 的篩選按鈕 active 狀態都使用紫色 `--accent`（`#6c4ed2`），視覺上無法區分。紫色作為網站主色調（標題、時間軸、連結等皆使用），應歸屬於 All，而非特定分類。

## What Changes

- All 保留紫色 `--accent`（`#6c4ed2`）作為 active 顏色
- Work 改用靛藍色 `--accent-blue`（`#4e6cd2`），新增 CSS 自訂屬性
- Life 維持粉紅色 `--accent-pink`（`#e879a8`）不變
- 設計概念：藍（Work）+ 粉紅（Life）= 紫（All），語義上「全部 = 工作 + 生活」

影響範圍包含篩選按鈕 active 狀態與文章卡片上的 category badge。

## Capabilities

### Modified Capabilities
- `category-filter`: 篩選按鈕的 active 顏色配置——All 使用紫色、Work 改用靛藍、Life 維持粉紅

## Impact

- `src/styles/main.css`：新增 `--accent-blue: #4e6cd2`
- `src/styles/timeline.css`：Work 相關的 filter button 與 badge 改用 `--accent-blue`
- `src/components/CategoryFilter.astro`：為 All 按鈕加上 `filter-all` class
