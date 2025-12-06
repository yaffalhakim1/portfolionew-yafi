import { type RouteConfig, index } from '@react-router/dev/routes';
import { routes } from 'react-router-mdx/server';

export default [
  index('routes/_index.tsx'),
  {
    path: '/about',
    file: 'routes/about.tsx',
  },
  {
    path: '/experience',
    file: 'routes/experience.tsx',
  },
  {
    path: '/projects',
    file: 'routes/projects.tsx',
  },
  {
    path: '/posts',
    file: 'routes/posts.tsx',
  },
  ...routes('./routes/post.tsx'),
] satisfies RouteConfig;
