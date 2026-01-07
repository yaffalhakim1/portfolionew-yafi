import { getPost, type BlogPost } from '../../lib/blog.server';
import { getMDXComponent } from 'mdx-bundler/client';
import { useLoaderData } from 'react-router';
import React, { useMemo } from 'react';
import type { Route } from './+types/blog.$slug';
import Callout from '@/components/mdx/callout';
import Step from '@/components/mdx/step';
import Tabs from '@/components/mdx/tabs';
import { Cards, Card } from '@/components/mdx/cards';
import { FileTree, Folder, FileItem } from '@/components/mdx/file-tree';
import { generateMeta } from '../metaConfig';
import { ArrowLeft } from 'lucide-react';

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return generateMeta(
      'Post Not Found',
      'The requested blog post could not be found.'
    );
  }
  return generateMeta(data.title, data.description);
}

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;
  if (!slug) throw new Response('Not Found', { status: 404 });

  const post = await getPost(slug);
  if (!post) throw new Response('Not Found', { status: 404 });

  return post;
}

export default function BlogPostPage() {
  const post = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(post.code), [post.code]);

  return (
    <article className='max-w-3xl w-full mx-auto pb-20'>
      <div className='mb-8'>
        <a
          href='/blog'
          className='inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-6 transition-colors'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to Blog
        </a>
        <h1 className='text-3xl md:text-4xl font-bold mb-4 tracking-tight'>
          {post.title}
        </h1>
        <div className='flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <time dateTime={post.publicationDate}>
            {new Date(post.publicationDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.authors.join(', ')}</span>
        </div>
      </div>

      <div className='prose prose-zinc dark:prose-invert max-w-none'>
        <Component
          components={{
            Callout,
            Step,
            Tabs,
            Cards,
            Card,
            FileTree,
            Folder,
            File: FileItem,
          }}
        />
      </div>
    </article>
  );
}
