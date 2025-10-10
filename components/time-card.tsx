import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { defaultVariantsNoDelay } from './anim/motion-variants';

export function TimeCard() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={defaultVariantsNoDelay}
      whileHover={{ scale: 1.05 }}
      className='card-border relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white p-3 dark:bg-neutral-900 h-14'
    >
      <h2 className='text-xl font-medium text-neutral-700 dark:text-white'>
        {time?.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}
      </h2>
    </motion.div>
  );
}
