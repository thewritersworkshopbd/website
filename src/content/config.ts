// external imports
import { defineCollection, z } from "astro:content";

// define schema(s)
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

// Export a single `collections` object to register our collection(s)
export const collections = {
  comics: comicsCollection,
  stories: storiesCollection,
  poems: poemsCollection,
};
