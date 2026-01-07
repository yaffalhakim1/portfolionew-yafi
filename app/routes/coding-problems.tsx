import { Animate } from '@/components/anim/text';
import {
  codingProblemsData,
  getDifficultyColor,
} from '../../data/coding-problems-data';
import { generateMeta } from '../metaConfig';
import { Link } from 'react-router';

export function meta() {
  return generateMeta(
    'Coding Problems',
    'Explore interactive coding problems with visualizations and step-by-step solutions.'
  );
}

export default function CodingProblemsPage() {
  return (
    <Animate>
      <h2 className='font-bold text-[36px]'>Coding Problems</h2>
      <p className='mt-3'>
        Interactive coding problems with visualizations, solutions, and detailed
        explanations. Learn algorithms step by step!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {codingProblemsData.map((problem, index) => (
          <Link
            key={index}
            to={`/coding-problems/${problem.slug}`}
            className='block group'
          >
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400'>
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {problem.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </span>
              </div>

              <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                {problem.description}
              </p>

              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded'>
                  {problem.category}
                </span>
                <span className='text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300'>
                  View Solution →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {codingProblemsData.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>
            No coding problems available yet. Check back soon!
          </p>
        </div>
      )}
    </Animate>
  );
}
