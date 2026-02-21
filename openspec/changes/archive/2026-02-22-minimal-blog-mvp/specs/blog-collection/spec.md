## ADDED Requirements

### Requirement: 定義 blog content collection
系統 SHALL 在 `src/content.config.ts` 中使用 `defineCollection` 定義名為 `blog` 的 content collection，搭配 zod schema 驗證 frontmatter。Schema 包含以下欄位：
- `title`：string，必填
- `description`：string，必填
- `date`：coerced Date，必填
- `draft`：boolean，選填，預設為 `false`
- `category`：enum（`work` | `learning` | `life` | `travel` | `other`），選填，無預設值

collection 設定 SHALL 接受 `.mdx` 檔案作為內容來源。

#### Scenario: 完整 frontmatter 的文章通過驗證
- **WHEN** 一篇 MDX 文章包含有效的 `title`、`description`、`date` frontmatter
- **THEN** 系統將其納入 `blog` collection，`entry.data` 包含所有已驗證的欄位

#### Scenario: 缺少必填欄位時擲出驗證錯誤
- **WHEN** 一篇 MDX 文章缺少 `title` 或 `description` 或 `date`
- **THEN** Astro 在建置或開發模式下擲出 content collection 驗證錯誤

#### Scenario: 未設定 draft 欄位時預設為 false
- **WHEN** 一篇 MDX 文章的 frontmatter 未包含 `draft` 欄位
- **THEN** `entry.data.draft` 的值為 `false`

#### Scenario: 明確設定 draft: true
- **WHEN** 一篇 MDX 文章的 frontmatter 包含 `draft: true`
- **THEN** `entry.data.draft` 的值為 `true`

#### Scenario: 設定有效的 category 值
- **WHEN** 一篇 MDX 文章的 frontmatter 包含 `category: work`（或其他有效 enum 值）
- **THEN** `entry.data.category` 的值為對應的字串

#### Scenario: 未設定 category 欄位
- **WHEN** 一篇 MDX 文章的 frontmatter 未包含 `category` 欄位
- **THEN** `entry.data.category` 的值為 `undefined`，不擲出驗證錯誤

#### Scenario: 設定無效的 category 值
- **WHEN** 一篇 MDX 文章的 frontmatter 包含不在 enum 清單內的 `category` 值（例如 `sport`）
- **THEN** Astro 在建置或開發模式下擲出 content collection 驗證錯誤
