import { getPostList, type BlogPostMeta } from '../../lib/blog.server';
import { Animate } from '@/components/anim/text';
import { Link, useLoaderData } from 'react-router';
import type { Route } from './+types/blog._index';
import { generateMeta } from '../metaConfig';

export function meta({}: Route.MetaArgs) {
  return generateMeta(
    'Blog',
    'Technical articles, tutorials, and insights about fullstack development, performance optimizations, and modern web architecture.'
  );
}

export async function loader() {
  const posts = await getPostList();
  // Filter out drafts in production
  const isProduction = process.env.NODE_ENV === 'production';
  return posts.filter((post) => !isProduction || !post.draft);
}

export default function BlogIndex() {
  const posts = useLoaderData<typeof loader>();

  return (
    <Animate>
      <div className='max-w-2xl w-full'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>Blog</h1>
          <p className='text-gray-600 dark:text-gray-400'>
            Thoughts on software engineering, architecture, and developer
            experience.
          </p>
        </div>

        <div className='flex flex-col space-y-8'>
          {posts.length === 0 ? (
            <p className='text-gray-500 italic'>No posts found.</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className='group block'
              >
                <article className='flex flex-col space-y-2'>
                  <div className='flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
                    <time dateTime={post.publicationDate}>
                      {new Date(post.publicationDate).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </time>
                  </div>
                  <h2 className='text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                    {post.title}
                  </h2>
                  <p className='text-gray-600 dark:text-gray-300 line-clamp-2'>
                    {post.description}
                  </p>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>
    </Animate>
  );
}
