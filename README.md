# Restent's homepage template

[简体中文](README-zh_CN.md)

This is a template project based on [Restent's homepage](https://www.gxres.net).

## Tech Stack

- [Vite](https://vitejs.dev)
- [Vue 3](https://vuejs.org)
- [UnoCSS](https://unocss.dev)
- [vite-ssg](https://github.com/antfu-collective/vite-ssg)
- [Unhead](https://unhead.unjs.io)

## Usage

> [!IMPORTANT]
> Vite requires Node.js version 18 or upper. We suggest using Node.js 20 LTS.

1. Clone this repository;
2. Run `bun i`;
3. Run `bun run build`;
4. Check static artifacts at folder `dist`.

> We normally use [Bun](https://bun.sh/) as our package manager. If you want to use pnpm, delete `bun.lockb` and run `pnpm i`.

## Modify this project

For the main content, you should modify `src/components/Main.vue`.

For CSS, you should modify `src/style.css`.

> We use UnoCSS and its transformer "Transformer Directives". You can use CSS rules from Tailwind CSS and Windi CSS, and also use directives like `@apply` (use `--apply` in Vanilla CSS), `@screen` and `theme()`.

For SEO and Meta, we use [Unhead](https://unhead.unjs.io) to manage our document head, you can modify its composables `useHead()` and `useSeoMeta()` in `src/App.vue`.

## License

© 2019 - Present [Restent Ou](https://github.com/gxres042). This project is under MIT License.
