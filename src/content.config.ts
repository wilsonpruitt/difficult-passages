import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const difficulties = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/difficulties' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    category: z.enum([
      'Old Testament',
      'Gospels',
      'Epistles',
      'Old Testament / Theology',
      'Old Testament / Textual Criticism',
      'Old Testament / Theology / Science',
      'New Testament / Theology',
      'Prophets',
      'Gospels / Textual Criticism',
      'Gospels / Theology',
      'Epistles / Textual Criticism',
      'Acts / Theology',
    ]),
    passages: z.string(),
    shortDesc: z.string(),
    order: z.number(),
    tags: z.array(z.string()).optional(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = { difficulties };
