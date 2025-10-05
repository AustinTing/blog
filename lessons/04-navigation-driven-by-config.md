# Lesson 04：用設定檔驅動導覽列

> 把導覽項目集中管理，讓 BaseLayout 能夠從單一來源渲染桌機與行動版選單。

## 本次新增的檔案
- `src/config.ts`：建立 `SITE` 與 `UI` 設定，特別是 `internalNavs`、`socialLinks` 與 `navBarLayout` 等導覽相關欄位。
- `src/components/nav/NavBar.astro`：讀取設定物件、依照 `navBarLayout` 決定左右區塊的內容與手機版要不要合併。
- `src/components/nav/NavItem.astro`：處理 `displayMode` 不同的顯示邏輯，支援 icon/text 切換與目前頁面高亮。
- `src/components/base/Link.astro`：統一處理外部連結行為（是否另開新分頁、游標提示、icon）。
- `src/layouts/BaseLayout.astro`：在 `header` 區塊引入 `<NavBar />`，讓所有頁面共享導覽列。

## 關鍵程式區塊
- `UI.internalNavs` 與 `UI.socialLinks`：使用陣列描述每個導覽項目的路徑、標題、顯示模式與 icon，後續新增項目只要修改設定檔即可。
- `UI.navBarLayout`：透過 `left`、`right` 陣列組合導覽段落，並用 `mergeOnMobile` 控制手機版是否改成折疊式選單，必要時可插入 `hr`、`searchButton` 等特殊鍵值。
- `NavBar.astro`：在元件初始化時檢查 `left`、`right` 是否有重複鍵值，然後用 `map` 迭代設定陣列，根據鍵值決定要 render `<NavItem>`、搜尋或主題切換按鈕。
- `NavItem.astro`：依 `type` 決定網址與 aria 標記，並根據 `displayMode` 在桌機／行動裝置之間切換 icon 或文字，確保 `aria-current="page"` 只在目前路徑時啟用。
- `Link.astro`：讀取 `UI.externalLink` 設定，計算 `target`、`rel`、`aria-label`，必要時加上「另開新視窗」提示 icon 與自訂游標。

## 現在可以做什麼
- 在 `src/config.ts` 中調整 `internalNavs` 或 `socialLinks`，立刻反映在所有使用 BaseLayout 的頁面上。
- 透過 `navBarLayout` 切換導覽項目在左右區塊的排列，或是設定 `mergeOnMobile` 將內容收納進手機版選單。
- 在 BaseLayout 中保留 `<slot />`，讓未來的頁面只需專注於內容，導覽列與頁尾都能自動套用一致的外觀。
- 運用 `Link.astro` 的 `external` 與 `enableNewTabWarning` props，確保外部連結符合使用者預期。

## 下一步建議
- 擬定最小可用的導覽項目（例如 Blog、Projects），先以純文字模式上線，再逐步引入 icon 或進階互動。
- 確認 BaseLayout 是否需要包裹 `<main>` 之外的插槽，例如日後的背景特效或通知列。
- 為 Lesson 05 的背景與 Hero 佈局預留區域：可以思考導覽列與主視覺之間的間距與覆蓋層次。
