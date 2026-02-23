## REMOVED Requirements

### Requirement: 文章列表頁
**Reason**: 文章列表功能移至首頁（`/`），由 `homepage-as-blog-list` capability 承接。`/blog` 路由對應的 `src/pages/blog/index.astro` 予以刪除。
**Migration**: 使用 `/` 取代原本的 `/blog` 列表頁。
