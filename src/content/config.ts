import { defineCollection, z } from 'astro:content';

const paintings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.string().optional(),
    year: z.number(),
    medium: z.string(),
    size: z.string(),
    price: z.number(),
    sold: z.boolean().default(false),
    image: z.string(),
    featured: z.boolean().default(false),
    description: z.string(),
  }),
});

const tattoos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    style: z.string(),
    client: z.string().optional(),
    date: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

export const collections = { paintings, tattoos };
