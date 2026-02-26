## MODIFIED Requirements

### Requirement: 首頁呈現文章列表
系統 SHALL 在 `/` 路徑提供一個靜態頁面，以時間軸佈局呈現所有已發布（`draft: false`）的文章。文章按年份分組，由新至舊排列。頁面頂部提供 category 篩選功能（All / Work / Life），使用 Alpine.js 實作即時過濾。每張文章卡片 SHALL 顯示 category badge、文章標題、說明文字，以及可選的 cover 圖片，並連結至對應的 `/blog/[slug]` 頁面。

#### Scenario: 首頁顯示已發布文章，以時間軸佈局依日期排序
- **WHEN** 使用者瀏覽 `/`
- **THEN** 頁面以時間軸佈局顯示所有 `draft: false` 的文章，按 `date` 欄位由新至舊排列，依年份分組

#### Scenario: 草稿文章不出現在首頁列表
- **WHEN** collection 中存在 `draft: true` 的文章
- **THEN** 該文章不出現在 `/` 的時間軸中

#### Scenario: 無已發布文章時首頁正常渲染
- **WHEN** collection 中沒有任何 `draft: false` 的文章
- **THEN** `/` 頁面正常渲染，不擲出錯誤

#### Scenario: 列表項目連結至文章頁
- **WHEN** 使用者點擊時間軸中某篇文章的卡片
- **THEN** 瀏覽器導向至 `/blog/[slug]` 頁面
