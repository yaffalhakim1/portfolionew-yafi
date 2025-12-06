import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}

interface CardsProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  icon,
  children,
  className,
}: CardProps) {
  return (
    <div className={cn('border rounded-lg p-4 bg-card', className)}>
      {title && (
        <div className='flex items-center gap-2 mb-3'>
          {icon && <span className='text-2xl'>{icon}</span>}
          <h3 className='font-semibold'>{title}</h3>
        </div>
      )}
      {description && (
        <div className='text-sm text-muted-foreground'>{description}</div>
      )}
      {children && (
        <div className='text-sm text-muted-foreground'>{children}</div>
      )}
    </div>
  );
}

export function Cards({ children, className }: CardsProps) {
  return (
    <div className={cn('grid gap-4 md:grid-cols-2 lg:grid-cols-3', className)}>
      {children}
    </div>
  );
}
