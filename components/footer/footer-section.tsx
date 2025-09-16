import React from 'react';
import { Bodoni_Moda } from 'next/font/google';
import { cn } from '@/lib/utils';
import CalEmbed from './cal-embed';
import FooterBento from './footer-bento';
import FooterName from './footer-name';
import BookACallButton from '../ui/animated-button';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const FooterSection = () => {
  return (
    <div className="bg-foreground text-background mt-4 w-full rounded-t-[64px] pt-12 md:mt-16 xl:pt-16 2xl:pt-24">
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col justify-center px-8 md:flex-row md:px-12">
          <div className="m-6 text-4xl md:text-5xl xl:w-4/5 xl:text-7xl 2xl:w-5/7 2xl:text-8xl">
            Have an{' '}
            <span className={cn('italic', bodoni.className)}>MVP Idea</span>?
            <br />
            <p className="text-base 2xl:text-lg">
              Let&rsquo;s take your product from vision to launch-ready.
            </p>
          </div>
          <div className="mx-6 grid grid-cols-2 md:hidden">
            <BookACallButton />
          </div>
        </div>
        <div className="hidden min-w-[772px] scale-90 justify-center md:flex lg:mx-24 lg:min-h-[570px] lg:scale-100 xl:mx-0">
          <CalEmbed />
        </div>
        <FooterBento />
      </div>
      <FooterName />
    </div>
  );
};

export default FooterSection;
