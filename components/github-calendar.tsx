import { motion } from 'framer-motion';
import { defaultVariants } from '@/components/anim/motion-variants';
import { cn } from 'lib/utils';
import { lazy, Suspense } from 'react';

// Lazy load the calendar component
const GitHubCalendar = lazy(() => import('react-github-calendar'));

interface GitHubCalendarWrapperProps {
  username: string;
  className?: string;
}

export function GitHubCalendarWrapper({
  username,
  className,
}: GitHubCalendarWrapperProps) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={defaultVariants}
      className={cn('flex flex-col space-y-4 w-full md:w-2/3', className)}
    >
      <h4 className='text-lg font-semibold'>GitHub Activity</h4>

      <div className='card-border relative overflow-hidden rounded-xl border bg-white dark:bg-neutral-900'>
        <div className='p-4 w-full overflow-x-auto'>
          <Suspense
            fallback={
              <div className='flex items-center justify-center h-32 bg-muted/50 rounded-lg animate-pulse'>
                <div className='text-sm text-muted-foreground'>
                  Loading GitHub activity...
                </div>
              </div>
            }
          >
            <GitHubCalendar
              username={username}
              colorScheme='dark'
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              blockSize={10}
              blockMargin={3}
              fontSize={12}
              hideColorLegend={true}
              hideMonthLabels={false}
              hideTotalCount={false}
              showWeekdayLabels={true}
              labels={{
                totalCount: '{{count}} contributions in {{year}}',
              }}
            />
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
}
