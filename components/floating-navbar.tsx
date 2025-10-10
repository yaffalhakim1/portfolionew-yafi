import * as React from 'react';
import { type NavItem } from '@/components/header';
import { MobileNavigation } from '@/components/mobile-navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from 'lib/utils';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const pathname = useLocation();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        delay: 0.25,
        ease: 'backOut',
      }}
      className={cn(
        'fixed inset-x-4 top-5 z-[49] mx-auto flex max-w-4xl items-center justify-between rounded-full border border-neutral-950 border-opacity-[0.03] bg-neutral-50/75 px-8 py-3 filter backdrop-blur-sm dark:border-white/5 dark:bg-neutral-900/75',
        className
      )}
    >
      <div className='hidden md:flex'>
        {navItems.map((navItem, idx: number) => {
          const isActive = pathname.pathname === navItem.link;
          return (
            <Link
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                'relative flex h-8 items-center px-4 text-neutral-600 hover:text-[#00DC82] dark:text-neutral-50 dark:hover:text-[#00DC82]'
              )}
            >
              <span
                className={cn('hidden text-sm sm:block capitalize')}
                style={{
                  textShadow: isActive
                    ? '1px 1px 12px rgba(255,255,255,0.4)'
                    : '',
                }}
              >
                {navItem.name.toLowerCase()}
              </span>

              {isActive && (
                <>
                  <motion.span
                    transition={{
                      ease: 'backInOut',
                      duration: 0.45,
                    }}
                    layoutId='active-nav-glow'
                    className='absolute inset-x-0 top-0 mx-auto hidden h-16 w-10 rounded-full bg-[#00DC82]/50 blur-[32px] dark:bg-[#00DC82]/75 sm:flex'
                  />
                  <motion.span
                    transition={{
                      ease: 'backInOut',
                      duration: 0.35,
                    }}
                    layoutId='active-nav'
                    className='absolute inset-x-0 inset-y-0 z-[-1] hidden rounded-full bg-[#00DC82]/50 dark:bg-[#00DC82]/50 sm:flex'
                  />
                </>
              )}
            </Link>
          );
        })}
      </div>
      <div className='md:hidden'>
        <MobileNavigation navItems={navItems} />
      </div>

      <ThemeToggle />
    </motion.div>
  );
};
