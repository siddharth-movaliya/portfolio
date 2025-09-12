import React from 'react';

const WorkTagline = () => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 font-light md:flex-row md:gap-0 lg:mx-20 xl:mx-36 xl:mt-8 2xl:mx-72 2xl:mt-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.5rem] xl:leading-15">
        Shaping the web with ideas that last.
        <br />
        Together we&rsquo;ll craft digital experiences
        <br className="hidden md:block" /> that redefine standards.
      </h1>
      <p className="max-w-48 text-sm md:text-base xl:max-w-60 xl:text-lg xl:leading-8">
        No clutter, no compromise—just meaningful products built for the future.
      </p>
    </div>
  );
};

export default WorkTagline;
