'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaAws } from 'react-icons/fa';
import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from 'react-icons/si';

const techLinks: Record<string, string> = {
  react: 'https://react.dev/',
  nextjs: 'https://nextjs.org/',
  typescript: 'https://www.typescriptlang.org/',
  tailwindcss: 'https://tailwindcss.com/',
  postgresql: 'https://www.postgresql.org/',
  prisma: 'https://www.prisma.io/',
  zod: 'https://zod.dev/',
  docker: 'https://www.docker.com/',
  vercel: 'https://vercel.com/',
  aws: 'https://aws.amazon.com/',
};

const TechStackSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const firstSkillRef = useRef<HTMLDivElement>(null);
  const [hoverStyle, setHoverStyle] = useState<React.CSSProperties | null>(
    null
  );

  const topSkillsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomSkillsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [topHoverIndex, setTopHoverIndex] = useState<number | null>(0);
  const [bottomHoverIndex, setBottomHoverIndex] = useState<number | null>(null);

  const topSkills = [
    { Icon: SiReact, key: 'react' },
    { Icon: SiNextdotjs, key: 'nextjs' },
    { Icon: SiTypescript, key: 'typescript' },
  ];
  const bottomSkills = [
    { Icon: SiTailwindcss, key: 'tailwindcss' },
    { Icon: SiPostgresql, key: 'postgresql' },
    { Icon: SiPrisma, key: 'prisma' },
    { Icon: SiZod, key: 'zod' },
    { Icon: SiDocker, key: 'docker' },
    { Icon: SiVercel, key: 'vercel' },
    { Icon: FaAws, key: 'aws' },
  ];

  // Animate heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
        const newYPosition = -(1 - progress) * 72;
        headingRef.current.style.transform = `translateY(${newYPosition}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On mount, position background on the first skill
  useEffect(() => {
    const container = containerRef.current;
    const firstSkill = firstSkillRef.current;
    if (!container || !firstSkill) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = firstSkill.getBoundingClientRect();

    setHoverStyle({
      top: targetRect.top - containerRect.top,
      left: targetRect.left - containerRect.left,
      width: targetRect.width,
      height: targetRect.height,
    });
  }, []);

  // Handle hover on a skill
  const handleMouseEnter = (
    index: number,
    isTop: boolean,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = e.currentTarget;
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    setHoverStyle({
      top: targetRect.top - containerRect.top,
      left: targetRect.left - containerRect.left,
      width: targetRect.width,
      height: targetRect.height,
    });

    if (isTop) {
      setTopHoverIndex(index);
      setBottomHoverIndex(-1);
    } else {
      setBottomHoverIndex(index);
      setTopHoverIndex(-1);
    }
  };

  // Handle click → open website
  const handleClick = (key: string) => {
    const url = techLinks[key];
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="relative flex h-screen flex-col justify-between p-12"
      ref={containerRef}
    >
      <h1
        ref={headingRef}
        className="relative text-center text-[200px] leading-none font-semibold uppercase"
      >
        Tech Stack
      </h1>

      {/* Floating background */}
      <div
        className="bg-foreground pointer-events-none absolute z-0 p-1 transition-all duration-300"
        style={hoverStyle || {}}
      />
      <div className="relative">
        <p className="mb-6 text-lg font-semibold uppercase">Professional at</p>

        {/* Top row */}
        <div className="grid grid-cols-3">
          {topSkills.map(({ Icon, key }, idx) => (
            <div
              key={key}
              ref={(el) => {
                topSkillsRefs.current[idx] = el;
                if (idx === 0) firstSkillRef.current = el;
              }}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(key)}
              className={`flex h-80 cursor-pointer items-center justify-center transition-all duration-300 ease-in-out ${
                topHoverIndex === idx ? 'text-background' : ''
              } ${idx !== 0 ? 'border-ring border-l' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(idx, true, e)}
            >
              <Icon className="size-20" />
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className={`border-ring grid grid-cols-${bottomSkills.length} border-t`}
        >
          {bottomSkills.map(({ Icon, key }, idx) => (
            <div
              key={key}
              ref={(el) => {
                bottomSkillsRefs.current[idx] = el;
              }}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(key)}
              className={`flex h-64 cursor-pointer items-center justify-center transition-all duration-300 ease-in-out ${
                bottomHoverIndex === idx ? 'text-background' : ''
              } ${idx !== 0 ? 'border-ring border-l' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(idx, false, e)}
            >
              <Icon className="size-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
