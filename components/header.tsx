import { FloatingNav } from '@/components/floating-navbar';
import type { JSX } from 'react';

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  external?: boolean;
};

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Experience', link: '/experience' },
  { name: 'Projects', link: '/projects' },
  { name: 'Coding Problems', link: '/coding-problems' },
];

export function Header() {
  return (
    <header className='flex'>
      <FloatingNav navItems={navItems} />
    </header>
  );
}
