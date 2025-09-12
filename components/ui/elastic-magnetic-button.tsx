'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

interface ElasticMagneticButtonProps {
  text?: string;
  buttonClassName?: string;
  textClassName?: string;
  hoverBackgroundClassName?: string;
}

const ElasticMagneticButton: React.FC<ElasticMagneticButtonProps> = ({
  text,
  buttonClassName,
  textClassName,
  hoverBackgroundClassName,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);
  const didMountRef = useRef(false);

  const [hovered, setHovered] = useState(false);

  // Positions for magnetic effect
  let posX = 0,
    posY = 0,
    targetX = 0,
    targetY = 0;
  let textPosX = 0,
    textPosY = 0;
  let animationFrame: number;
  let boundingRect: DOMRect | null = null;

  const buttonSnapFactor = 0.03;
  const textSnapFactor = 0.04;

  useEffect(() => {
    if (!buttonRef.current || !textRef.current) return;

    const button = buttonRef.current;
    const text = textRef.current;

    // reset transforms on mount
    posX = posY = targetX = targetY = textPosX = textPosY = 0;
    button.style.transform = `translate(0px,0px)`;
    text.style.transform = `translate(0px,0px)`;

    const handleResize = () => {
      if (button) boundingRect = button.getBoundingClientRect();
    };

    const handleMouseEnter = () => {
      if (button) boundingRect = button.getBoundingClientRect();
    };

    const animate = () => {
      // Button movement
      const dx = targetX - posX;
      const dy = targetY - posY;
      posX += dx * buttonSnapFactor;
      posY += dy * buttonSnapFactor;
      button.style.transform = `translate(${posX}px, ${posY}px)`;

      // Text layered movement
      if (!boundingRect) return;
      const maxOffset = boundingRect.width / 4;
      let textTargetX = targetX * 0.4;
      let textTargetY = targetY * 0.4;

      const dist = Math.hypot(textTargetX, textTargetY);
      if (dist > maxOffset) {
        const angle = Math.atan2(textTargetY, textTargetX);
        textTargetX = Math.cos(angle) * maxOffset;
        textTargetY = Math.sin(angle) * maxOffset;
      }

      const tdx = textTargetX - textPosX;
      const tdy = textTargetY - textPosY;
      textPosX += tdx * textSnapFactor;
      textPosY += tdy * textSnapFactor;
      text.style.transform = `translate(${textPosX}px, ${textPosY}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!boundingRect) return;
      cancelAnimationFrame(animationFrame);

      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;

      targetX = (mouseX - boundingRect.width / 2) * 0.35;
      targetY = (mouseY - boundingRect.height / 2) * 0.35;

      animate();
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrame);

      const startX = posX;
      const startY = posY;
      const startTextX = textPosX;
      const startTextY = textPosY;
      const duration = 800;
      const startTime = performance.now();

      function elastic(time: number) {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1);
        const p = 0.3;
        const s = p / 4;
        const eased =
          t === 0
            ? 0
            : t === 1
              ? 1
              : Math.pow(2, -10 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) +
                1;

        posX = startX * (1 - eased);
        posY = startY * (1 - eased);
        button.style.transform = `translate(${posX}px, ${posY}px)`;

        textPosX = startTextX * (1 - eased);
        textPosY = startTextY * (1 - eased);
        text.style.transform = `translate(${textPosX}px, ${textPosY}px)`;

        if (t < 1) {
          requestAnimationFrame(elastic);
        } else {
          posX = posY = textPosX = textPosY = 0;
          button.style.transform = `translate(0px, 0px)`;
          text.style.transform = `translate(0px, 0px)`;
        }
      }

      requestAnimationFrame(elastic);
    };

    window.addEventListener('resize', handleResize);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Background slide logic
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    // skip initial mount
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    if (hovered) {
      // reset to bottom instantly, then slide up
      bg.style.transition = 'none';
      bg.style.transform = 'translateY(100%)';
      requestAnimationFrame(() => {
        bg.style.transition = 'transform 0.4s ease';
        bg.style.transform = 'translateY(0%)';
      });
    } else {
      // slide out upwards
      bg.style.transition = 'transform 0.4s ease';
      bg.style.transform = 'translateY(-100%)';
    }
  }, [hovered]);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'group relative flex size-36 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-red-400 font-bold text-white select-none lg:size-40 xl:size-48 2xl:size-52',
        buttonClassName
      )}
    >
      {/* background */}
      <span
        ref={bgRef}
        className={cn(
          'absolute size-48 rounded-full lg:size-54 xl:size-60 2xl:size-64',
          hoverBackgroundClassName
        )}
        style={{ transform: 'translateY(100%)' }} // start hidden at bottom
      ></span>

      {/* text */}
      <span
        ref={textRef}
        className={cn('pointer-events-none absolute', textClassName)}
      >
        {text}
      </span>
    </button>
  );
};

export default ElasticMagneticButton;
