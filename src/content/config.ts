// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const comicsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

const poemsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

const storiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  comics: comicsCollection,
  stories: storiesCollection,
  poems: poemsCollection
};
