import { Animate } from '@/components/anim/text';
import Badge from '@/components/badge';
import { IconNextjs, IconSupabase } from '@/components/icons';
import Projects from '@/components/projects-card';
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
        <Projects
          title={'Sumz'}
          desc={'Sumz is a website to summarize article with AI'}
          image={'/img/sumz.png'}
          href='https://summarizer-drab.vercel.app/'
          stack={
            <Badge
              logo1={<IconNextjs width='16px' height='16px' className='mr-1' />}
            />
          }
        />
        <Projects
          title={'Chill Out'}
          desc={'Chill Out is a web makes you study with relax.'}
          image={'/img/chill.png'}
          href='https://chill-out.vercel.app/'
          stack={
            <Badge
              logo1={<IconNextjs width='16px' height='16px' className='mr-1' />}
            />
          }
        />
        <Projects
          title={'Anonymous Message'}
          desc={'Send anonymous message to you.'}
          image={'/img/anonym.png'}
          href='https://anonymous-website-message.vercel.app/'
          stack={
            <Badge
              logo1={<IconNextjs width='16px' height='16px' className='mr-1' />}
              logo2={
                <IconSupabase width='16px' height='16px' className='mr-1' />
              }
            />
          }
        />
        <Projects
          title={'Movies'}
          desc={'Simple movies web using NextJS'}
          image={'/img/movies.png'}
          href='https://movies-13.vercel.app/'
          stack={
            <Badge
              logo1={<IconNextjs width='16px' height='16px' className='mr-1' />}
            />
          }
        />
        <Projects
          title={'Simple E-commerce'}
          desc={'Simple e-commerce using NextJS and RSC'}
          image={'/img/ecommerce.png'}
          href='https://simple-ecommerce-appdir.vercel.app/'
        />
        <Projects
          title={'Pokeredux'}
          desc={'Data fetching with redux toolkit.'}
          image={'/img/pokredux.png'}
          href='https://pokredux.vercel.app/'
        />
        <Projects
          title={'Todo List'}
          desc={'This is a todo list that I made using Supabase.'}
          href='https://todo-supabasev2.vercel.app/'
          image={'/img/todos.png'}
        />

        <Projects
          title={'Blog Design'}
          desc={'Practicing slicing a design using Tailwind CSS.'}
          href='https://slicing-next1.vercel.app/'
          image={'/img/slicing1.png'}
        />
        <Projects
          title={'CodeDesign'}
          desc={'Slicing from design to web from codedesign.dev.'}
          href='https://slicing-all.vercel.app/'
          image={'/img/codesign.png'}
        />
      </div>
    </Animate>
  );
}
