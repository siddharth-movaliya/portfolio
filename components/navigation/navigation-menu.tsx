'use client';
import React, { useState } from 'react';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import NavBar from './navbar';
import navImgBg from '@/public/nav-bg-img.svg';
import NavigationMenuSocials from './navigation-menu-socials';
import { cn } from '@/lib/utils';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavBar toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <nav
        className={`fixed top-0 left-0 z-100 h-full w-full overflow-visible bg-white transition-all duration-1500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-[-140%] delay-300'
        }`}
      >
        <div className="flex h-full flex-col text-7xl font-light md:flex-row md:items-end md:text-9xl 2xl:text-[156px]">
          <div className="group mt-32 flex h-1/3 w-full flex-col justify-center overflow-hidden md:mt-0 md:h-full md:w-2/11 md:items-center md:justify-end md:pb-16">
            <a
              className={cn(
                'flex items-center justify-center transition-all duration-1000 ease-in-out [perspective:1000px] md:-rotate-90 md:justify-start',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-300'
                  : '-translate-y-18 opacity-0 delay-300'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                Home
              </div>
              <div className="nav-link-rotated">Home</div>
            </a>
          </div>
          <div
            className={cn(
              'bg-foreground h-0.5 w-full -translate-y-full transition-transform duration-800 ease-in-out md:h-full md:w-0.5',
              isMenuOpen ? 'translate-0 delay-300' : 'delay-300'
            )}
          ></div>
          <div className="group flex h-1/3 w-full flex-col justify-center overflow-hidden md:h-full md:w-2/11 md:items-center md:justify-end md:pb-16">
            <a
              className={cn(
                'flex items-center justify-center transition-all duration-1000 ease-in-out [perspective:1000px] md:-rotate-90 md:justify-start',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-400'
                  : '-translate-y-18 opacity-0 delay-200'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                About
              </div>
              <div className="nav-link-rotated">About</div>
            </a>
          </div>
          <div
            className={cn(
              'bg-foreground h-0.5 w-full -translate-y-full transition-transform duration-800 ease-in-out md:h-full md:w-0.5',
              isMenuOpen ? 'translate-0 delay-400' : 'delay-200'
            )}
          ></div>
          <div className="group flex h-1/3 w-full flex-col justify-center overflow-hidden md:h-full md:w-2/11 md:items-center md:justify-end md:pb-16">
            <a
              className={cn(
                'flex items-center justify-center transition-all duration-1000 ease-in-out [perspective:1000px] md:-rotate-90 md:justify-start',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-500'
                  : '-translate-y-18 opacity-0 delay-100'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                Contact
              </div>
              <div className="nav-link-rotated">Contact</div>
            </a>
          </div>
          <div
            className={cn(
              'bg-foreground h-0.5 w-full -translate-y-full transition-transform duration-800 ease-in-out md:h-full md:w-0.5',
              isMenuOpen ? 'translate-0 delay-500' : 'delay-100'
            )}
          ></div>
          <NavigationMenuSocials />
        </div>
        <Image
          className={cn(
            'absolute bottom-0 origin-[50%_0] translate-y-full transition-all duration-1500 ease-in-out',
            isMenuOpen && 'rotate-x-85'
          )}
          src={navImgBg}
          alt="Nav menu background"
        />
      </nav>
    </>
  );
};

export default NavigationMenu;
