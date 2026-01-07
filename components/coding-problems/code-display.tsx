import { useState } from 'react';
import { useThemeValue } from '@/components/theme-provider';

interface CodeDisplayProps {
  code: string;
  language: string;
  title?: string;
}

export function CodeDisplay({ code, language, title }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);
  const { theme } = useThemeValue();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='relative'>
      {title && (
        <h4 className='font-semibold mb-2 text-gray-900 dark:text-white'>
          {title}
        </h4>
      )}
      <div className='relative bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
        <button
          onClick={copyToClipboard}
          className='absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 dark:bg-gray-600 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors z-10'
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className='p-4 overflow-x-auto text-sm text-gray-100 dark:text-gray-100'>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
