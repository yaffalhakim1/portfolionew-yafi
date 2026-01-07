import { useState } from 'react';
import type { NavItem } from '@/components/header';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

type MobileNavigationProps = {
  navItems: NavItem[];
};

export function MobileNavigation({ navItems }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className='m-0' aria-label='Menu'>
        <Button variant={'ghost'} size={'icon'}>
          <Menu className='size-[1.2rem]' />
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent
            align='start'
            className='flex w-screen max-w-[calc(100vw_-_6rem)] flex-col gap-y-4 rounded-xl p-4 py-6 md:hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800'
            asChild
            forceMount
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  key={`mobile-nav-item-${idx}`}
                >
                  <DropdownMenuItem
                    asChild
                    key={`mobile-link=${idx}`}
                    className={cn(
                      'relative flex items-center space-x-1 px-4 py-2 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
                    )}
                  >
                    {item.external ? (
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={() => setIsOpen(false)}
                      >
                        <span className=''>{item.icon}</span>
                        <span className='text-xl'>
                          <span className='mr-px text-neutral-400'>/</span>
                          {item.name.toLowerCase()}
                        </span>
                      </a>
                    ) : (
                      <Link to={item.link} onClick={() => setIsOpen(false)}>
                        <span className=''>{item.icon}</span>
                        <span className='text-xl'>
                          <span className='mr-px text-neutral-400'>/</span>
                          {item.name.toLowerCase()}
                        </span>
                      </Link>
                    )}
                  </DropdownMenuItem>
                </motion.div>
              ))}
            </motion.nav>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
}
