'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { BiCalendar, BiFile } from 'react-icons/bi';
import { ArrowDown, ArrowUpRight, Check, Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { MdCopyAll } from 'react-icons/md';
import { toast } from 'sonner';

const FooterBento = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('movaliyasiddharth23@gmail.com');
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000); // revert after 2s
  };
  return (
    <div className="my-16 flex justify-center">
      <div className="grid w-2/3 grid-cols-7 grid-rows-3 gap-3">
        <div className="border-ring/30 col-span-4 row-span-3 flex w-full flex-col justify-between rounded-2xl border p-8">
          <div>
            <Image
              src="/siddharth-movaliya.JPG"
              alt="Siddharth"
              className="border-ring/30 mb-4 size-[76px] rounded-full border object-cover"
              width={100}
              height={100}
            />
            <h1 className="text-5xl leading-snug font-medium">
              Hello 👋🏻
              <br /> I&rsquo;m Siddharth Movaliya.
            </h1>
            <p className="text-background/75 text-lg">
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
              <Button
                size="lg"
                className="dark group hover:bg-foreground relative items-center overflow-hidden rounded-full hover:cursor-pointer"
              >
                <BiCalendar className="absolute left-0 translate-x-3 transition-all group-hover:-translate-x-full group-hover:opacity-100" />
                <Link
                  href="https://cal.com/siddharth-movaliya/30-min-meeting"
                  target="_blank"
                  className="pr-0 pl-4 transition-all group-hover:translate-x-0 group-hover:pr-4 group-hover:pl-0"
                >
                  Book a Call
                </Link>
                <ArrowUpRight className="absolute right-0 translate-x-full transition-all group-hover:-translate-x-3 group-hover:opacity-100" />
              </Button>
              {/* <Button
                size="lg"
                className="dark hover:bg-foreground group relative items-center overflow-hidden rounded-full hover:cursor-pointer"
              >
                <BiFile className="absolute left-0 translate-x-3 transition-all group-hover:-translate-x-full group-hover:opacity-100" />
                <span className="pr-0 pl-4 transition-all group-hover:translate-x-0 group-hover:pr-4 group-hover:pl-0">
                  My Resume
                </span>
                <ArrowDown className="absolute right-0 translate-x-full transition-all group-hover:-translate-x-3 group-hover:opacity-100" />
              </Button> */}
            </div>
          </div>
        </div>
        <Link
          href="https://www.linkedin.com/in/siddharth-movaliya"
          aria-label="LinkedIn"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 flex h-36 flex-col justify-between rounded-2xl border p-5 transition-all duration-400 ease-in-out"
        >
          <p className="text-background/75 text-sm">Connect</p>
          <div className="flex flex-col gap-1">
            <FaLinkedin className="text-3xl" />
            <p className="text-background text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              LinkedIn
            </p>
          </div>
        </Link>
        <Link
          href="https://github.com/siddharth-movaliya"
          aria-label="GitHub"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 flex flex-col justify-between rounded-2xl border p-5 transition-all duration-400 ease-in-out"
        >
          <p className="text-background/75 text-sm">Follow</p>
          <div className="flex flex-col gap-1">
            <FaGithub className="text-3xl" />
            <p className="text-background text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              GitHub
            </p>
          </div>
        </Link>
        <Link
          href="https://x.com/siddharth_2382"
          aria-label="X.com / Twitter"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 flex flex-col justify-between rounded-2xl border p-5 transition-all duration-400 ease-in-out"
        >
          <p className="text-background/75 text-sm">Follow</p>
          <div className="flex flex-col gap-1">
            <RiTwitterXFill className="text-3xl" />
            <p className="text-background text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              Twitter / X
            </p>
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/siddharth_2382/"
          aria-label="Instagram"
          target="_blank"
          className="border-ring/30 group hover:bg-background/10 flex flex-col justify-between rounded-2xl border p-5 transition-all duration-400 ease-in-out"
        >
          <p className="text-background/75 text-sm">Follow</p>
          <div className="flex flex-col gap-1">
            <FaInstagram className="text-3xl" />
            <p className="text-background text-lg transition-all duration-400 ease-in-out group-hover:text-sky-400">
              Instagram
            </p>
          </div>
        </Link>
        <div className="border-ring/30 group hover:bg-background/10 col-span-2 flex flex-col overflow-clip rounded-2xl border p-5 transition-all duration-400 ease-in-out">
          <span className="font-serif text-6xl leading-none">“</span>
          <span className="transition-all duration-400 ease-in-out group-hover:text-sky-400">
            Never let success get to your head, and never let failure get to
            your heart.
          </span>
        </div>
        <div className="border-ring/30 hover:bg-background/10 col-span-3 row-span-1 flex flex-col justify-between rounded-2xl border p-5 transition-all duration-400 ease-in-out">
          <p className="text-background/75 text-sm">
            Or, Feel free to send a mail
          </p>
          <div className="flex flex-col gap-1">
            <Mail className="text-3xl" />
            <p
              onClick={handleCopy}
              className="text-background relative flex w-fit items-center pr-2 text-lg transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-sky-400"
            >
              movaliyasiddharth23@gmail.com
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
