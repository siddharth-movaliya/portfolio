import SocialButtonGroup from '@/components/navigation/social-button-group';
import ElasticMagneticButton from '@/components/ui/elastic-magnetic-button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const AboutPage = () => {
  return (
    <div className="justify-center overflow-x-hidden pt-28 lg:pt-32">
      <div className="xs:mx-12 mx-8 pt-12 min-[769px]:max-lg:mx-24 md:mx-16 lg:mx-36 xl:mx-64">
        <h1 className="xs:text-4xl text-3xl leading-none font-light md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Helping ideas grow into products through technology.
        </h1>
        <Separator className="bg-muted-foreground mt-14 w-full lg:mt-16 xl:mt-24 2xl:mt-32" />
      </div>
      <ElasticMagneticButton
        text="Resume"
        href="/resume.pdf"
        target="_blank"
        buttonClassName="bg-[#455CE9] text-foreground right-0 top-[35%] xs:top-[41%] sm:top-3/10 md:top-1/4 min-[769px]:max-lg:top-[22.5%] xl:top-3/10 2xl:top-2/5 absolute -translate-x-1/4 md:-translate-x-full lg:-translate-x-5/4 xl:-translate-x-[200%]"
        textClassName="font-medium text-xl"
        hoverBackgroundClassName="bg-[#FA4549]"
      />
      <div className="my-24 grid px-12 min-[769px]:max-lg:px-24 md:my-12 md:grid-cols-2 md:px-16 lg:px-36 xl:my-16 xl:grid-cols-3 xl:px-64">
        <div className="col-span-1">
          <p className="text-pretty">
            I create modern, tailor-made solutions that empower startups and
            teams to move faster. Each project is a step toward new horizons,
            where code meets creativity. <br />
            <span className="text-muted-foreground">
              Always exploring what&rsquo;s next...
            </span>
          </p>
        </div>
      </div>
      <div className="mx-2 my-16 text-5xl leading-none font-light uppercase min-[769px]:max-lg:mx-24 md:mx-16 md:text-7xl lg:mx-36 lg:text-8xl xl:my-24 xl:text-[160px] 2xl:text-[200px]">
        <div className="ml-24 sm:ml-36 xl:ml-64">Driven</div>
        <div className="flex items-center justify-center gap-2 sm:justify-between md:gap-6">
          <div>by </div>
          <div className="hidden text-xs font-normal text-pretty sm:block xl:text-sm">
            I&rsquo;m a software developer building custom web apps with a focus
            on usability, performance, and lasting quality.
          </div>
          <div className={cn('italic', bodoni.className)}>Passion</div>
        </div>
        <div className="xs:mx-6 mx-2 flex justify-between md:mx-12 lg:mx-6">
          &<span className={cn('italic', bodoni.className)}> committed</span>
        </div>
        <div className="xs:ml-16 ml-8 md:ml-32">for quality</div>
      </div>
      <div className="mx-4 my-24 grid grid-cols-2 items-center gap-6 min-[769px]:max-lg:mx-12 sm:mx-8 md:mx-14 lg:mx-24 xl:mx-36">
        <Image
          src="/siddharth-movaliya.JPG"
          alt="Siddharth Movaliya"
          width={300}
          height={150}
          className="mx-auto"
        />
        <div className="text-pretty md:text-3xl lg:text-4xl xl:text-5xl">
          <span className="relative md:px-16">
            <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl">
              “
            </span>
          </span>
          Nothing fancy; I create full-stack solutions and digital products. The
          goal? To give you exactly what you need without the headaches.
          I&rsquo;m practical, honest, and focused on building things that last.
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="bg-foreground flex gap-6 rounded-full p-3 md:p-5">
          <SocialButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
