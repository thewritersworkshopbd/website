import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://thewritersworkshopbd.pages.dev",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  experimental: {
    viewTransitions: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
