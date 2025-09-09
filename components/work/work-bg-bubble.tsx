'use client';
import React, { useEffect, useState } from 'react';

const WorkBgBubble = () => {
  const [bubbleRotation, setBubbleRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bubbleElement = document.querySelector('.bubble-bg');
      if (bubbleElement) {
        const rect = bubbleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromTop = rect.top;

        // Calculate rotation based on distance from top
        if (distanceFromTop <= windowHeight) {
          const newRotation = (distanceFromTop / windowHeight) * 45;
          if (newRotation > 0) {
            setBubbleRotation(Math.min(newRotation, 45));
          } else {
            setBubbleRotation(0);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="bubble-container absolute inset-[-10vw_0%_auto] -z-1 max-h-[180%] overflow-hidden">
      <div
        className="bubble-bg bg-foreground -ml-[100vw] h-[150vw] w-[300vw] rounded-[50%]"
        style={{ transform: `rotateY(${bubbleRotation}deg)` }}
      ></div>
    </div>
  );
};

export default WorkBgBubble;
