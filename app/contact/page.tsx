import React from 'react';
import MarqueeText from '@/components/contact/marquee-text';
import MagneticButton from '@/components/ui/magnetic-button';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';
import CalEmbed from '@/components/footer/cal-embed';
import BookACallButton from '@/components/ui/book-a-call-button';

const ContactPage = () => {
  return (
    <div className="h-screen justify-center overflow-x-hidden pt-28 lg:pt-32 xl:max-h-screen xl:overflow-hidden portrait:max-h-screen portrait:overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <MarqueeText />
      </div>

      <div className="text-background relative flex h-fit w-full flex-col justify-center md:justify-start xl:h-full portrait:h-full landscape:sm:max-md:h-1/2 landscape:sm:max-md:justify-end">
        <div className="absolute top-12 flex w-screen scale-125 justify-center md:hidden">
          <BookACallButton className="top-shadow-lg" />
        </div>
        <div className="flex justify-center">
          <div className="after:bg-foreground items-center justify-between after:absolute after:top-16 after:left-1/2 after:-z-10 after:h-full after:w-[200vw] after:-translate-x-1/2 after:rounded-t-[50%] after:content-[''] min-[1367px]:flex md:after:w-[135vw] lg:mx-16 2xl:mx-24 2xl:min-w-[1536px]">
            <div className="hidden flex-col min-[1367px]:flex xl:text-lg 2xl:text-xl">
              <a href="tel:5157661643">515-766-1643</a>
              <a href="mailto:contact@siddharthmovaliya.com">
                contact@siddharthmovaliya.com
              </a>
            </div>
            <div className="hidden min-w-[772px] scale-90 justify-center md:flex lg:min-h-[570px] lg:scale-100 xl:scale-95 2xl:scale-100">
              <CalEmbed />
            </div>
            <div className="mx-16 flex flex-col items-center justify-between md:flex-row lg:mx-0">
              <div className="hidden flex-col min-[1367px]:hidden! md:flex">
                <a href="tel:5157661643">515-766-1643</a>
                <a href="mailto:contact@siddharthmovaliya.com">
                  contact@siddharthmovaliya.com
                </a>
              </div>
              <div className="text-foreground flex gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
