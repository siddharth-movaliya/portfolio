import { cn } from '@/lib/utils';
import React from 'react';
import { Bodoni_Moda } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const RotatingLink = ({
  text,
  className,
  href,
  target,
}: {
  text: string;
  className: string;
  href: string;
  target?: string;
}) => {
  return (
    <a
      className={cn(
        'group pointer-events-auto transition-all duration-1000 ease-in-out [perspective:1000px]',
        className
      )}
      href={href}
      target={target}
    >
      <div className={cn('nav-link-unrotated', bodoni.className)}>{text}</div>
      <div className="nav-link-rotated">{text}</div>
    </a>
  );
};

export default RotatingLink;
