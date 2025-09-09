import Image from 'next/image';
import React from 'react';

const ImageRevealSpinner = () => {
  return (
    <div className="absolute -bottom-20 left-108">
      <div className="relative flex size-32 items-center justify-center">
        <div className="absolute size-6 rounded-full bg-yellow-400"></div>
        <Image
          src="/image-hover-button.svg"
          alt="Hover to reveal"
          width={128}
          height={128}
          className="animate-reverse-spin absolute"
        />
      </div>
    </div>
  );
};

export default ImageRevealSpinner;
