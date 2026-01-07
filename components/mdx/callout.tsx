import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, AlertTriangle, XCircle, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type?: 'default' | 'warning' | 'danger' | 'info' | 'tip';
  title?: string;
  children?: React.ReactNode;
}

const Callout = ({ type = 'default', title, children }: CalloutProps) => {
  const getIcon = () => {
    switch (type) {
      case 'danger':
        return <XCircle className='h-4 w-4' />;
      case 'warning':
        return <AlertTriangle className='h-4 w-4' />;
      case 'info':
        return <Info className='h-4 w-4' />;
      case 'tip':
        return <Lightbulb className='h-4 w-4' />;
      case 'default':
      default:
        return <Info className='h-4 w-4' />; // Default icon
    }
  };

  const getVariant = () => {
    switch (type) {
      case 'danger':
        return 'destructive';
      default:
        return 'default';
    }
  };

  // Custom styling for types not supported natively by Shadcn default/destructive
  const getCustomClass = () => {
    switch (type) {
      case 'warning':
        return 'border-yellow-500/50 text-yellow-900 dark:border-yellow-500 [&>svg]:text-yellow-900 dark:text-yellow-400 dark:[&>svg]:text-yellow-400';
      case 'info':
        return 'border-blue-500/50 text-blue-900 dark:border-blue-500 [&>svg]:text-blue-900 dark:text-blue-400 dark:[&>svg]:text-blue-400';
      case 'tip':
        return 'border-green-500/50 text-green-900 dark:border-green-500 [&>svg]:text-green-900 dark:text-green-400 dark:[&>svg]:text-green-400';
      default:
        return '';
    }
  };

  return (
    <Alert variant={getVariant()} className={`my-6 ${getCustomClass()}`}>
      {getIcon()}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default Callout;
