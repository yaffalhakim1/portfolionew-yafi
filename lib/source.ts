import { loader } from 'fumadocs-core/source';
import { create, docs, meta, blog } from '@/.source';

export const source = loader({
  source: await create.sourceAsync(docs, meta),
  baseUrl: '/docs',
});

export const blogSource = loader({
  source: await create.sourceAsync(blog, meta),
  baseUrl: '/blog',
});
