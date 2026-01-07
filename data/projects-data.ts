import React from 'react';

export interface ProjectData {
  title: string;
  desc: string;
  image: string;
  href: string;
  stack?: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: 'Sumz - AI Summarizer',
    desc: 'An intelligent article summarizer leveraging AI to condense lengthy web content into concise summaries. Built with Next.js and integrated with OpenAI API for real-time processing.',
    image: '/img/sumz.png',
    href: 'https://summarizer-drab.vercel.app/',
    stack: ['NextJS', 'React', 'Tailwind'],
  },
  {
    title: 'Anonymous Message',
    desc: 'A secure messaging platform allowing users to send feedback and messages anonymously. Features real-time updates and a dashboard for managing incoming messages.',
    image: '/img/anonym.png',
    href: 'https://anonymous-website-message.vercel.app/',
    stack: ['NextJS', 'Supabase', 'Tailwind'],
  },
  {
    title: 'Movies Discovery',
    desc: 'A responsive movie discovery web application featuring trending, top-rated, and upcoming films. Implements seamless data fetching and caching strategies for optimal performance.',
    image: '/img/movies.png',
    href: 'https://movies-13.vercel.app/',
    stack: ['NextJS', 'React', 'Tailwind'],
  },
  {
    title: 'Pokeredux',
    desc: 'A robust Pokemon explorer application demonstrating complex state management. Utilizes Redux Toolkit for efficient data handling and RTK Query for caching API responses.',
    image: '/img/pokredux.png',
    href: 'https://pokredux.vercel.app/',
    stack: ['React', 'Redux', 'Tailwind'],
  },
];
