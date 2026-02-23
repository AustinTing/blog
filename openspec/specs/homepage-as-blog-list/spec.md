### Requirement: 首頁呈現文章列表
系統 SHALL 在 `/` 路徑提供一個靜態頁面，以逆時間順序（最新在前）列出所有已發布（`draft: false`）的文章。每筆列表項目 SHALL 顯示文章標題、描述，以及格式化後的發布日期，並連結至對應的 `/blog/[slug]` 頁面。

#### Scenario: 首頁顯示已發布文章，依日期排序
- **WHEN** 使用者瀏覽 `/`
- **THEN** 頁面顯示所有 `draft: false` 的文章，按 `date` 欄位由新至舊排列

#### Scenario: 草稿文章不出現在首頁列表
- **WHEN** collection 中存在 `draft: true` 的文章
- **THEN** 該文章不出現在 `/` 的列表中

#### Scenario: 無已發布文章時首頁正常渲染
- **WHEN** collection 中沒有任何 `draft: false` 的文章
- **THEN** `/` 頁面正常渲染，不擲出錯誤

#### Scenario: 列表項目連結至文章頁
- **WHEN** 使用者點擊首頁列表中某篇文章的連結
- **THEN** 瀏覽器導向至 `/blog/[slug]` 頁面
