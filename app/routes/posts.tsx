import { loadAllMdx } from 'react-router-mdx/server';
import { useMdxFiles } from 'react-router-mdx/client';
import { z } from 'zod';
import { Posts } from '@/components/blog/Posts';

export const loader = async () => {
  return loadAllMdx();
};

const postSchema = z.object({
  date: z.date(),
  description: z.string(),
  slug: z.string(),
  title: z.string(),
  category: z.string(),
  author: z.object({
    name: z.string(),
    role: z.string(),
    imageUrl: z.string(),
  }),
});

const postsSchema = z.array(postSchema).min(1);

export function meta() {
  return [
    { title: 'Blog - Muhammad Yafi Alhakim' },
    {
      name: 'description',
      content:
        'Thoughts, tutorials, and insights about web development and programming',
    },
    { property: 'og:title', content: 'Blog - Muhammad Yafi Alhakim' },
    {
      property: 'og:description',
      content:
        'Thoughts, tutorials, and insights about web development and programming',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog - Muhammad Yafi Alhakim' },
    {
      name: 'twitter:description',
      content:
        'Thoughts, tutorials, and insights about web development and programming',
    },
  ];
}

export default function Blog() {
  const files = useMdxFiles();
  const result = postsSchema.safeParse(files);

  if (!result.success) {
    return (
      <>
        <p>Invalid posts payload:</p>
        <pre>{JSON.stringify(result.error, null, 2)}</pre>
      </>
    );
  }

  const posts = result.data;

  return <Posts posts={posts} />;
}
