## 1. Schema 變更

- [x] 1.1 更新 `src/content.config.ts`：category 改為 `z.enum(['work', 'life'])`（必填），新增 `cover: z.string().optional()`，新增 `tags: z.array(z.string()).optional()`
- [x] 1.2 更新 `src/content/blog/hello-world.mdx` frontmatter：補上 `category: work`（或 `life`）

## 2. 元件建立

- [x] 2.1 建立 `src/components/TimelineCard.astro`：接收文章資料，渲染 category badge（Work=purple, Life=pink）、標題、說明文字、可選 cover 圖片（`loading="lazy"`），整張卡片連結至 `/blog/[slug]`
- [x] 2.2 建立 `src/components/CategoryFilter.astro`：渲染 All / Work / Life 三個按鈕，使用 Alpine.js `x-data` 管理 filter 狀態，點擊時透過 Alpine.js 事件或共享狀態通知時間軸

## 3. 首頁時間軸佈局

- [x] 3.1 重寫 `src/pages/index.astro`：在 frontmatter script 中將文章按年份分組為 `Map<number, Post[]>`，模板改為時間軸結構（年份分組 + 垂直時間線 + 卡片），整合 CategoryFilter 與 TimelineCard 元件
- [x] 3.2 加入 Alpine.js `x-data` 包裹整個時間軸區域，卡片使用 `x-show` 根據 filter 狀態顯示/隱藏，年份標題使用 CSS `:has()` 在所有子卡片隱藏時一併隱藏

## 4. 樣式

- [x] 4.1 新增 `src/styles/timeline.css`：時間軸垂直線、年份標題、日期節點、卡片定位等基礎樣式，延續 KIRAKIRA 主題的色彩與自訂屬性
- [x] 4.2 加入響應式樣式：桌面版（≥768px）年份左側 + 卡片右側，手機版（<768px）年份為全寬分隔線 + 卡片全寬
- [x] 4.3 Category badge 樣式：Work 使用 `--accent`，Life 使用 `--accent-pink`
- [x] 4.4 卡片 hover 效果：延續現有的 lift + gradient glow 風格

## 5. 驗證

- [x] 5.1 執行 `pnpm astro check` 確認 TypeScript 無錯誤
- [x] 5.2 執行 `pnpm build` 確認建置成功
- [x] 5.3 用 `pnpm preview` 檢視桌面版與手機版佈局，確認篩選功能正常運作
