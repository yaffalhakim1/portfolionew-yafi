/// <reference types="vite/client" />
import { fromConfig } from 'fumadocs-mdx/runtime/vite';
import type * as Config from '../source.config';

export const create = fromConfig<typeof Config>();

export const blog = create.doc("blog", "content/blog", import.meta.glob(["./**/*.{mdx,md}"], {
  "query": {
    "collection": "blog"
  },
  "base": "./../content/blog"
}));

export const docs = create.doc("docs", "content/docs", import.meta.glob(["./**/*.{mdx,md}"], {
  "query": {
    "collection": "docs"
  },
  "base": "./../content/docs"
}));

export const meta = create.meta("meta", "content/docs", import.meta.glob(["./**/*.{json,yaml}"], {
  "import": "default",
  "base": "./../content/docs",
  "query": {
    "collection": "meta"
  }
}));