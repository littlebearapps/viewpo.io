import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  help: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      order: z.number().default(99),
      category: z.string().optional(),
    }),
  }),
};
