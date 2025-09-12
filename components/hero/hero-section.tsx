import React from 'react';
import PixelatedImage from '../ui/pixelated-image';
import HeroText from './hero-text';
import ImageRevealSpinner from './image-reveal-spinner';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="xs:h-[88vh] mx-4 my-auto flex h-[105vh] flex-col min-[769px]:h-[90vh] sm:h-[87vh] md:mx-6 lg:mx-10 lg:h-[90vh] xl:h-[82vh] 2xl:m-12 2xl:h-[80vh]">
      <div className="xs:mt-20 relative mt-16 flex items-center justify-center min-[1367px]:mt-0! md:my-auto">
        <HeroText />
        <PixelatedImage
          src="/siddharth-movaliya.JPG"
          className="xs:-left-8 absolute inset-0 top-40 -left-10 translate-x-1/2 sm:top-56 sm:left-0 md:top-36 md:translate-x-0 lg:top-38 xl:top-40 2xl:top-44"
        />
        <ImageRevealSpinner />
        <div className="xs:-top-20 absolute -top-16 right-0 sm:-top-16 md:top-0 lg:top-4 xl:top-16">
          <div className="relative mb-12 font-medium sm:mr-12">
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
      <div className="mt-auto flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-0">
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
          className="animate-bounce self-center text-white mix-blend-difference md:self-auto"
        />
        <p className="self-end md:self-auto">
          Passionate about crafting <br />
          unforgettable experiences.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
