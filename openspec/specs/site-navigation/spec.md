### Requirement: 全站 NavBar 元件
系統 SHALL 提供一個 `NavBar.astro` 元件，置於 `src/components/nav/` 目錄下，並在 `BaseLayout.astro` 中渲染於主內容之前。NavBar SHALL 包含連結至 `/blog` 的導航項目。所有使用 BaseLayout 的頁面 SHALL 自動顯示 NavBar。

#### Scenario: 所有頁面均可見 NavBar
- **WHEN** 使用者瀏覽任何使用 BaseLayout 的頁面
- **THEN** NavBar 在頁面頂部可見，其中包含指向 `/blog` 的連結

#### Scenario: 當前頁面的連結呈現 active 樣式
- **WHEN** 使用者目前所在頁面的路徑與某個 NavBar 連結相符
- **THEN** 該連結以視覺上可區分的 active 樣式呈現（例如不同顏色或底線）

#### Scenario: 點擊 Blog 連結導向列表頁
- **WHEN** 使用者點擊 NavBar 中的 Blog 連結
- **THEN** 瀏覽器導向至 `/blog`
