# Repository Guidelines

## Project Structure & Module Organization
The Astro site is vendorized in `astro-antfustyle-theme/`, which provides layouts, components, and content collections. Keep local overrides or bespoke pages in the root `src/` folder to avoid merge conflicts when syncing upstream theme updates. Static assets live in `public/`, while theme-specific media sits under `astro-antfustyle-theme/src/assets/`. Author long-form content in `astro-antfustyle-theme/src/content/blog/<slug>.md(x)` and update high-level navigation through `astro-antfustyle-theme/src/config.ts`.

## Build, Test, and Development Commands
Use Yarn to stay aligned with `yarn.lock` (`yarn install` to bootstrap). Run `yarn start` for a local server on port 3000, or `yarn start:dev` to auto-open the browser. Execute `yarn build` before every release to emit the production bundle into `dist/`, and `yarn preview` to smoke-test the built output. For schema and TypeScript checks without building, use `yarn astro check`.

## Coding Style & Naming Conventions
Follow the house style from the theme: two-space indentation, single quotes in frontmatter, and PascalCase for components (e.g., `RenderPage.astro`) with kebab-case directory names. Prefer colocating MDX content with related assets. Reuse alias imports exposed by Vite (`~/components/...`) instead of relative paths, and keep JSX/MDX props on separate lines when they wrap.

## Testing Guidelines
There is no dedicated automated test suite; rely on `yarn build` and `yarn preview` to catch integration issues and broken routes. Run `yarn astro check` after adding content collections or TypeScript utilities to surface typing and Markdown schema warnings early. When adding interactive components, include manual test notes in the PR describing devices or browsers exercised.

## Commit & Pull Request Guidelines
Commit messages follow conventional prefixes (`feat:`, `fix:`, `refactor:`) as seen in `git log --oneline`; keep subjects under 72 characters and focus on a single change set per commit. For pull requests, link any related issues, summarize the intent, and list commands you ran. Attach before/after screenshots or GIFs for visual changes, and call out content migrations that require reviewers to `yarn install` again.

## Content Authoring Tips
Start new long-form articles by copying an existing file from `astro-antfustyle-theme/src/content/blog/` and updating the frontmatter (`title`, `description`, `bgType`). Use local image references via `/public/<path>` for shared assets, or place post-specific images next to the MDX file. If you adjust navigation, verify the labels in `astro-antfustyle-theme/src/config.ts` remain concise to preserve layout spacing.
