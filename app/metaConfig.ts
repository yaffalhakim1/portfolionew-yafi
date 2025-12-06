// Shared metadata configuration
export const metainfo = {
  name: 'Muhammad Yafi Alhakim',
  description: 'Software Engineer - Fullstack Engineer from Indonesia.',
  url: 'https://yafialhakim.netlify.app',
  image: '/meta/meta.png',
  twitter: '@koalasigma',
};

// Helper function to generate standard meta tags for each page
export function generateMeta(pageTitle?: string, pageDescription?: string) {
  const title = pageTitle ? `${pageTitle} | ${metainfo.name}` : metainfo.name;
  const description = pageDescription || metainfo.description;

  return [
    { title },
    { name: 'description', content: description },
    { name: 'author', content: metainfo.name },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: metainfo.url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: metainfo.image },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: metainfo.twitter },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: metainfo.image },
  ];
}
