import { type RouteConfig, index } from '@react-router/dev/routes';

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
    path: '/blog',
    file: 'routes/blog._index.tsx',
  },
  {
    path: '/blog/:slug',
    file: 'routes/blog.$slug.tsx',
  },
  // {
  //   path: '/coding-problems',
  //   file: 'routes/coding-problems.tsx',
  // },
  // {
  //   path: '/coding-problems/:slug',
  //   file: 'routes/coding-problems.$slug.tsx',
  // },
] satisfies RouteConfig;
