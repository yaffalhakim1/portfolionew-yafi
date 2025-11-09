import { Link } from 'react-router';
import type { Route } from './+types/blog.$slug';
import { blogSource } from '@/lib/source';
import { toClientRenderer } from 'fumadocs-mdx/runtime/vite';
import { blog } from '@/.source';
import { getMDXComponents } from '../mdx-components';

export function meta({ params, loaderData }: Route.MetaArgs) {
  if (!loaderData) {
    return [
      { title: 'Post Not Found' },
      {
        name: 'description',
        content: 'The requested blog post could not be found.',
      },
    ];
  }

  return [
    { title: `${loaderData.post.title} - Yafi Portfolio` },
    { name: 'description', content: loaderData.post.description },
    { property: 'og:title', content: loaderData.post.title },
    { property: 'og:description', content: loaderData.post.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:author', content: loaderData.post.author },
    {
      property: 'article:published_time',
      content: new Date(loaderData.post.date).toISOString(),
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}

const renderer = toClientRenderer(blog, ({ default: Mdx, frontmatter }) => {
  return (
    <div className='prose prose-slate max-w-none dark:prose-invert'>
      <Mdx components={getMDXComponents()} />
    </div>
  );
});

export async function loader({ params }: Route.LoaderArgs) {
  const page = blogSource.getPage([params.slug]);

  if (!page) {
    throw new Response('Not Found', { status: 404 });
  }

  return {
    path: page.path,
    post: {
      slug: params.slug,
      title: page.data.title,
      description: page.data.description,
      author: page.data.author,
      date:
        page.data.date instanceof Date
          ? page.data.date.toISOString()
          : page.data.date,
      tags: page.data.tags || [],
      featured: page.data.featured || false,
      readingTime: page.data.readingTime,
      toc: page.data.toc || [],
    },
  };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { path, post } = loaderData;
  const Content = renderer[path];

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Back to Blog */}
          <Link
            to='/blog'
            className='inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors'
          >
            ← Back to Blog
          </Link>

          {/* Article Header */}
          <article className='prose prose-slate max-w-none dark:prose-invert'>
            <header className='not-prose mb-8'>
              <div className='text-center mb-8'>
                {post.featured && (
                  <span className='inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full mb-4'>
                    Featured Post
                  </span>
                )}

                <h1 className='text-4xl font-bold mb-4 leading-tight'>
                  {post.title}
                </h1>

                <p className='text-xl text-muted-foreground mb-6 max-w-2xl mx-auto'>
                  {post.description}
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <span>By {post.author}</span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  {post.readingTime && (
                    <div className='flex items-center gap-2'>
                      <span>{post.readingTime}</span>
                    </div>
                  )}
                </div>

                {post.tags.length > 0 && (
                  <div className='flex flex-wrap gap-2 justify-center mt-6'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className='prose-headings:scroll-mt-20'>
              <Content />
            </div>
          </article>

          {/* Article Footer */}
          <footer className='not-prose mt-12 pt-8 border-t'>
            <div className='text-center'>
              <p className='text-muted-foreground mb-4'>
                Thanks for reading! If you found this helpful, consider sharing
                it.
              </p>
              <Link
                to='/blog'
                className='inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors'
              >
                Read More Posts
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
