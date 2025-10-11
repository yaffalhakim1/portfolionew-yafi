import { Animate } from '@/components/anim/text';
import type { Route } from './+types/experience';
import { generateMeta } from '../metaConfig';

export function meta({}: Route.MetaArgs) {
  return generateMeta(
    'Work Experience',
    'My professional journey as a Fullstack Engineer, including my experience at MySkill.id, Sea Labs Indonesia, and Diponegoro University.'
  );
}
export default function ExperiencePage() {
  return (
    <Animate>
      <h2 className='font-bold text-[36px]'>Experience</h2>

      <ol className='relative border-l border-gray-200 dark:border-gray-700'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            February 2024 - Present
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend Engineer - MySkill.id
          </h3>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            October 2023 - February 2024
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend Engineer Trainee - Sea Labs Indonesia
          </h3>
        </li>
        <li className='ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            December 2022 - April 2023
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend Engineer - Diponegoro University
          </h3>
        </li>
      </ol>
    </Animate>
  );
}
