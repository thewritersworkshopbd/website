import { defineCollection, z } from "astro:content";

const genericSchema = z.object({
  lang: z.string(),
  title: z.string(),
  author: z.string(),
});

const comicsCollection = defineCollection({
  schema: genericSchema,
});

const poemsCollection = defineCollection({
  schema: genericSchema,
});

const storiesCollection = defineCollection({
  schema: genericSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  comics: comicsCollection,
  stories: storiesCollection,
  poems: poemsCollection,
};
