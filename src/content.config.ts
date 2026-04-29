import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const drops = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/drops',
  }),
  schema: z.object({
    title: z.string(),
    theme: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  drops,
};