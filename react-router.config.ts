import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  routeDiscovery: { mode: 'initial' },
  prerender: async () => {
    return [];
  },
} satisfies Config;
