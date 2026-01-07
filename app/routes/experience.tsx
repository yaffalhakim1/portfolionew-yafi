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

      <ol className='relative border-l border-gray-200 dark:border-gray-700 ml-3'>
        <li className='mb-10 ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              className='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend Engineer{' '}
            <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
              MySkill.id
            </span>
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            February 2024 - Present
          </time>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Core developer for a high-traffic education platform serving{' '}
            <b className='text-gray-900 dark:text-gray-100'>
              1.2M daily active users
            </b>
            .
          </p>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'>
            <li>
              Maintained frontend performance for a platform handling{' '}
              <b>10.4M+ monthly requests</b>, optimizing asset loading and Core
              Web Vitals.
            </li>
            <li>
              Implemented multi-language support (Next.js i18n), contributing to
              a{' '}
              <span className='text-green-600 font-semibold'>20% increase</span>{' '}
              in international user adoption.
            </li>
            <li>
              Developed B2B2C tools enabling Content Creators to sell products
              directly to consumers, driving new revenue streams.
            </li>
            <li>
              Redesigned core pages, reducing bounce rates and improving average
              session time on both mobile and desktop.
            </li>
            <li>
              Led end-to-end development cycles (planning to production) and
              mentored junior engineers to improve team velocity.
            </li>
          </ul>
        </li>

        <li className='mb-10 ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              className='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend Engineer Trainee - Sea Labs Indonesia
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            October 2023 - February 2024
          </time>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400 mb-2'>
            Selected as 1 of 32 participants from 2500+ applicants (~1.2%
            acceptance rate).
          </p>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'>
            <li>
              <b>Top Graduate in Frontend Stream</b>, recognized for excellence
              in ReactJS, NextJS, and Data Structures & Algorithms.
            </li>
            <li>
              Completed full-stack assignments in Go and TypeScript, building
              complex apps like 'Medium Lite' and a Healthcare Platform.
            </li>
            <li>
              Consistently achieved high scores in algorithm tests and peer code
              reviews.
            </li>
          </ul>
        </li>

        <li className='ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              aria-hidden='true'
              className='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
          <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            Frontend Engineer (Contract) - Diponegoro University
          </h3>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            December 2022 - April 2023
          </time>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400'>
            <li>
              Developed an internal document accreditation dashboard using
              NextJS and TypeScript.
            </li>
            <li>
              Collaborated with backend engineers to integrate complex APIs and
              Firebase authentication.
            </li>
            <li>
              Implemented comprehensive unit tests to ensure high reliability
              for critical university data.
            </li>
          </ul>
        </li>
      </ol>
    </Animate>
  );
}
