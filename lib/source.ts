import { loader } from 'fumadocs-core/source';
import { create, docs, meta } from '@/.source';

export const source = loader({
  source: await create.sourceAsync(docs, meta),
  baseUrl: '/docs',
});
