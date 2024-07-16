import { defineCollection, z } from "astro:content";

export const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    meta: z.object({
      title: z.string(),
      description: z.string(),
      schema: z.string(),
      ogImg: z.string(),
    }),
  }),
});

export const collections = {
  services: servicesCollection,
};
