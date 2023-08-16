// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const etablissementsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    site: z.string().optional(),
    image: z.string(),
  }),
});

const actuCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      etablissement: z.string(),
      description: z.string(),
      date: z.string(),
      image: image(),
      altImage: z.string(),
      author: z.string().optional(),
    }),
});

const contactCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    description: z.string(),
    mail: z.string().optional(),
    phoneNumber: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  etablissements: etablissementsCollection,
  actualites: actuCollection,
  contacts: contactCollection,
};
