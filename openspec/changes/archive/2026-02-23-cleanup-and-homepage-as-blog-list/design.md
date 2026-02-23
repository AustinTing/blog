## Context

目前網站保留了學習階段的鷹架：首頁是課程列表、頁尾有「Built while studying」字樣、`Head.astro` 的站台描述也是學習導向。本次變更目標是清除這些痕跡，讓 `/` 直接成為文章列表。

## Goals / Non-Goals

**Goals:**
- 首頁呈現文章列表（行為與原 `/blog` 一致）
- 移除所有對外可見的學習相關文字
- 刪除 `lessons/` 目錄
- 移除冗餘的 `/blog` 列表路由

**Non-Goals:**
- 改動文章 URL（`/blog/[slug]` 保持不變）
- 重新設計頁面樣式
- 更動 `hello-world.mdx` 內容

## Decisions

### 文章 URL 維持 `/blog/[slug]`

保留 `src/pages/blog/[slug].astro`，不移動文章 URL。原因：只刪除列表頁，不影響文章頁；未來若有文章已分享出去，URL 不會失效。只刪除 `src/pages/blog/index.astro`。

### NavBar 移除 Blog 連結

首頁已是文章列表，`/blog` 連結不再有意義。NavBar 只保留 Home 連結（指向 `/`）即可。若未來增加其他頁面（Projects、About 等），再按需擴充。

### `index.astro` 直接搬移 blog 列表邏輯

不抽共用元件，直接把 `src/pages/blog/index.astro` 的 frontmatter 與 template 搬到 `src/pages/index.astro`，保持程式碼量最小。

## Risks / Trade-offs

- `/blog` 路由移除後，舊連結會 404 → 可接受，網站尚未公開推廣
- NavBar 只剩 Home 連結，視覺上略顯空曠 → 可接受，後續課程會加入更多頁面

## Open Questions

無。
