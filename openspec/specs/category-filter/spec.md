### Requirement: Category 篩選 UI
首頁時間軸上方 SHALL 顯示篩選按鈕群組，包含三個選項：All、Work、Life。預設選中 All。

#### Scenario: 首頁載入時預設顯示所有文章
- **WHEN** 使用者瀏覽 `/`
- **THEN** All 按鈕為選中狀態，時間軸顯示所有已發布文章

#### Scenario: 選中狀態有視覺區分
- **WHEN** 某個篩選按鈕被選中
- **THEN** 該按鈕有明顯的視覺區分（背景色變化），且三個按鈕各有獨立顏色識別

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

### Requirement: 切換篩選即時過濾文章
使用者點擊篩選按鈕時，時間軸 SHALL 即時顯示或隱藏對應 category 的文章，不需頁面重新載入。篩選使用 Alpine.js 實作 client-side filter。

#### Scenario: 選擇 Work 只顯示 Work 文章
- **WHEN** 使用者點擊 Work 按鈕
- **THEN** 時間軸僅顯示 category 為 `work` 的文章，Life 文章被隱藏

#### Scenario: 選擇 Life 只顯示 Life 文章
- **WHEN** 使用者點擊 Life 按鈕
- **THEN** 時間軸僅顯示 category 為 `life` 的文章，Work 文章被隱藏

#### Scenario: 切換回 All 顯示全部文章
- **WHEN** 使用者點擊 All 按鈕
- **THEN** 時間軸顯示所有已發布文章

### Requirement: 篩選後隱藏無文章的年份
當篩選後某年份下所有文章都被隱藏時，該年份的分組標題也 SHALL 被隱藏。

#### Scenario: 篩選後某年份無對應文章
- **WHEN** 使用者選擇 Work，但 2025 年只有 Life 文章
- **THEN** 2025 年的年份標題不顯示
