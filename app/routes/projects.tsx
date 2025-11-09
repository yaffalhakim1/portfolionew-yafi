import { Animate } from '@/components/anim/text';
import Projects from '@/components/projects-card';
import Badge from '@/components/badge';
import { IconNextjs, IconSupabase } from '@/components/icons';
import { projectsData } from '../../data/projects-data';
import type { Route } from './+types/projects';
import { generateMeta } from '../metaConfig';

export function meta({}: Route.MetaArgs) {
  return generateMeta(
    'Projects',
    'Explore my portfolio of web development projects including NextJS applications, React websites, and more.'
  );
}

export default function ProjectPage() {
  return (
    <Animate>
      <h2 className='font-bold text-[36px]'>Projects</h2>
      <p className='mt-3'>
        Here are some of my projects. I&apos;m currently working on a few
        projects that I can&apos;t wait to share with you.
      </p>
      <div className='grid grid-cols-2 gap-4 mt-5'>
        {projectsData.map((project, index) => {
          const getIcon = (tech: string) => {
            switch (tech) {
              case 'NextJS':
                return (
                  <IconNextjs width='16px' height='16px' className='mr-1' />
                );
              case 'Supabase':
                return (
                  <IconSupabase width='16px' height='16px' className='mr-1' />
                );
              default:
                return null;
            }
          };

          const renderStackBadge = () => {
            if (!project.stack || project.stack.length === 0) return null;

            return (
              <Badge
                logo1={project.stack[0] ? getIcon(project.stack[0]) : undefined}
                logo2={project.stack[1] ? getIcon(project.stack[1]) : undefined}
              />
            );
          };

          return (
            <Projects
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              href={project.href}
              stack={renderStackBadge()}
            />
          );
        })}
      </div>
    </Animate>
  );
}
