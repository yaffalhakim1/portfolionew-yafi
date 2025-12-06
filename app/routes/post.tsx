import { loadMdx } from 'react-router-mdx/server';
import type { Route } from './+types/post';
import { Post } from '@/components/blog/Post';

export const loader = async ({ request }: Route.LoaderArgs) => {
  return loadMdx(request);
};

export default function Route() {
  return <Post />;
}
