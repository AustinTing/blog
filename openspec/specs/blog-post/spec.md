### Requirement: 單篇文章頁
系統 SHALL 在 `/blog/[slug]` 路徑渲染單篇 MDX 文章。頁面 SHALL 顯示文章標題與格式化後的發布日期，並渲染完整的 MDX 內容。`getStaticPaths` SHALL 僅為 `draft: false` 的文章生成靜態路徑；草稿文章在正式建置中不生成對應頁面。頁面 SHALL 透過 BaseLayout props 設定 `<title>` 與 meta `description`。

#### Scenario: 存取已發布文章
- **WHEN** 使用者瀏覽 `/blog/[slug]`，且該 slug 對應一篇 `draft: false` 的文章
- **THEN** 頁面顯示該文章的標題、日期，以及完整的 MDX 渲染內容

#### Scenario: 草稿文章在正式建置中無法存取
- **WHEN** 一篇文章的 `draft: true`
- **THEN** 正式建置不為其生成靜態頁面，對應 slug 路徑返回 404

#### Scenario: 頁面標題與 meta description 正確設定
- **WHEN** 使用者瀏覽任一文章頁
- **THEN** 瀏覽器標籤頁顯示文章的 `title`，且 `<meta name="description">` 內容為文章的 `description`
