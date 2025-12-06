import { format } from 'date-fns';
import { useMdxComponent, useMdxAttributes } from 'react-router-mdx/client';
import { z } from 'zod';
import { Author } from './Author';

const postSchema = z.object({
  date: z.date(),
  author: z.object({
    name: z.string(),
    role: z.string(),
    imageUrl: z.string(),
  }),
});

export const Post = () => {
  const Component = useMdxComponent();
  const attrs = useMdxAttributes();

  const result = postSchema.safeParse(attrs);

  if (!result.success) {
    return (
      <>
        <p>Invalid post payload:</p>
        <pre>{JSON.stringify(result.error, null, 2)}</pre>
      </>
    );
  }

  const post = result.data;

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-4xl mx-auto px-6  lg:px-8'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 pb-8 border-b border-gray-200'>
          <Author
            name={post.author.name}
            role={post.author.role}
            imageUrl={post.author.imageUrl}
          />
          <time
            dateTime={post.date.toString()}
            className='text-sm text-gray-500'
          >
            {format(post.date, 'LLL dd, yyyy')}
          </time>
        </div>
        <article className='prose prose-lg lg:prose-xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:mb-8 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 article-content'>
          <Component />
        </article>
      </div>
    </div>
  );
};
