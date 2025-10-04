# Lesson 02：部署到 Cloudflare Pages

> 把剛建立的 Astro 專案接上 Cloudflare Pages，打通 GitHub Actions 自動佈署流程。

## 本次新增的檔案

- `development.md`：課程表新增 Cloudflare Pages 章節，記錄 Secrets 命名與部署連結。
- `src/pages/index.astro`：更新首頁導覽的 Lesson 清單，加入部署主題。

## 關鍵程式區塊

- `pnpm install --frozen-lockfile` 與 `pnpm build`：確保 Cloudflare Pages 部署前通過鎖檔驗證與正式建置。
- `cloudflare/pages-action@v1`：依 `CLOUDFLARE_ACCOUNT_ID`、`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_PROJECT_NAME` Secrets 推送靜態資源到 Cloudflare Pages。

## 現在可以做什麼
- 在 Cloudflare Pages 建立專案並選擇「Connect to Git」連結此 GitHub repository。
- 若改用 Cloudflare Pages 後台的原生部署流程（Dashboard 直接連 GitHub），Cloudflare 會透過 OAuth 取得授權，此時可以不在 GitHub 儲存庫內設定上方 Secrets。
- 如需在 Cloudflare 後台設定 Build command / output / root，可對照 `pnpm run build`、`dist`、`.`。
- 推送到 `main`（或指定 branch）後觀察 Actions 工作「Deploy to Cloudflare Pages」，確認編譯與發佈成功。

## 下一步建議
- 完成部署後繼續 Lesson 03，建立共用 Base Layout 與 Head 中繼資料，讓佈署中的網站擁有一致的框架。
