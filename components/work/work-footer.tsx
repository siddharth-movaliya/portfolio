'use client';
import { cn } from '@/lib/utils';
import { Bodoni_Moda } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const WorkFooter = () => {
  const dotsContainerRef = useRef<HTMLDivElement>(null);
  const makeAllRef = useRef<HTMLDivElement>(null);
  const comeTrueRef = useRef<HTMLDivElement>(null);
  const roundedWrapRef = useRef<HTMLDivElement>(null);

  const [rotations, setRotations] = useState<number[]>(Array(10).fill(0)); // one rotation state per dot

  // Scroll → parallax translate
  useEffect(() => {
    const handleScroll = () => {
      if (dotsContainerRef.current) {
        const parentRect = dotsContainerRef.current.getBoundingClientRect();
        const relativeScrollY = -parentRect.top;

        // circles
        dotsContainerRef.current.style.transform = `translateX(${relativeScrollY * 0.45}px)`;

        // "Make All" (opposite direction)
        if (makeAllRef.current) {
          makeAllRef.current.style.transform = `translateX(${relativeScrollY * -0.45}px)`;
        }

        // "Come True" (same as circles)
        if (comeTrueRef.current) {
          comeTrueRef.current.style.transform = `translateX(${relativeScrollY * 0.45}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll → parallax rounded div
  useEffect(() => {
    const handleScroll = () => {
      if (roundedWrapRef.current) {
        const rect = roundedWrapRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // progress = how far it's scrolled up (0 = bottom of screen, 1 = top)
        const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));

        // interpolate between 56px (h-14) and 0
        const newHeight = (1 - progress) * 56;
        roundedWrapRef.current.style.height = `${newHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle per-dot click spin
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;

    const spins = (Math.floor(Math.random() * 2) + 4) * 360; // 5–8 full rotations

    setRotations((prev) =>
      prev.map((val, i) =>
        i === index
          ? clickY < rect.height / 2
            ? val + spins
            : val - spins
          : val
      )
    );
  };

  const dots = [
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
    'bg-background h-52 w-76 rounded-full',
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
    'dark bg-border size-52 rounded-full',
  ];

  return (
    <>
      {/* Circles */}
      <div
        ref={dotsContainerRef}
        className="dots-container mt-16 w-[200%] will-change-transform"
      >
        <div className="flex -translate-x-24 gap-5">
          {dots.map((cls, i) => (
            <div
              key={i}
              onClick={(e) => handleClick(e, i)}
              className={cn(cls, 'cursor-pointer')}
              style={{
                transform: `rotateX(${rotations[i]}deg)`,
                transition: 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="m-16 text-[200px] leading-none font-light uppercase">
        <div ref={makeAllRef} className="text-right will-change-transform">
          <span className={cn('italic', bodoni.className)}>Make</span>
          <span className="mx-32">All</span>
        </div>
        <div className="text-center">Your Dreams</div>
        <div
          ref={comeTrueRef}
          className={cn(
            'relative mx-24 w-fit italic will-change-transform',
            bodoni.className
          )}
        >
          <span className='after:absolute after:top-0 after:right-0 after:size-10 after:translate-x-2/1 after:bg-[url("/asterisk.svg")] after:bg-contain after:bg-no-repeat'>
            Come True
          </span>
        </div>
      </div>
      <p className="relative mx-48 w-[25vw] max-w-70 font-bold">
        As long as your dreams revolve around something like; being the proud
        owner of a spectacular website.
        <span
          className="absolute top-0 -left-5 inline-block size-3 bg-[url('/asterisk.svg')] bg-contain bg-no-repeat"
          aria-hidden="true"
        ></span>
      </p>
      <div
        className="absolute bottom-0 left-0 h-14 w-full"
        ref={roundedWrapRef}
      >
        <div className="bg-foreground absolute right-1/2 bottom-0 -z-1 h-[750%] w-[150%] translate-x-1/2 translate-y-[14%] rotate-y-10 rounded-[50%] shadow-2xl/75"></div>
      </div>
    </>
  );
};

export default WorkFooter;
