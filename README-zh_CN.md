# Restent's homepage template

[English](README.md)

这是一个基于 [Restent's homepage](https://www.gxres.net) 的模板项目。

## 技术栈

- [Vite](https://vitejs.dev)
- [Vue 3](https://vuejs.org)
- [UnoCSS](https://unocss.dev)
- [vite-ssg](https://github.com/antfu-collective/vite-ssg)
- [Unhead](https://unhead.unjs.io)

## 用法

> [!IMPORTANT]
> Vite 需要 Node.js 18 或更高版本。我们建议使用 Node.js 20 LTS 版本。

1. 克隆这个仓库；
2. 运行 `bun i`；
3. 运行 `bun run build`；
4. 在 `dist` 目录查看网站静态文件。

> 我们默认使用 [Bun](https://bun.sh/) 作为我们的包管理器。如果你想使用 pnpm，只需要删除 `bun.lockb` 再运行 `pnpm i` 即可。

## 修改这个项目

对于主体内容，你需要修改 `src/components/Main.vue`。

对于 CSS，你需要修改 `src/style.css`。

> 我们使用了 UnoCSS 及其指令转换器 Transformer Directives。因此，你不仅可以使用来自 Tailwind CSS 和 Windi CSS 的 CSS 规则，也可以使用 `@apply`（Vanilla CSS 需要使用 `--apply`）、`@screen` 和 `theme()` 指令。

对于 SEO 和 Meta，我们使用了 [Unhead](https://unhead.unjs.io) 管理我们的文档 “头”, 你可以在 `src/App.vue` 里修改其函数 `useHead()` 和 `useSeoMeta()`。

## 许可协议

© 2019 - Present [Restent Ou](https://github.com/gxres042)。本项目采用 MIT 许可。
