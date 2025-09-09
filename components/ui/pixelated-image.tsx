'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const PixelatedImage = ({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Retina scaling ---
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous'; // allow external images
    img.onload = () => {
      imgRef.current = img;
      drawPixelated(ctx, img, width, height, 45); // start pixelated
    };

    function drawPixelated(
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      w: number,
      h: number,
      blockSize: number
    ) {
      const smallW = Math.ceil(w / blockSize);
      const smallH = Math.ceil(h / blockSize);

      const offCanvas = document.createElement('canvas');
      offCanvas.width = smallW;
      offCanvas.height = smallH;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      // draw original image downscaled
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
      // draw original image scaled properly
      ctx.drawImage(img, 0, 0, w, h);
    }

    // --- Hover events ---
    const handleEnter = () => {
      if (!imgRef.current) return;
      drawPixelated(ctx, imgRef.current, width, height, 15);
      setTimeout(() => {
        drawPixelated(ctx, imgRef.current!, width, height, 30);
        setTimeout(() => drawSharp(ctx, imgRef.current!, width, height), 200);
      }, 200);
    };

    const handleLeave = () => {
      if (!imgRef.current) return;
      drawPixelated(ctx, imgRef.current, width, height, 30);
      setTimeout(() => {
        drawPixelated(ctx, imgRef.current!, width, height, 15);
        setTimeout(
          () => drawPixelated(ctx, imgRef.current!, width, height, 45),
          200
        );
      }, 200);
    };

    canvas.addEventListener('mouseenter', handleEnter);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      canvas.removeEventListener('mouseenter', handleEnter);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [src, width, height]);

  return <canvas ref={canvasRef} className={cn(className)} />;
};

export default PixelatedImage;
