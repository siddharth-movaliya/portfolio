'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const PixelatedImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imgRef.current = img;
      resizeAndDraw();
    };

    const resizeAndDraw = () => {
      if (!canvas || !ctx || !imgRef.current) return;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Guard: skip if canvas is not visible or has no size
      if (w === 0 || h === 0) return;

      // Retina scaling
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scaling
      ctx.scale(dpr, dpr);

      drawPixelated(ctx, imgRef.current, w, h, 45);
    };

    function drawPixelated(
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      w: number,
      h: number,
      blockSize: number
    ) {
      // Guard: skip if width or height is 0
      if (w === 0 || h === 0) return;

      const smallW = Math.ceil(w / blockSize);
      const smallH = Math.ceil(h / blockSize);

      // Guard: skip if offscreen canvas would be 0
      if (smallW === 0 || smallH === 0) return;

      const offCanvas = document.createElement('canvas');
      offCanvas.width = smallW;
      offCanvas.height = smallH;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, smallW, smallH);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(offCanvas, 0, 0, smallW, smallH, 0, 0, w, h);
    }

    function drawSharp(
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      w: number,
      h: number
    ) {
      ctx.imageSmoothingEnabled = true;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
    }

    const handleEnter = () => {
      if (!imgRef.current || !canvas) return;
      const { width: w, height: h } = canvas.getBoundingClientRect();

      drawPixelated(ctx, imgRef.current, w, h, 15);
      setTimeout(() => {
        drawPixelated(ctx, imgRef.current!, w, h, 30);
        setTimeout(() => drawSharp(ctx, imgRef.current!, w, h), 200);
      }, 200);
    };

    const handleLeave = () => {
      if (!imgRef.current || !canvas) return;
      const { width: w, height: h } = canvas.getBoundingClientRect();

      drawPixelated(ctx, imgRef.current, w, h, 30);
      setTimeout(() => {
        drawPixelated(ctx, imgRef.current!, w, h, 15);
        setTimeout(() => drawPixelated(ctx, imgRef.current!, w, h, 45), 200);
      }, 200);
    };

    // Observe resize (for responsive Tailwind breakpoints)
    const observer = new ResizeObserver(resizeAndDraw);
    observer.observe(canvas);

    canvas.addEventListener('mouseenter', handleEnter);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      observer.disconnect();
      canvas.removeEventListener('mouseenter', handleEnter);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        // Example responsive Tailwind sizes
        'h-[267px] w-[200px] md:h-[334px] md:w-[250px] xl:h-[400px] xl:w-[300px] 2xl:h-[480px] 2xl:w-[360px]',
        className
      )}
    />
  );
};

export default PixelatedImage;
