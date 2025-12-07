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
] satisfies RouteConfig;
