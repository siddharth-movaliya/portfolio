'use client';
import React, { useState, useEffect } from 'react';
import RotatingLink from '../ui/rotating-link';
import jaayedaadLanding from '@/public/works/jaayedaad-landing.png';
import coinHarbourLanding from '@/public/works/coin-harbour-landing.png';
import nobelPrizeAnalysis from '@/public/works/nobel-prize-analysis.png';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Work = () => {
  const [cursorStyle, setCursorStyle] = useState({
    top: 0,
    left: 0,
    transform: 'scale(0)',
  });
  const [lagCursorStyle, setLagCursorStyle] = useState({
    top: 0,
    left: 0,
    transform: 'scale(0)',
  });

  // separate hovered vs active index
  const [hoveredWorkIndex, setHoveredWorkIndex] = useState<number | null>(null);
  const [activeWorkIndex, setActiveWorkIndex] = useState<number | null>(null);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorStyle((prev) => ({
        ...prev,
        top: e.clientY,
        left: e.clientX,
      }));
      if (!hasMoved) setHasMoved(true); // first real mouse position
    };

    const handleMouseEnter = () => {
      setCursorStyle((prev) => ({
        ...prev,
        transform: 'scale(1)',
      }));
    };

    const handleMouseLeave = () => {
      setCursorStyle((prev) => ({
        ...prev,
        transform: 'scale(0)',
      }));
    };

    const wrapper = document.querySelector('.work-wrapper');
    if (wrapper) {
      window.addEventListener('mousemove', handleMouseMove as EventListener);
      wrapper.addEventListener('mouseenter', handleMouseEnter as EventListener);
      wrapper.addEventListener('mouseleave', handleMouseLeave as EventListener);

      return () => {
        wrapper.removeEventListener(
          'mousemove',
          handleMouseMove as EventListener
        );
        wrapper.removeEventListener(
          'mouseenter',
          handleMouseEnter as EventListener
        );
        wrapper.removeEventListener(
          'mouseleave',
          handleMouseLeave as EventListener
        );
      };
    }
  }, [hasMoved]);

  useEffect(() => {
    let animationFrameId: number;

    const updateLagCursor = () => {
      setLagCursorStyle((prev) => ({
        top: prev.top + (cursorStyle.top - prev.top) * 0.07,
        left: prev.left + (cursorStyle.left - prev.left) * 0.07,
        transform: cursorStyle.transform,
      }));
      animationFrameId = requestAnimationFrame(updateLagCursor);
    };

    animationFrameId = requestAnimationFrame(updateLagCursor);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorStyle]);

  const workData = {
    coinHarbour: {
      title: 'Coin Harbour',
      description: 'Automated investment platform',
      image: coinHarbourLanding,
      role: 'Frontend + Integration engineer',
      link: 'https://coinharbour.xyz/',
      backgroundClassname: 'bg-background',
    },
    jaayedaad: {
      title: 'Jaayedaad',
      description: 'Investment portfolio tracking platform',
      image: jaayedaadLanding,
      role: 'Founding Engineer (Full Stack)',
      link: 'https://github.com/jaayedaad/jaayedaad',
      backgroundClassname: 'bg-[#1C1D20]',
    },
    nobelPrize: {
      title: 'Nobel Prize Analysis',
      description: 'Data analysis of Nobel Prize winners',
      image: nobelPrizeAnalysis,
      role: 'Data Science Hobby Project',
      link: 'https://github.com/Siddharth-2382/Nobel-Prize-Analysis',
      backgroundClassname:
        'after:bg-[url(/works/nobel-prize-analysis.png)] after:content-[""] after:top-[-10%] after:left-[-10%] after:w-[120%] after:h-[120%] after:bg-cover after:absolute after:blur-sm',
    },
  };

  // use hovered index if exists, otherwise fallback to last active
  const currentIndex = hoveredWorkIndex ?? activeWorkIndex ?? 0;

  return (
    <div className="text-background lg:mx-16 xl:mx-24 2xl:mx-32">
      {hasMoved && (
        <div
          className="cursor-effect bg-ring pointer-events-none fixed z-50 overflow-hidden transition-transform duration-600 ease-in-out xl:h-[420px] xl:w-[420px] 2xl:h-[480px] 2xl:w-[480px]"
          style={{
            top: `${lagCursorStyle.top - 250}px`,
            left: `${lagCursorStyle.left - 250}px`,
            transform: `${lagCursorStyle.transform}`,
          }}
        >
          {Object.values(workData).map((workItem, index) => (
            <div
              key={index}
              className={cn(
                'absolute flex h-full w-full items-center justify-center overflow-clip px-10 transition-transform duration-600 ease-in-out',
                workItem.backgroundClassname
              )}
              style={{
                transform: `translateY(${(index - currentIndex) * 100}%)`,
              }}
            >
              <Image
                src={workItem.image}
                alt={`Work ${index + 1}`}
                className="z-1"
              />
            </div>
          ))}
        </div>
      )}

      <p className="text-ring mb-6 px-8 text-lg font-light md:px-24 xl:mb-8 2xl:mb-12">
        Recent Work
      </p>

      {/* Works */}
      <div className="work-wrapper">
        {Object.values(workData).map((workItem, index) => (
          <div
            key={workItem.title}
            className={cn(
              'border-ring group grid grid-cols-4 items-center px-4 py-6 transition-all duration-700 ease-in-out hover:opacity-75 md:px-12 lg:px-16 lg:py-8 hover:lg:px-10 xl:gap-8 xl:px-16 xl:py-14 hover:xl:px-10 2xl:gap-12 2xl:px-24 2xl:py-18 hover:2xl:px-16',
              index === 0 ? 'border-y' : 'border-b'
            )}
            onMouseEnter={() => setHoveredWorkIndex(index)}
            onMouseLeave={() => {
              setHoveredWorkIndex(null);
              setActiveWorkIndex(index);
            }}
          >
            <div className="col-span-4 md:col-span-3">
              <h1 className="text-4xl font-light uppercase lg:text-5xl xl:text-7xl 2xl:text-8xl">
                <RotatingLink
                  text={
                    workItem.title === 'Nobel Prize Analysis'
                      ? 'Nobel Analysis'
                      : workItem.title
                  }
                  className="text-background"
                  href={workItem.link}
                  target="_blank"
                />
              </h1>
              <p className="text-ring font-light capitalize xl:text-lg">
                {workItem.description}
              </p>
            </div>
            <p className="hidden font-light capitalize md:block xl:text-lg">
              {workItem.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
