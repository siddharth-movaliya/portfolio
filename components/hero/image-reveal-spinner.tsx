import Image from 'next/image';
import React from 'react';

const ImageRevealSpinner = () => {
  return (
    <div className="absolute -right-6 -bottom-66 scale-60 sm:-right-4 md:-bottom-36 md:left-68 md:scale-100 lg:-bottom-32 lg:left-70 xl:-bottom-20 xl:left-84 2xl:left-108">
      <div className="relative flex size-32 items-center justify-center">
        <div className="absolute size-6 rounded-full bg-yellow-400"></div>
        <Image
          src="/image-hover-button.svg"
          alt="Hover to reveal"
          width={128}
          height={128}
          className="animate-reverse-spin absolute hidden xl:block"
        />
        <Image
          src="/image-click-button.svg"
          alt="Click to reveal"
          width={128}
          height={128}
          className="animate-reverse-spin absolute block xl:hidden"
        />
      </div>
    </div>
  );
};

export default ImageRevealSpinner;
