'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BiFile } from 'react-icons/bi';
import { Check, Download, Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { MdCopyAll } from 'react-icons/md';
import { toast } from 'sonner';
import AnimatedButton from '../ui/animated-button';

const FooterBento = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('contact@siddharthmovaliya.com');
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000); // revert after 2s
  };
  return (
    <div className="my-8 flex justify-center 2xl:my-16">
      <div className="mx-6 grid grid-cols-3 grid-rows-6 gap-2 md:grid-cols-7 md:grid-rows-3 lg:mx-16 lg:gap-3 xl:w-2/3">
        <div className="border-ring/30 col-span-3 row-span-3 flex w-full flex-col justify-between rounded-2xl border p-5 md:col-span-4 md:row-span-3 lg:p-8">
          <div>
            <Image
              src="/siddharth-movaliya.JPG"
              alt="Siddharth"
              className="border-ring/30 mb-4 size-[76px] rounded-full border object-cover"
              width={100}
              height={100}
            />
            <h1 className="xs:text-3xl text-2xl font-medium md:leading-snug xl:text-4xl 2xl:text-5xl">
              Hello 👋🏻
              <br /> I&rsquo;m Siddharth Movaliya.
            </h1>
            <p className="text-background/75 xs:text-base mt-2 text-sm text-pretty 2xl:text-lg">
              I help turn startup ideas into products that feel ready to pitch
              and scale.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="text-background/75 flex items-center justify-center gap-2">
              <span className="relative flex size-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
              </span>
              Available for hire
            </div>
            <div className="flex gap-4">
              <AnimatedButton iconLeft={BiFile} iconRight={Download}>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="pr-0 pl-4 transition-all group-hover:translate-x-0 group-hover:pr-4 group-hover:pl-0"
                >
                  My Resume
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </div>
        <Link
          href="https://www.linkedin.com/in/siddharth-movaliya"
          aria-label="LinkedIn"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 col-span-2 flex flex-col justify-between rounded-2xl border p-3 transition-all duration-400 ease-in-out lg:col-span-1 lg:p-5"
        >
          <p className="text-background/75 text-sm">Connect</p>
          <div className="flex flex-col gap-1">
            <FaLinkedin className="xl:text-2xl 2xl:text-3xl" />
            <p className="text-backgroundxl:text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              LinkedIn
            </p>
          </div>
        </Link>
        <Link
          href="https://github.com/siddharth-movaliya"
          aria-label="GitHub"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 flex flex-col justify-between rounded-2xl border p-3 transition-all duration-400 ease-in-out lg:p-5"
        >
          <p className="text-background/75 text-sm">Follow</p>
          <div className="flex flex-col gap-1">
            <FaGithub className="xl:text-2xl 2xl:text-3xl" />
            <p className="text-backgroundxl:text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              GitHub
            </p>
          </div>
        </Link>
        <Link
          href="https://x.com/siddharth_2382"
          aria-label="X.com / Twitter"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 col-span-2 col-start-2 row-start-5 flex flex-col justify-between rounded-2xl border p-3 transition-all duration-400 ease-in-out md:col-start-6 md:row-start-2 lg:col-span-1 lg:col-start-auto lg:row-start-auto lg:p-5"
        >
          <p className="text-background/75 text-sm">Follow</p>
          <div className="flex flex-col gap-1">
            <RiTwitterXFill className="xl:text-2xl 2xl:text-3xl" />
            <p className="text-background transition-all duration-400 ease-in-out group-hover:text-sky-400 xl:text-lg">
              Twitter / X
            </p>
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/siddharth_2382/"
          aria-label="Instagram"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 col-start-1 flex flex-col justify-between rounded-2xl border p-3 transition-all duration-400 ease-in-out md:col-start-5 lg:col-start-auto lg:p-5"
        >
          <p className="text-background/75 text-sm">Follow</p>
          <div className="flex flex-col gap-1">
            <FaInstagram className="xl:text-2xl 2xl:text-3xl" />
            <p className="text-backgroundxl:text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              Instagram
            </p>
          </div>
        </Link>
        <div className="border-ring/30 group hover:bg-background/10 col-span-2 hidden flex-col overflow-clip rounded-2xl border p-5 transition-all duration-400 ease-in-out lg:flex">
          <span className="font-serif text-2xl leading-none xl:text-3xl 2xl:text-6xl">
            “
          </span>
          <span className="transition-all duration-400 ease-in-out group-hover:text-sky-400">
            Never let success get to your head, and never let failure get to
            your heart.
          </span>
        </div>
        <div className="border-ring/30 hover:bg-background/10 col-span-3 row-span-1 flex flex-col justify-between gap-4 rounded-2xl border p-3 transition-all duration-400 ease-in-out lg:gap-0 lg:p-5">
          <p className="text-background/75 text-sm">
            Or, Feel free to send a mail
          </p>
          <div className="flex flex-col gap-1">
            <Mail className="xl:text-2xl 2xl:text-3xl" />
            <p
              onClick={handleCopy}
              className="text-background relative flex w-fit items-center pr-2 transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-sky-400 2xl:text-lg"
            >
              contact@siddharthmovaliya.com
              <MdCopyAll
                className={`absolute right-0 translate-x-full text-xl transition-all duration-300 ${
                  copied
                    ? 'scale-0 opacity-0'
                    : 'scale-100 text-sky-400 opacity-100'
                }`}
              />
              {/* Checkmark */}
              <Check
                className={`absolute right-0 translate-x-full text-xl transition-all duration-300 ${
                  copied
                    ? 'scale-100 text-emerald-400 opacity-100'
                    : 'scale-0 opacity-0'
                }`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBento;
