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
    title: 'Pokeredux',
    desc: 'Data fetching with redux toolkit.',
    image: '/img/pokredux.png',
    href: 'https://pokredux.vercel.app/',
  },
];

export const getStackIcons = (stack: string[] | undefined): string[] => {
  return stack || [];
};
