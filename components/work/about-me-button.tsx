'use client';
import React, { useEffect, useRef } from 'react';
import ElasticMagneticButton from '../ui/elastic-magnetic-button';

const AboutMeButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const parentRect =
          buttonRef.current.parentElement?.getBoundingClientRect();
        if (parentRect) {
          const relativeScrollY = -parentRect.top;
          buttonRef.current.style.transform = `translateY(${-relativeScrollY * 0.25}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className="about-btn-wrapper right-24 grid grid-cols-10"
    >
      <ElasticMagneticButton
        text="About Me"
        buttonClassName="col-start-7 bg-background text-foreground"
        textClassName="font-medium text-xl"
        hoverBackgroundClassName="bg-[#455CE9]"
      />
    </div>
  );
};

export default AboutMeButton;
