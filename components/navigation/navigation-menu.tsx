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
        <div className="nav-link-wrapper relative flex h-full w-full items-center justify-center">
          <div className="flex h-[100vw] w-[100vh] -rotate-90 flex-col text-9xl font-extralight">
            <a
              className={cn(
                'group my-22 px-16 transition-all duration-1000 ease-in-out [perspective:1000px]',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-300'
                  : 'translate-x-18 opacity-0 delay-300'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                Home
              </div>
              <div className="nav-link-rotated">Home</div>
            </a>
            <div
              className={cn(
                'bg-foreground h-0.5 w-full translate-x-full transition-transform duration-800 ease-in-out',
                isMenuOpen ? 'translate-0 delay-300' : 'delay-300'
              )}
            ></div>
            <a
              className={cn(
                'group my-22 px-16 transition-all duration-1000 ease-in-out [perspective:1000px]',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-400'
                  : 'translate-x-18 opacity-0 delay-200'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                Projects
              </div>
              <div className="nav-link-rotated">Projects</div>
            </a>
            <div
              className={cn(
                'bg-foreground h-0.5 w-full translate-x-full transition-transform duration-800 ease-in-out',
                isMenuOpen ? 'translate-0 delay-400' : 'delay-200'
              )}
            ></div>
            <a
              className={cn(
                'group my-22 px-16 transition-all duration-1000 ease-in-out [perspective:1000px]',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-500'
                  : 'translate-x-18 opacity-0 delay-100'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                About
              </div>
              <div className="nav-link-rotated">About</div>
            </a>
            <div
              className={cn(
                'bg-foreground h-0.5 w-full translate-x-full transition-transform duration-800 ease-in-out',
                isMenuOpen ? 'translate-0 delay-500' : 'delay-100'
              )}
            ></div>
            <a
              className={cn(
                'group my-22 px-16 transition-all duration-1000 ease-in-out [perspective:1000px]',
                isMenuOpen
                  ? 'translate-0 opacity-100 delay-600'
                  : 'translate-x-18 opacity-0 delay-0'
              )}
              href="#"
            >
              <div className={cn('nav-link-unrotated', bodoni.className)}>
                Contact
              </div>
              <div className="nav-link-rotated">Contact</div>
            </a>
            <div
              className={cn(
                'bg-foreground h-0.5 w-full translate-x-full transition-transform duration-800 ease-in-out',
                isMenuOpen ? 'translate-0 delay-600' : 'delay-0'
              )}
            ></div>
            <NavigationMenuSocials />
          </div>
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
