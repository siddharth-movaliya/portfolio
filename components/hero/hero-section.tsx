import React from 'react';
import PixelatedImage from '../ui/pixelated-image';
import HeroText from './hero-text';
import ImageRevealSpinner from './image-reveal-spinner';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="m-12 flex h-[80vh] flex-col">
      <div className="relative flex items-center justify-center">
        <HeroText />
        <PixelatedImage
          width={360}
          height={480}
          src="/siddharth-movaliya.JPG"
          className="absolute inset-0 top-44 left-0"
        />
        <ImageRevealSpinner />
        <div className="absolute right-0">
          <div className="relative mr-12 mb-12 font-medium">
            <Image
              src="/asterisk.svg"
              alt="Asterisk"
              width={10}
              height={10}
              className="absolute left-0 -translate-x-3/2 text-white mix-blend-difference"
            />
            Great development services —<br />
            <span className="text-nowrap">without the pretentiousness</span>
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full justify-between">
        <p>
          Email:
          <br />
          <Link href="mailto:movaliyasiddharth23@gmail.com">
            movaliyasiddharth23@gmail.com
          </Link>
        </p>
        <Image
          src="/arrow.svg"
          alt="Downward Arrow"
          width={44}
          height={44}
          className="animate-bounce text-white mix-blend-difference"
        />
        <p>
          Passionate about crafting <br />
          unforgettable experiences.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
