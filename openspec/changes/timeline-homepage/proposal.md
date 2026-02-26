## Why

目前首頁是簡單的文章清單，缺乏時間感與視覺層次。改為時間軸佈局能讓讀者一眼看出文章的時間脈絡，同時透過 category 篩選快速找到感興趣的內容。

## What Changes

- 首頁文章列表改為垂直時間軸佈局：左側年份分組 + 時間線，右側文章卡片
- 年份作為分組標題，僅在該年有文章時顯示
- 文章卡片包含：category badge、標題、說明文字、cover 圖片（可選）
- 頂部新增 All / Work / Life 篩選切換，使用 Alpine.js 實作 client-side filter
- Category 簡化為 `work | life` 兩種，改為必填
- Schema 新增 `cover`（optional 圖片路徑）與 `tags`（optional string array）
- 手機版：年份收至上方分隔線，卡片全寬
- Work badge 使用 accent purple，Life badge 使用 accent pink

## Capabilities

### New Capabilities
- `timeline-layout`: 時間軸佈局元件，包含年份分組、垂直時間線、日期節點、文章卡片排版，以及 RWD 處理
- `category-filter`: Alpine.js 驅動的 category 篩選 UI（All / Work / Life 切換），控制時間軸中文章的顯示與隱藏

### Modified Capabilities
- `blog-collection`: category 欄位從 5 種 optional enum 改為 `work | life` 必填；新增 `cover`（optional string）與 `tags`（optional string array）
- `homepage-as-blog-list`: 首頁從簡單清單改為時間軸佈局，整合篩選功能

## Impact

- `src/content.config.ts`：schema 變更（category、cover、tags）
- `src/pages/index.astro`：整頁重寫為時間軸佈局
- `src/content/blog/hello-world.mdx`：frontmatter 需補上必填 category
- `src/styles/main.css`：新增時間軸相關樣式
- 可能新增元件：`TimelineCard.astro`、`CategoryFilter.astro`
- **BREAKING**：category 欄位變為必填且選項縮減，既有文章需更新 frontmatter
