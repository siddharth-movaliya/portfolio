import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import MagneticButton from '../ui/magnetic-button';
import Link from 'next/link';

const NavigationMenuSocials = () => {
  return (
    <div className="fixed top-5/6 right-1/16 flex w-1/2 rotate-90 flex-col items-start justify-start gap-4 bg-white text-left text-xl font-light">
      <Link href="tel:+15157661643">515-766-1643</Link>
      <Link href="mailto:movaliyasiddharth23@gmail.com">
        movaliyasiddharth23@gmail.com
      </Link>
      <div className="mt-28 flex gap-4">
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
            href={'https://twitter.com/siddharth_2382'}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow"
          >
            <FaTwitter />
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href={'https://github.com/siddharth-2382'}
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
