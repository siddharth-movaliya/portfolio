import React from 'react';
import MagneticButton from '../ui/magnetic-button';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const SocialButtonGroup = () => {
  return (
    <>
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
    </>
  );
};

export default SocialButtonGroup;
