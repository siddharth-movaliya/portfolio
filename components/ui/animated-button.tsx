import React, { ReactNode, ElementType } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  className?: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
  children: ReactNode;
}

const AnimatedButton = ({
  className,
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
}: AnimatedButtonProps) => {
  return (
    <Button
      size="lg"
      className={cn(
        'dark group hover:bg-foreground relative items-center overflow-hidden rounded-full hover:cursor-pointer',
        className
      )}
    >
      {IconLeft && (
        <IconLeft className="absolute left-0 translate-x-3 transition-all group-hover:-translate-x-full group-hover:opacity-100" />
      )}
      {children}
      {IconRight && (
        <IconRight className="absolute right-0 translate-x-full transition-all group-hover:-translate-x-3 group-hover:opacity-100" />
      )}
    </Button>
  );
};

export default AnimatedButton;
