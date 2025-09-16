import React from 'react';
import Link from 'next/link';
import SocialButtonGroup from './social-button-group';

const NavigationMenuSocials = () => {
  return (
    <div className="mx-auto flex h-full flex-col justify-center gap-4 bg-white text-xl font-light min-[1367px]:bottom-16 xl:right-1/6 xl:max-[1367px]:top-7/8 2xl:top-5/6 2xl:right-1/16">
      <Link href="tel:+15157661643">515-766-1643</Link>
      <Link href="mailto:contact@siddharthmovaliya.com">
        contact@siddharthmovaliya.com
      </Link>
      <div className="flex gap-4 xl:mt-12 2xl:mt-18">
        <SocialButtonGroup />
      </div>
    </div>
  );
};

export default NavigationMenuSocials;
