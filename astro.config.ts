import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  site: "https://thewritersworkshopbd.pages.dev",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    AstroPWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        background_color: "#ffffff",
        description: "Express your creativity!",
        dir: "ltr",
        display: "standalone",
        name: "The Writers Workshop Bangladesh",
        orientation: "any",
        scope: "/",
        short_name: "The Writers Workshop Bangladesh",
        start_url: "/",
        theme_color: "#7b00e6",
        categories: [
          "entertainment",
          "kids",
          "lifestyle",
          "magazines",
          "social",
        ],
        icons: [
          {
            src: "pwa-192x192.webp",
            sizes: "192x192",
          },
          {
            src: "pwa-512x512.webp",
            sizes: "512x512",
          },
          {
            src: "pwa-512x512-square.webp",
            sizes: "512x512",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "mobile-screenshot.webp",
            sizes: "1082x2402",
            form_factor: "narrow",
          },
          {
            src: "desktop-screenshot.webp",
            sizes: "1744x857",
            form_factor: "wide",
          },
        ],
        shortcuts: [
          {
            name: "Stories",
            url: "/stories",
            description: "Stories",
          },
          {
            name: "Poems",
            url: "/poems",
            description: "Poems",
          },
          {
            name: "Comics",
            url: "/comics",
            description: "Comics",
          },
        ],
        id: "thewritersworkshopbd",
        edge_side_panel: {
          preferred_width: 400,
        },
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
  vite: {
    css: {
      lightningcss: {
        targets: browserslistToTargets(browserslist("defaults")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
