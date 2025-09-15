'use client';
import { useState, useRef } from 'react';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!iconRef.current) return;

    const rect = iconRef.current.getBoundingClientRect();
    const iconCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const dx = e.clientX - iconCenter.x;
    const dy = e.clientY - iconCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const radius = 100; // how far effect should reach
    if (distance < radius) {
      // pull strength (closer = stronger)
      const strength = (radius - distance) / radius;
      setPos({
        x: dx * 0.55 * strength, // adjust multiplier for "magnet power"
        y: dy * 0.55 * strength,
      });
    } else {
      setPos({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      className="flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={iconRef}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MagneticButton;
