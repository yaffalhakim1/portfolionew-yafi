import { Link } from 'react-router';
import type { Route } from './+types/blog._index';
import { source } from '@/lib/source';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog - Yafi Portfolio' },
    {
      name: 'description',
      content:
        'Read my latest thoughts and experiences on web development, programming, and technology.',
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const posts = source.getPages();

  return {
    posts: posts.map((post) => ({
      slug: post.slugs[0],
      title: post.data.title,
      description: post.data.description,
      url: post.url,
    })),
  };
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  //   // Sort posts by date, newest first
  //   const sortedPosts = posts.sort(
  //     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  //   );

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold mb-4'>Blog</h1>
            <p className='text-lg text-muted-foreground'>
              Thoughts, experiences, and tutorials on web development and
              programming
            </p>
          </div>

          {posts.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-muted-foreground'>
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <Link key={post.slug} to={post.url} className='block group'>
                  <article className='bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200'>
                    <h2 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
                      {post.title}
                    </h2>

                    <p className='text-muted-foreground mb-4 line-clamp-3'>
                      {post.description}
                    </p>

                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-muted-foreground'>
                        By {post.title}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
