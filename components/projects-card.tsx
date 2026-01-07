import React from 'react';

interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  href: string;
  stack?: React.ReactNode;
}

const Projects = (props: ProjectProps) => {
  return (
    <>
      <a href={props.href}>
        <div className='flex flex-col w-full rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full'>
          <div className='relative w-full aspect-video overflow-hidden'>
            <img
              src={props.image}
              className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
              alt={props.title}
              loading='lazy'
            />
          </div>
          <div className='p-4 flex flex-col flex-grow gap-2'>
            <div className='text-lg font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-amber-500 transition-colors'>
              {props.title}
            </div>

            <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow leading-relaxed'>
              {props.desc}
            </p>

            {props.stack && <div className='mt-auto pt-2'>{props.stack}</div>}
          </div>
        </div>
      </a>
    </>
  );
};

export default Projects;
