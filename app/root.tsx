import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { Header } from '@/components/header';
import { metainfo } from './metaConfig';

import { ThemeProvider } from '@/components/theme-provider';

export const meta: Route.MetaFunction = () => {
  return [
    { title: metainfo.name },
    { name: 'description', content: metainfo.description },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    { name: 'author', content: metainfo.name },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: metainfo.url },
    { property: 'og:title', content: metainfo.name },
    { property: 'og:description', content: metainfo.description },
    { property: 'og:image', content: metainfo.image },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: metainfo.twitter },
    { name: 'twitter:title', content: metainfo.name },
    { name: 'twitter:description', content: metainfo.description },
    { name: 'twitter:image', content: metainfo.image },
  ];
};

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  { rel: 'icon', href: '/favicon.ico' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                // Only run on client - will be skipped during server rendering
                if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                  // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
                  if (localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                }
              } catch (e) {
                // Fail silently if localStorage is not available
                console.warn('Unable to set initial theme', e);
              }
            })()
          `,
          }}
        />
      </head>

      <body
        className='bg-[#f9f9f6] dark:bg-[#16181d] font-sans antialiased'
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className='container mx-auto flex flex-1 flex-col pb-20 pt-40 px-4 sm:px-6 md:px-20 lg:px-40 xl:px-80'>
        <Outlet />
      </main>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
