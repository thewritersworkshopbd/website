// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const comicsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
  }),
});

const poemsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
  }),
});

const storiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  comics: comicsCollection,
  stories: storiesCollection,
  poems: poemsCollection,
};
