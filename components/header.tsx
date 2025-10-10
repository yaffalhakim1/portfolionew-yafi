import { FloatingNav } from '@/components/floating-navbar';
import type { JSX } from 'react';

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Work', link: '/experience' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blog', link: '/blog' },
];

export function Header() {
  return (
    <header className='flex'>
      <FloatingNav navItems={navItems} />
    </header>
  );
}
