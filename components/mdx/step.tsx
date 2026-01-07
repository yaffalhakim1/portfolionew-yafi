import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const Step = ({ number, title, children }: StepProps) => {
  return (
    <div className='step flex flex-col space-y-4 border-l pl-8 relative ml-2 my-8 border-gray-200 dark:border-gray-800'>
      <div className='absolute -left-4 top-0 bg-white dark:bg-zinc-950 flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 font-bold text-sm'>
        {number}
      </div>
      <h3 className='font-bold text-xl m-0 tracking-tight'>{title}</h3>
      <div className='mt-2'>{children}</div>
    </div>
  );
};

export default Step;
