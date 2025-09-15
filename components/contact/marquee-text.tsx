'use client';
import React from 'react';
import { Bodoni_Moda } from 'next/font/google';
import { cn } from '@/lib/utils';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const MarqueeText = () => {
  return (
    <div className="animate-marquee flex w-max gap-20 whitespace-nowrap">
      <MarqueeContent bodoni={bodoni.className} />
      <MarqueeContent bodoni={bodoni.className} />
      <MarqueeContent bodoni={bodoni.className} />
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

const MarqueeContent = ({ bodoni }: { bodoni: string }) => (
  <>
    <h1 className="xs:my-20 my-6 text-8xl font-light uppercase min-[769px]:max-xl:my-12! sm:my-22 md:my-12 md:text-9xl xl:my-0 2xl:text-[168px] 2xl:leading-[252px] landscape:sm:max-md:my-6">
      Contact
    </h1>
    <h1
      className={cn(
        'xs:my-20 my-6 text-8xl font-light uppercase italic min-[769px]:max-xl:my-12! sm:my-22 md:my-12 md:text-9xl xl:my-0 2xl:text-[168px] 2xl:leading-[252px] landscape:sm:max-md:my-6',
        bodoni
      )}
    >
      Contact
    </h1>
    <h1 className="xs:my-20 my-6 text-8xl font-light uppercase min-[769px]:max-xl:my-12! sm:my-22 md:my-12 md:text-9xl xl:my-0 2xl:text-[168px] 2xl:leading-[252px] landscape:sm:max-md:my-6">
      Contact
    </h1>
    <h1
      className={cn(
        'xs:my-20 my-6 text-8xl font-light uppercase italic min-[769px]:max-xl:my-12! sm:my-22 md:my-12 md:text-9xl xl:my-0 2xl:text-[168px] 2xl:leading-[252px] landscape:sm:max-md:my-6',
        bodoni
      )}
    >
      Contact
    </h1>
  </>
);

export default MarqueeText;
