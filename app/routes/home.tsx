import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import { Animate } from '@/components/anim/text';
import FeaturedCards from '@/components/featured-cards';
import { GitHubCalendarWrapper } from '@/components/github-calendar';
import TypingAnimation from '@/components/rotate-text';
import { Heading } from '@/components/anim/heading';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
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
            I&apos;m a passionate Fullstack Engineer from Indonesia, dedicated
            to crafting beautiful web applications and websites.
          </p>
          <br />
          <p className='leading-relaxed text-sm'>
            I am now evolving from <b>Frontend Engineer</b> into{' '}
            <b>Full-Stack Developer</b>—melding my React/Next.js mastery with
            backend essentials like Node.js, REST APIs, and Infrastructure as
            Code. Learning end to end creating products helps me bridge UI
            finesse with server-side logic and make complete, reliable
            applications.
          </p>
        </Animate>
      </div>
      <div className='flex flex-col gap-4 md:flex-row md:items-start md:gap-6'>
        <FeaturedCards />
        <GitHubCalendarWrapper username='yaffalhakim1' />
      </div>
    </div>
  );
}
