import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  File,
  Folder as FolderIcon,
  FolderOpen,
  FileCode,
  FileJson,
  FileImage,
} from 'lucide-react';

const Ctx = createContext<number>(0);

interface FolderProps {
  name: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

interface FileProps {
  name: string;
  icon?: React.ReactNode;
}

function useIndent() {
  return useContext(Ctx);
}

export function Folder({ name, defaultOpen = false, children }: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const indent = useIndent();

  return (
    <li className='flex flex-col select-none'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex cursor-pointer items-center gap-1.5 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
        style={{ paddingLeft: `${indent * 1.2}rem` }}
      >
        {isOpen ? (
          <FolderOpen className='h-4 w-4 text-blue-500' />
        ) : (
          <FolderIcon className='h-4 w-4 text-blue-500' />
        )}
        <span>{name}</span>
      </div>
      {isOpen && (
        <ul className='m-0 list-none p-0'>
          <Ctx.Provider value={indent + 1}>{children}</Ctx.Provider>
        </ul>
      )}
    </li>
  );
}

export function FileItem({ name, icon }: FileProps) {
  const indent = useIndent();

  const getIcon = (fileName: string) => {
    if (icon) return icon;
    if (fileName.endsWith('.json'))
      return <FileJson className='h-4 w-4 text-yellow-500' />;
    if (
      fileName.endsWith('.tsx') ||
      fileName.endsWith('.ts') ||
      fileName.endsWith('.js') ||
      fileName.endsWith('.jsx')
    )
      return <FileCode className='h-4 w-4 text-blue-400' />;
    if (
      fileName.endsWith('.png') ||
      fileName.endsWith('.jpg') ||
      fileName.endsWith('.svg')
    )
      return <FileImage className='h-4 w-4 text-purple-400' />;
    return <File className='h-4 w-4 text-gray-400' />;
  };

  return (
    <li
      className='flex items-center gap-1.5 py-1 text-sm text-gray-600 dark:text-gray-300 transition-colors'
      style={{ paddingLeft: `${indent * 1.2}rem` }}
    >
      {getIcon(name)}
      <span>{name}</span>
    </li>
  );
}

export function FileTree({ children }: { children: React.ReactNode }) {
  return (
    <div className='mt-6 mb-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-950 p-4 font-mono text-sm shadow-sm'>
      <ul className='m-0 list-none p-0'>
        <Ctx.Provider value={0}>{children}</Ctx.Provider>
      </ul>
    </div>
  );
}
