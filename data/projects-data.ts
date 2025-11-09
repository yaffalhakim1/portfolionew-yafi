import React from 'react';
import { IconNextjs, IconSupabase } from '@/components/icons';

export interface ProjectData {
  title: string;
  desc: string;
  image: string;
  href: string;
  stack?: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: 'Sumz',
    desc: 'Sumz is a website to summarize article with AI',
    image: '/img/sumz.png',
    href: 'https://summarizer-drab.vercel.app/',
    stack: ['NextJS'],
  },
  {
    title: 'Chill Out',
    desc: 'Chill Out is a web makes you study with relax.',
    image: '/img/chill.png',
    href: 'https://chill-out.vercel.app/',
    stack: ['NextJS'],
  },
  {
    title: 'Anonymous Message',
    desc: 'Send anonymous message to you.',
    image: '/img/anonym.png',
    href: 'https://anonymous-website-message.vercel.app/',
    stack: ['NextJS', 'Supabase'],
  },
  {
    title: 'Movies',
    desc: 'Simple movies web using NextJS',
    image: '/img/movies.png',
    href: 'https://movies-13.vercel.app/',
    stack: ['NextJS'],
  },
  {
    title: 'Simple E-commerce',
    desc: 'Simple e-commerce using NextJS and RSC',
    image: '/img/ecommerce.png',
    href: 'https://simple-ecommerce-appdir.vercel.app/',
  },
  {
    title: 'Pokeredux',
    desc: 'Data fetching with redux toolkit.',
    image: '/img/pokredux.png',
    href: 'https://pokredux.vercel.app/',
  },
  {
    title: 'Todo List',
    desc: 'This is a todo list that I made using Supabase.',
    href: 'https://todo-supabasev2.vercel.app/',
    image: '/img/todos.png',
  },
  {
    title: 'Blog Design',
    desc: 'Practicing slicing a design using Tailwind CSS.',
    href: 'https://slicing-next1.vercel.app/',
    image: '/img/slicing1.png',
  },
  {
    title: 'CodeDesign',
    desc: 'Slicing from design to web from codedesign.dev.',
    href: 'https://slicing-all.vercel.app/',
    image: '/img/codesign.png',
  },
];

export const getStackIcons = (stack: string[] | undefined): string[] => {
  return stack || [];
};
