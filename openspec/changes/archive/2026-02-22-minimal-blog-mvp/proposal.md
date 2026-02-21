## Why

The blog currently has a scaffold and deployment in place, but no way to actually publish or read articles. A minimal blog viewer is needed so content can be written and shared immediately.

## What Changes

- Add a `blog` content collection with MDX support and a basic post schema
- Create `/blog` index page listing all published posts
- Create `/blog/[slug]` page for reading individual posts
- Add navigation linking to the blog from the site header

## Capabilities

### New Capabilities
- `blog-collection`: Define the Astro content collection for MDX blog posts with frontmatter schema (title, description, date, draft)
- `blog-list`: Display a chronological list of published posts at `/blog`
- `blog-post`: Render a single MDX post at `/blog/[slug]` with title and metadata
- `site-navigation`: Add a NavBar component linking to the blog (and future pages)

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- New files: `src/content.config.ts`, `src/content/blog/`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/components/nav/NavBar.astro`
- Modified files: `src/layouts/BaseLayout.astro` (add nav slot), `src/pages/index.astro` (update placeholder content)
- No new npm dependencies required
