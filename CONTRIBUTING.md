# Contributing Guidelines

You can contribute to this project by refactoring code, finding security vulnerabilities, making change to the UI/UX, or writing poems/stories and making comics.

By contributing you agree to our [Code of Conduct](https://github.com/thewritersworkshopbd/website?tab=coc-ov-file)

Before doing any contribution you need to setup your environment.

## Environment Setup

Make sure following tools are installed in your system:

- [Git](https://git-scm.com)
- [Visual Studio Code](https://code.visualstudio.com)
- [Node.js](https://nodejs.org)

You also need a [GitHub](https://github.com) account for doing any kind of contribution.

## Getting the code

Use the following command to pull the repository from [GitHub](https://github.com)

```bash
git clone https://github.com/thewritersworkshopbd/website.git
```

## Installing dependencies and extensions

[Visual Studio Code](https://code.visualstudio.com) will automatically prompt you to install recommended extensions.

Run the following command to install dependencies:

```bash
npm install
```

## Doing Contribution

### Writing Poems

Write your poem in markdown format in `/src/content/poems` make sure to add frontmatter.

Here's an example for frontmatter:

```md
---
layout: ../../layouts/Posts.astro
lang: bn
title: দুর্গার আগমন
author: Moheshwar Amarnath Biswas
draft: false
image: /images/social/poems/index.png
---
```

Images stored in `/public/images/social/poems` will be used for social preview.

### Writing Stories

Write your story in markdown format in `/src/content/stories` make sure to add frontmatter.

Here's an example for frontmatter:

```md
---
layout: ../../layouts/Posts.astro
lang: en
title: "Sarah and Alex: The inventor of ArtCode! (Imaginary)"
author: Moheshwar Amarnath Biswas
draft: false
image: /images/social/stories/index.png
---
```

Images stored in `/public/images/social/stories` will be used for social preview.

If you need to add any image please store them in `/public/images/stories`
If you add any images convert it to `.webp` format first. We require using `.webp` format for performance reasons!

You can use [CloudConvert](https://cloudconvert.com) or similar tools to convert your image to `.webp`

### Making Comics

1. Convert your comics to `.webp` format using [CloudConvert](https://cloudconvert.com/) or similar tools if you haven't already.
1. Store your comics in `/public/images/comics`
1. Create a markdown file in `/src/content/comics`
1. Add the frontmatter and link the comics.
Example:

```md
---
lang: en
layout: ../../layouts/Posts.astro
title: Terms and Conditions!
author: System32 Comics!
draft: false
image: /images/social/comics/index.pmg
---

![Terms and Conditions](/images/comics/termsandconditions.webp)

```
