# Development Roadmap

## Vision
- **Immediate:** Rebuild the repository as a fresh Astro project while using `references/astro-antfustyle-theme` as the canonical example.
- **Short Term:** Understand Astro fundamentals (routing, layouts, content collections, styling) by rebuilding the reference theme feature by feature.
- **Mid Term:** Extend the Astro build with the "Aha stack" — progressively layering in htmx and Alpine.js once the core site matches the reference.
- **Long Term:** Gain confidence modifying any part of the stack, from content pipelines to interactive widgets.

## Reference Audit Highlights
- **Layouts & Base Components:** `src/layouts/*.astro`, `src/components/base/*` — establish the skeleton, metadata, and shared UI pieces.
- **Navigation & Config:** `src/config.ts`, `src/components/nav/*` — drive navigation and site metadata from a central config object.
- **Content Collections:** `src/content.config.ts`, `src/content/**`, `src/content/schema.ts` — organize markdown/MDX content with type safety.
- **Views & Widgets:** `src/components/views/*`, `src/components/widgets/*`, `src/components/toc/*` — reusable renderers for lists, cards, tables of contents, and interactive helpers.
- **Styling & Backgrounds:** `src/styles/*.css`, `src/components/backgrounds/*` — global design language, animated backgrounds, and page-level polish.
- **Integrations & Utilities:** `astro.config.ts`, `src/pages/rss.xml.js`, `src/utils/*` — build pipeline tweaks, feeds, and helper logic.

## Lesson Plan
Each lesson should ship in its own PR and touch **three to five files**. The "Files to Touch" column lists the intended targets for that lesson; repeat edits to previously-created files are okay when necessary.

| Lesson | Focus | Files to Touch (3-5) | Reference Pointers | Concepts & Notes | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Kickstart Astro workspace (scaffold project, dev scripts) | `package.json`, `astro.config.mjs` (or `.ts`), `tsconfig.json`, `src/pages/index.astro`, `src/styles/main.css` | `package.json`, `astro.config.ts`, `src/pages/index.mdx`, `src/styles/main.css` | Initialize pnpm, wire up basic route, introduce layout slot placeholders | ✅ Done |
| 2 | Base layout & head metadata | `src/layouts/BaseLayout.astro`, `src/components/base/Head.astro`, `src/components/base/Footer.astro`, `src/styles/page.css` | `src/layouts/BaseLayout.astro`, `src/components/base/Head.astro`, `Footer.astro`, `src/styles/page.css` | Learn Astro layout slots, metadata injection, shared footer structure | ✅ Done |
| 3 | Navigation driven by config | `src/config.ts`, `src/components/nav/NavBar.astro`, `src/components/nav/NavItem.astro`, `src/components/base/Link.astro`, `src/layouts/BaseLayout.astro` | `src/config.ts`, `src/components/nav/*`, `src/components/base/Link.astro` | Map config data to UI, practice props/loops, ensure accessibility | Not started |
| 4 | Background canvas & hero shell | `src/components/backgrounds/Background.astro`, `src/components/backgrounds/Plum.astro`, `src/components/base/Backdrop.astro`, `src/pages/index.astro`, `src/styles/main.css` | `src/components/backgrounds/*`, `src/components/base/Backdrop.astro`, `src/pages/index.mdx` | Compose layered backgrounds, manage slots for hero content | Not started |
| 5 | Content collections & schema typing | `src/content.config.ts`, `src/content/schema.ts`, `src/content/blog/hello-world.mdx`, `src/utils/content.ts` | `src/content.config.ts`, `src/content/schema.ts`, `src/content/blog/*`, `src/utils/content.ts` | Configure collection schemas, frontmatter typing, helper utilities | Not started |
| 6 | Blog list view & post metadata | `src/pages/blog/index.astro`, `src/components/views/ListView.astro`, `src/components/views/ListItem.astro`, `src/components/base/PostMeta.astro` | `src/pages/blog/index.astro`, `src/components/views/ListView.astro`, `ListItem.astro`, `src/components/base/PostMeta.astro` | Fetch collection entries, render responsive list cards, reuse metadata | Not started |
| 7 | Single post layout & table of contents | `src/pages/blog/[slug].astro`, `src/components/views/RenderPost.astro`, `src/components/toc/TOC.astro`, `src/styles/markdown.css`, `src/components/base/Categorizer.astro` | `src/pages/blog/[...slug].astro`, `src/components/views/RenderPost.astro`, `src/components/toc/*`, `src/styles/markdown.css`, `src/components/base/Categorizer.astro` | MDX rendering, TOC generation, tag grouping, markdown theming | Not started |
| 8 | Projects & highlight sections | `src/pages/projects.mdx`, `src/components/views/CardView.astro`, `src/components/views/CardItem.astro`, `src/content/projects/project-01.mdx`, `src/pages/index.astro` | `src/pages/projects.mdx`, `src/components/views/CardView.astro`, `CardItem.astro`, `src/content/projects/*`, `src/pages/index.mdx` | Create card layouts, link collection data to homepage highlights | Not started |
| 9 | Streams, shorts, and tabbed layout | `src/layouts/TabbedLayout.astro`, `src/pages/streams.mdx`, `src/pages/feeds.mdx`, `src/components/views/RenderPage.astro` | `src/layouts/TabbedLayout.astro`, `src/pages/streams.mdx`, `feeds.mdx`, `src/components/views/RenderPage.astro` | Build tabbed experiences, reuse markdown layouts, handle short-form content | Not started |
|10 | Widgets: theme, search, top button, loader | `src/components/widgets/ThemeSwitch.astro`, `src/components/widgets/SearchSwitch.astro`, `src/components/widgets/ToTopButton.astro`, `src/components/widgets/Loader.astro` | `src/components/widgets/*` | Wire up client-side islands, manage Astro scripts, accessibility considerations | Not started |
|11 | Sharing, comments, and feeds | `src/components/widgets/ShareLink.astro`, `src/components/widgets/Giscus.astro`, `src/pages/rss.xml.js`, `src/components/base/PostMeta.astro`, `src/pages/manifest.webmanifest.js` | `src/components/widgets/ShareLink.astro`, `Giscus.astro`, `src/pages/rss.xml.js`, `src/components/base/PostMeta.astro`, `src/pages/manifest.webmanifest.js` | Social integrations, RSS generation, PWA metadata | Not started |
|12 | Aha stack kick-off (htmx + Alpine.js) | `package.json`, `src/layouts/BaseLayout.astro`, `src/components/widgets/LogoButton.astro`, `src/pages/shorts.mdx` | Reference patterns from `src/components/widgets/*` and `src/pages/shorts.mdx` | Introduce htmx requests, Alpine state snippets, progressive enhancement strategy | Not started |

## Next Steps
1. Confirm tooling (`pnpm` vs `npm`) and initialize the Astro scaffold (Lesson 1).
2. After each lesson, update the Status column above with `✅ Done` and add any follow-up notes beneath the table.
3. When ready to embrace the Aha stack, branch into small experiments (e.g., Alpine-powered theme switch) before rolling into production lessons.

> Lesson 2 note: Layout-level helpers (skip link, footer spacing) live in `BaseLayout.astro` for now. We can graduate them into a dedicated `src/styles/page.css` once more shared pages exist.

## Open Questions / Parking Lot
- Decide on a preferred CSS strategy (stick with vanilla CSS like the reference or adopt utility-first classes) before Lesson 4.
- Evaluate whether to port the reference OG image generation as-is or replace it with a simpler static fallback during early lessons.
- Determine hosting target (Vercel, Netlify, etc.) ahead of deployment-focused lessons.
