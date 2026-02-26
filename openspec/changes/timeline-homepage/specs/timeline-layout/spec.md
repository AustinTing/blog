## ADDED Requirements

### Requirement: 時間軸垂直佈局
首頁 SHALL 以垂直時間軸呈現文章，包含一條視覺上的垂直線連接所有時間節點。文章由新至舊排列。

#### Scenario: 頁面渲染時間軸結構
- **WHEN** 使用者瀏覽 `/`
- **THEN** 頁面顯示一條垂直時間線，文章卡片沿時間線由上至下、由新至舊排列

### Requirement: 年份分組標題
時間軸 SHALL 依年份分組文章。年份標題僅在該年份有已發布文章時顯示，且每個年份最多顯示一次。

#### Scenario: 同年份文章歸於同一分組
- **WHEN** 有多篇文章的 `date` 屬於同一年份
- **THEN** 這些文章歸在同一個年份標題之下，年份標題只出現一次

#### Scenario: 無文章的年份不顯示
- **WHEN** 某年份沒有任何已發布文章（例如 2024 年無文章，但 2023 與 2025 各有文章）
- **THEN** 時間軸中不顯示該年份標題，直接從 2025 跳到 2023

### Requirement: 桌面版佈局
在桌面版（視窗寬度 ≥ 768px）中，年份標題 SHALL 顯示在時間線左側，文章卡片 SHALL 顯示在時間線右側。每張卡片旁顯示月日資訊。

#### Scenario: 桌面版年份在左、卡片在右
- **WHEN** 視窗寬度 ≥ 768px
- **THEN** 年份標題在垂直時間線左側，文章卡片在右側，月日顯示在卡片與時間線之間

### Requirement: 手機版佈局
在手機版（視窗寬度 < 768px）中，年份標題 SHALL 作為全寬的水平分隔線顯示。時間線靠左，文章卡片佔滿剩餘寬度。

#### Scenario: 手機版年份為分隔線、卡片全寬
- **WHEN** 視窗寬度 < 768px
- **THEN** 年份標題橫跨全寬作為分隔線，卡片在時間線右側佔滿可用寬度

### Requirement: 文章卡片內容
每張時間軸卡片 SHALL 包含以下資訊：category badge、文章標題、說明文字。若文章有設定 `cover`，卡片底部 SHALL 顯示 cover 圖片。

#### Scenario: 有 cover 圖片的卡片
- **WHEN** 文章的 frontmatter 包含 `cover` 欄位
- **THEN** 卡片顯示 category badge、標題、說明文字，以及底部的 cover 圖片

#### Scenario: 無 cover 圖片的卡片
- **WHEN** 文章的 frontmatter 未包含 `cover` 欄位
- **THEN** 卡片顯示 category badge、標題、說明文字，不顯示圖片區域

### Requirement: Category badge 顏色
Work category 的 badge SHALL 使用 accent purple（`--accent`）配色，Life category 的 badge SHALL 使用 accent pink（`--accent-pink`）配色。

#### Scenario: Work 文章顯示 purple badge
- **WHEN** 文章的 category 為 `work`
- **THEN** badge 使用 `--accent`（purple）作為背景或文字色

#### Scenario: Life 文章顯示 pink badge
- **WHEN** 文章的 category 為 `life`
- **THEN** badge 使用 `--accent-pink`（pink）作為背景或文字色

### Requirement: 卡片連結至文章頁
每張時間軸卡片 SHALL 可點擊，連結至對應的 `/blog/[slug]` 頁面。

#### Scenario: 點擊卡片導向文章
- **WHEN** 使用者點擊時間軸中的某張卡片
- **THEN** 瀏覽器導向至該文章的 `/blog/[slug]` 頁面

### Requirement: Cover 圖片延遲載入
卡片中的 cover 圖片 SHALL 使用 `loading="lazy"` 屬性，避免一次載入所有圖片。

#### Scenario: cover 圖片使用 lazy loading
- **WHEN** 頁面載入時有多張包含 cover 的卡片
- **THEN** 不在可視區域內的 cover 圖片不會立即載入，待滾動至可視區域時才載入
