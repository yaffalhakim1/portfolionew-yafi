import { Motion } from './anim/motion';

import { LocationCard } from './location-card';
import { TimeCard } from './time-card';

export default function FeaturedCards() {
  return (
    <Motion
      asChild
      animate='visible'
      variants={{
        visible: {
          transition: { delayChildren: 0.25, staggerChildren: 0.1 },
        },
      }}
    >
      <section className='flex flex-col gap-4 w-full md:w-1/3'>
        <TimeCard />
        <LocationCard />
      </section>
    </Motion>
  );
}
