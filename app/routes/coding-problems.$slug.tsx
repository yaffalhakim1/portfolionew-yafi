import { Animate } from '@/components/anim/text';
import {
  getProblemBySlug,
  getDifficultyColor,
} from '../../data/coding-problems-data';
import { CodeDisplay } from '@/components/coding-problems/code-display';
import HanoiVisualizer from '@/components/coding-problems/tower-of-hanoi';
import { generateMeta } from '../metaConfig';
import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function meta({ params }: { params: { slug: string } }) {
  const problem = getProblemBySlug(params.slug);
  if (!problem) {
    return generateMeta(
      'Problem Not Found',
      'The coding problem you are looking for does not exist.'
    );
  }

  return generateMeta(
    `${problem.title} - Solution`,
    `${problem.description} View interactive solution and explanation.`
  );
}

export default function CodingProblemDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const problem = getProblemBySlug(slug || '');

  if (!problem) {
    return (
      <Animate>
        <div className='text-center py-12'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Problem Not Found
          </h1>
          <p className='text-gray-600 mb-8'>
            The coding problem you are looking for does not exist.
          </p>
          <Link
            to='/coding-problems'
            className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Coding Problems
          </Link>
        </div>
      </Animate>
    );
  }

  return (
    <Animate>
      {/* Back Navigation */}
      <div className='mb-6'>
        <Link
          to='/coding-problems'
          className='inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to Coding Problems
        </Link>
      </div>

      {/* Problem Header */}
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700'>
        <div className='flex items-start justify-between mb-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
              {problem.title}
            </h1>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              {problem.description}
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                problem.difficulty
              )}`}
            >
              {problem.difficulty}
            </span>
            <span className='text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded text-center'>
              {problem.category}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Visualization */}
      {problem.slug === 'tower-of-hanoi' && (
        <div className='mb-12'>
          <div className='hidden lg:block'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Interactive Visualization
            </h2>
            <HanoiVisualizer />
          </div>
          <div className='lg:hidden'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Visual Representation
            </h2>
            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6'>
              <p className='text-blue-800 dark:text-blue-200 mb-4'>
                <strong>Note:</strong> The interactive visualization is
                available on desktop. On mobile, you can still study algorithm
                and explanation below.
              </p>
              <p className='text-blue-700 dark:text-blue-300'>
                The Tower of Hanoi visualization shows three rods (A, B, C) with
                disks of different sizes. The goal is to move all disks from Rod
                A to Rod C, following these rules:
              </p>
              <ul className='list-disc list-inside mt-3 space-y-2 text-blue-700 dark:text-blue-300'>
                <li>Only one disk can be moved at a time</li>
                <li>
                  A disk can only be placed on top of a larger disk or on an
                  empty rod
                </li>
                <li>Each move must involve the top disk from one rod</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Solution Section */}
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
          Solution
        </h2>

        {problem.solution.explanation && (
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3'>
              Explanation
            </h3>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              {problem.solution.explanation}
            </p>
          </div>
        )}

        <div className='mb-6'>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3'>
            Algorithm Implementation
          </h3>
          <CodeDisplay
            code={problem.solution.code}
            language={problem.solution.language}
            title={`${problem.solution.language} Solution`}
          />
        </div>
      </div>

      {/* Additional Resources */}
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
          Key Concepts
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500'>
            <h3 className='font-semibold text-blue-900 dark:text-blue-200 mb-2'>
              Recursion
            </h3>
            <p className='text-blue-800 dark:text-blue-300 text-sm'>
              The problem demonstrates how complex problems can be broken down
              into smaller, similar subproblems.
            </p>
          </div>
          <div className='bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500'>
            <h3 className='font-semibold text-green-900 dark:text-green-200 mb-2'>
              Base Case
            </h3>
            <p className='text-green-800 dark:text-green-300 text-sm'>
              The solution stops when we reach the simplest case of moving just
              one disk.
            </p>
          </div>
          <div className='bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500'>
            <h3 className='font-semibold text-yellow-900 dark:text-yellow-200 mb-2'>
              Time Complexity
            </h3>
            <p className='text-yellow-800 dark:text-yellow-300 text-sm'>
              O(2^n) - Each additional disk doubles the number of moves
              required.
            </p>
          </div>
          <div className='bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500'>
            <h3 className='font-semibold text-purple-900 dark:text-purple-200 mb-2'>
              Space Complexity
            </h3>
            <p className='text-purple-800 dark:text-purple-300 text-sm'>
              O(n) - Due to the recursion stack depth.
            </p>
          </div>
        </div>
      </div>
    </Animate>
  );
}
