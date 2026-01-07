import React from 'react';
import Projects from './projects-card';
import { IconNextjs, IconSupabase, IconReact, IconRedux } from './icons';
import { projectsData, type ProjectData } from '../data/projects-data';

const renderStackBadge = (project: ProjectData) => {
  if (!project.stack || project.stack.length === 0) return null;

  const getIcon = (tech: string) => {
    switch (tech) {
      case 'NextJS':
        return <IconNextjs width='16px' height='16px' className='mr-1' />;
      case 'Supabase':
        return <IconSupabase width='16px' height='16px' className='mr-1' />;
      case 'React':
        return <IconReact width='16px' height='16px' className='mr-1' />;
      case 'Redux':
        return <IconRedux width='16px' height='16px' className='mr-1' />;
      default:
        return null;
    }
  };

  return (
    <span className='flex flex-wrap gap-2 mt-2'>
      {project.stack.map((tech, index) => (
        <span
          key={index}
          className='text-xs font-medium inline-flex items-center px-2.5 py-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
        >
          {getIcon(tech)}
          {tech}
        </span>
      ))}
    </span>
  );
};

const FeaturedProjects: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projectsData.map((project, index) => (
          <div key={index} className='flex'>
            <Projects
              title={project.title}
              desc={project.desc}
              image={project.image}
              href={project.href}
              stack={renderStackBadge(project)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
