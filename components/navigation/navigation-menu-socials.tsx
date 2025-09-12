import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import MagneticButton from '../ui/magnetic-button';
import Link from 'next/link';

const NavigationMenuSocials = () => {
  return (
    <div className="mx-auto flex h-full flex-col justify-center gap-4 bg-white text-xl font-light min-[1367px]:bottom-16 xl:right-1/6 xl:max-[1367px]:top-7/8 2xl:top-5/6 2xl:right-1/16">
      <Link href="tel:+15157661643">515-766-1643</Link>
      <Link href="mailto:movaliyasiddharth23@gmail.com">
        movaliyasiddharth23@gmail.com
      </Link>
      <div className="flex gap-4 xl:mt-12 2xl:mt-18">
        <MagneticButton>
          <Link
            href={'https://www.instagram.com/siddharth_2382/'}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow"
          >
            <FaInstagram />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href={'https://x.com/siddharth_2382'}
            aria-label="X.com / Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow"
          >
            <RiTwitterXFill />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href={'https://github.com/siddharth-movaliya/'}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow"
          >
            <FaGithub />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href={'https://www.linkedin.com/in/siddharth-movaliya'}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow"
          >
            <FaLinkedinIn />
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
};

export default NavigationMenuSocials;
