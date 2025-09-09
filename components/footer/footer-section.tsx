import React from 'react';
import { Bodoni_Moda } from 'next/font/google';
import { cn } from '@/lib/utils';
import CalEmbed from './cal-embed';
import FooterBento from './footer-bento';
import FooterName from './footer-name';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const FooterSection = () => {
  return (
    <div className="bg-foreground text-background mt-16 w-full rounded-t-[64px] pt-12">
      <div className="flex flex-col justify-between gap-4">
        <div className="flex justify-center px-12">
          <div className="m-6 w-5/7 text-8xl">
            Have an{' '}
            <span className={cn('italic', bodoni.className)}>MVP Idea</span>?
            <br />
            <p className="text-lg">
              Let&rsquo;s take your product from vision to launch-ready.
            </p>
          </div>
        </div>
        <div className="min-h-[570px]">
          <CalEmbed />
        </div>
        <FooterBento />
      </div>
      <FooterName />
    </div>
  );
};

export default FooterSection;
