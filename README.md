# Website of The Writers Workshop Bangladesh

This repository contains source code of our website, where I showcase our works. You can visit my website at <https://thewritersworkshopbd.pages.dev> feel free to contact us if you have any questions or feedback.

[![CodeQL](https://github.com/thewritersworkshopbd/website/actions/workflows/codeql.yml/badge.svg)](https://github.com/thewritersworkshopbd/website/actions/workflows/codeql.yml)
[![Prettier](https://github.com/thewritersworkshopbd/website/actions/workflows/prettier.yml/badge.svg)](https://github.com/thewritersworkshopbd/website/actions/workflows/prettier.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

All layouts are stored in `/src/layouts`

There's nothing special about `src/components/`, but that's where I like to put any Astro/React/Vue/Svelte components.

Blog posts are stored in `src/content/posts`

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
