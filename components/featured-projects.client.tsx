'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Projects from './projects-card';
import { IconNextjs, IconSupabase } from './icons';
import { projectsData, type ProjectData } from '../data/projects-data';

const FeaturedProjectsClient: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStackBadge = (project: ProjectData) => {
    if (!project.stack || project.stack.length === 0) return null;

    const getIcon = (tech: string) => {
      switch (tech) {
        case 'NextJS':
          return <IconNextjs width='16px' height='16px' className='mr-1' />;
        case 'Supabase':
          return <IconSupabase width='16px' height='16px' className='mr-1' />;
        default:
          return null;
      }
    };

    return (
      <span className='text-xs font-medium inline-flex items-center px-2.5 py-1 rounded mr-2 border border-gray-500'>
        {project.stack.map((tech, index) => (
          <React.Fragment key={index}>{getIcon(tech)}</React.Fragment>
        ))}
      </span>
    );
  };

  return (
    <div className='w-full' style={{ minHeight: 0, minWidth: 0 }}>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index} className='px-2'>
            <Projects
              title={project.title}
              desc={project.desc}
              image={project.image}
              href={project.href}
              stack={renderStackBadge(project)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProjectsClient;
