import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

interface TabsProps {
  children: React.ReactNode;
}

interface TabItemProps {
  label: string;
  children: React.ReactNode;
}

const MdxTabs = ({ children }: TabsProps) => {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<TabItemProps>[];
  const defaultValue = childrenArray[0]?.props.label || '';

  return (
    <Tabs defaultValue={defaultValue} className='my-6 w-full'>
      <TabsList className='w-full justify-start rounded-none border-b bg-transparent p-0'>
        {childrenArray.map((child) => (
          <TabsTrigger
            key={child.props.label}
            value={child.props.label}
            className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
          >
            {child.props.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {childrenArray.map((child) => (
        <TabsContent
          key={child.props.label}
          value={child.props.label}
          className='mt-0 rounded-md border p-4 bg-muted/50'
        >
          {child.props.children}
        </TabsContent>
      ))}
    </Tabs>
  );
};

MdxTabs.Item = ({ children }: TabItemProps) => {
  return <>{children}</>;
};

export default MdxTabs;
