import React from 'react';
import { Button } from './button';
import { BiCalendar } from 'react-icons/bi';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const BookACallButton = ({ className }: { className?: string }) => {
  return (
    <Button
      size="lg"
      className={cn(
        'dark group hover:bg-foreground relative items-center overflow-hidden rounded-full hover:cursor-pointer',
        className
      )}
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
  );
};

export default BookACallButton;
