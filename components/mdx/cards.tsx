import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import React from 'react';

// Card Component
interface CardProps {
  title: string;
  icon?: React.ReactNode;
  arrow?: boolean;
  href: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  icon,
  arrow = false,
  href,
  children,
}: CardProps) {
  const isExternal = href.startsWith('http');

  const content = (
    <div className='group flex flex-col justify-start overflow-hidden rounded-xl border border-gray-200 bg-transparent py-4 px-6 text-current dark:border-neutral-800 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 dark:hover:border-blue-500 dark:hover:shadow-blue-500/10 dark:hover:bg-neutral-900'>
      <div className='flex flex-row items-center gap-3'>
        {icon && (
          <span className='flex h-6 w-6 items-center justify-center text-gray-500 transition-colors group-hover:text-blue-500 dark:text-neutral-400'>
            {icon}
          </span>
        )}
        <div className='flex flex-col'>
          <span className='font-semibold tracking-tight text-neutral-900 dark:text-white'>
            {title}
            {arrow && (
              <span className='ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1'>
                →
              </span>
            )}
          </span>
          {children && (
            <span className='mt-1 text-sm text-gray-500 dark:text-gray-400 font-normal'>
              {children}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='block no-underline'
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className='block no-underline'>
      {content}
    </Link>
  );
}

// Cards Container Component
interface CardsProps {
  children: React.ReactNode;
  num?: number;
}

export function Cards({ children, num = 3 }: CardsProps) {
  return (
    <div
      className={cn(
        'mt-8 grid gap-4',
        'grid-cols-1', // Mobile default
        num === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {children}
    </div>
  );
}
