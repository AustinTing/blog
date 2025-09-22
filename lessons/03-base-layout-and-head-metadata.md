# Lesson 03：建立 Base Layout 與 Head 中繼資料

> 讓每個頁面都能共享同一個版型與 SEO 設定，準備好往內容頁擴充。

## 本次新增的檔案
- `src/layouts/BaseLayout.astro`：包住 `<html>` 骨架、跳到主內容的無障礙連結，以及主要 `<main>` 容器。
- `src/components/base/Head.astro`：集中處理標題、描述、Open Graph、Twitter Card 等中繼資料。
- `src/components/base/Footer.astro`：產生年度會自動更新的頁尾，並附上參考主題的連結。

## 關鍵程式區塊
- BaseLayout 內的 `<style is:global>`：快速放入全域樣式（例如 Skip Link、Footer 間距），後續可視需要拆到獨立 CSS。
- `<Head>` 元件中的 `pageTitle` 與 `pageDescription`：示範如何根據傳入的 `title`、`description` props 動態組合文字。
- `canonicalURL`、`og:type`、`article:published_time`：提前預留文章頁會用到的欄位，未來只要傳入對應資料就能啟用。

## 現在可以做什麼
- 在任何頁面中 `import BaseLayout`，包住內容即可自動套用 Head、Footer 與 Skip Link。
- 傳入 `title`、`description`、`pubDate`、`lastModDate` 等 props，`Head.astro` 會自動補齊 SEO 與社群分享標籤。
- 自訂 Footer 文字或連結，讓作品隨著個人品牌更新而調整。

## 下一步建議
- 開始規劃導覽列與站內設定檔（Lesson 04），讓 BaseLayout 能顯示真正的導覽內容。
- 思考要把全域樣式拆分到 `src/styles/page.css` 或其他檔案，以便後續維護。
