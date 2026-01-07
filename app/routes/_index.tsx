import { Animate } from '@/components/anim/text';
import FeaturedCards from '@/components/featured-cards';
import { GitHubCalendarWrapper } from '@/components/github-calendar';
import TypingAnimation from '@/components/rotate-text';
import { Heading } from '@/components/anim/heading';
import FeaturedProjects from '@/components/featured-projects';
import type { Route } from './+types/_index';
import { generateMeta } from '../metaConfig';

export function meta({}: Route.MetaArgs) {
  return generateMeta(
    'Home',
    'Fullstack Engineer specializing in performance-optimized web applications, front-end and back-end development.'
  );
}

export default function Home() {
  return (
    <div className='flex flex-col space-y-9 min-h-[50dvh]'>
      <div className='flex flex-col space-y-3'>
        <Heading className='mt-3 text-3xl font-bold  md:mt-0 mb-5'>
          Hi, I&apos;m Yafi 😎
        </Heading>

        <Animate>
          <TypingAnimation
            className='text-2xl font-bold text-[#00DC82]'
            text='Fullstack Engineer'
          />

          <div className='mt-5 max-w-2xl'>
            <p className='leading-relaxed text-sm text-gray-600 dark:text-gray-300'>
              Software Engineer specializing in <b>React Ecosystem</b> and{' '}
              <b>High-Performance Web Architecture</b>.
            </p>
            <br />
            <p className='leading-relaxed text-sm text-gray-600 dark:text-gray-300'>
              Currently engineering the frontend for a massive education
              platform serving <b>1.2M+ daily active users</b>. I don&apos;t
              just build features—I solve complex scaling challenges, optimize
              Core Web Vitals, and refactor accrued technical debt into robust,
              maintainable systems. My expertise bridges the gap between
              pixel-perfect design and backend efficiency, ensuring that
              applications are not only beautiful but brutally fast.
            </p>
          </div>
        </Animate>
      </div>
      <div className='flex flex-col gap-4 md:flex-row md:items-start md:gap-6'>
        <FeaturedCards />
        <GitHubCalendarWrapper username='yaffalhakim1' />
      </div>

      <Animate>
        <div className='flex flex-col space-y-4'>
          <p className='text-sm text-white-600'>
            Here are some of my recent projects. Click to explore the live
            demos.
          </p>
          <FeaturedProjects />
        </div>
      </Animate>
    </div>
  );
}
