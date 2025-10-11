import { cn } from 'lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type MotionProps, motion } from 'framer-motion';
import { defaultVariants } from './motion-variants';

type AnimateProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  hasMotion?: boolean;
} & MotionProps;

export function Animate({
  children,
  className,
  asChild,
  hasMotion = true,
  ...props
}: AnimateProps) {
  const BaseComp = asChild ? Slot : 'div';
  const Comp = hasMotion ? motion.create(BaseComp) : BaseComp;
  return (
    <Comp
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={defaultVariants}
      className={cn('text-base font-normal leading-relaxed', className)}
    >
      {children}
    </Comp>
  );
}
