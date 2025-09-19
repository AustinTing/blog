# Collaboration Guide

## Learning Goals
- **Immediate:** Rebuild this repository as a clean Astro project while studying the structure of `references/astro-antfustyle-theme`.
- **Short Term:** Learn Astro fundamentals and essential front-end practices by recreating the reference theme step by step.
- **Mid Term:** Transition into the "Aha stack" (Astro + htmx + Alpine.js) once the Astro foundation mirrors the reference site.
- **Long Term:** Own every part of the stack so future customizations feel intuitive, not mysterious.

## Operating Principles
- Treat `references/astro-antfustyle-theme` as read-only study material. Re-implement features in the root project instead of copying files verbatim.
- Plan work in digestible “lessons.” Each lesson/PR should modify **three to five files** so the cognitive load stays manageable.
- Keep `development.md` updated with the latest roadmap and mark progress as lessons are completed.
- Call out which reference files inspired each change in commit messages or PR notes to reinforce learning links.

## Workflow & Testing
- Prefer `pnpm` (matching the reference repo) for dependency management once the Astro project is initialized; document any deviation.
- Run `pnpm astro check` and `pnpm build` for feature work whenever they become applicable. For documentation-only updates, note why checks were skipped.
- Record any manual browser verification in PR descriptions, especially when introducing interactivity (htmx/Alpine.js).

## Documentation Expectations
- Use Markdown headings and concise bullet lists for learning materials and plans.
- Reference concrete file paths when explaining new concepts so it is easy to jump between our work and the reference theme.
