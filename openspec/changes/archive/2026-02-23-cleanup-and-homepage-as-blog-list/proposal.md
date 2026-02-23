## 為什麼

這個 blog 最初是以學習為目的建立的，累積了課程相關的鷹架內容，這些內容不再適合出現在正式網站上。專案現在要從學習沙盒轉型為正式的個人 blog，用途是個人記錄和分享給朋友。

## 變更內容

- 刪除 `lessons/` 目錄（課程說明文件，非網站內容）
- 首頁以文章列表取代原本的課程展示
- **BREAKING**：移除 `/blog` 路由；文章列表改由 `/` 提供
- 刪除 `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro` 保留（文章 URL 維持 `/blog/[slug]`，只移除列表頁）
- 移除 `Footer.astro` 與 `Head.astro` 中的學習相關文字

## Capabilities

### New Capabilities

- `homepage-as-blog-list`：首頁（`/`）直接呈現文章列表，取代原本的課程展示

### Modified Capabilities

- `site-navigation`：導覽列移除 `/blog` 連結（文章列表已移至 `/`）
- `blog-list`：文章列表從 `/blog` 移至 `/`

## 影響範圍

- `src/pages/index.astro` — 完整改寫
- `src/pages/blog/index.astro` — 刪除
- `src/components/base/Footer.astro` — 文字更新
- `src/components/base/Head.astro` — 更新 `SITE_DESCRIPTION`
- `src/components/nav/NavBar.astro` — 移除 Blog 導覽連結
- `lessons/` 目錄 — 整個刪除
