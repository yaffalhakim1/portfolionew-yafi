import {
  defineCollections,
  frontmatterSchema,
  defineDocs,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/docs',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    readingTime: z.string().optional(),
  }),
});
