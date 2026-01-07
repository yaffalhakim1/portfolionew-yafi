import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import rehypePrettyCode from 'rehype-pretty-code';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publicationDate: string;
  tags: string[];
  authors: string[];
  draft: boolean;
  code: string; // Compiled MDX code
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publicationDate: string;
  tags: string[];
  draft: boolean;
}

const postsDirectory = path.join(process.cwd(), 'content');

export async function getPostList(): Promise<BlogPostMeta[]> {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as any),
      } as BlogPostMeta;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.publicationDate < b.publicationDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, 'utf8');

  // Check if we are in Windows to handle path issues with esbuild
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  try {
    const { code, frontmatter } = await bundleMDX({
      source,
      cwd: postsDirectory, // Important for resolving imports relative to content dir
      mdxOptions(options) {
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          [
            rehypePrettyCode,
            {
              theme: 'github-dark',
              onVisitLine(node: any) {
                // Prevent lines from collapsing in `display: grid` mode, and
                // allow empty lines to be copy/pasted
                if (node.children.length === 0) {
                  node.children = [{ type: 'text', value: ' ' }];
                }
              },
            },
          ],
        ];
        return options;
      },
      esbuildOptions(options) {
        options.target = 'esnext';
        return options;
      },
    });

    return {
      slug,
      code,
      ...(frontmatter as any),
    } as BlogPost;
  } catch (error) {
    console.error('MDX Compilation Error:', error);
    throw error;
  }
}
