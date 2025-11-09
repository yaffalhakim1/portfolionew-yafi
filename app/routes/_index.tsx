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

          <p className='leading-relaxed text-sm'>
            {' '}
            Fullstack Engineer from Indonesia, dedicated to crafting beautiful
            to <b>performance-optimized</b> web applications and websites.
          </p>
          <br />
          <p className='leading-relaxed text-sm'>
            {' '}
            With a strong foundation in both front-end and back-end development,
            specializing in creating seamless user experiences and robust server
            solutions. My passion lies in transforming ideas into reality
            through code, ensuring every project I undertake is not only
            functional but also visually appealing.
          </p>
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
