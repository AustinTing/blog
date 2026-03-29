## MODIFIED Requirements

### Requirement: 篩選按鈕選中狀態的顏色區分
每個篩選按鈕在選中（active）狀態時 SHALL 有獨立的顏色識別：

- All 按鈕：紫色 `--accent`（`#6c4ed2`）
- Work 按鈕：靛藍色 `--accent-blue`（`#4e6cd2`）
- Life 按鈕：粉紅色 `--accent-pink`（`#e879a8`）

#### Scenario: 三個按鈕各有獨立顏色
- **WHEN** 使用者依序點擊 All、Work、Life 按鈕
- **THEN** 每個按鈕的 active 背景色皆不同，可明確區分

### Requirement: Category badge 顏色對應
文章卡片上的 category badge SHALL 使用對應分類的顏色：

- Work badge：靛藍色 `--accent-blue`
- Life badge：粉紅色 `--accent-pink`

#### Scenario: Work 文章顯示靛藍色 badge
- **WHEN** 文章 category 為 `work`
- **THEN** badge 文字與背景使用 `--accent-blue` 色系
