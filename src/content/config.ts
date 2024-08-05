import { defineCollection, z } from "astro:content";

export const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    meta: z.object({
      title: z.string(),
      description: z.string(),
      schema: z.string().optional(),
      ogImg: z.string(),
    }),
    heroImg: z.object({
      mobile: z.string(),
      desktop: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  services: servicesCollection,
};
