import React from 'react';

const HeroText = () => {
  return (
    <div className="xs:text-[2.20rem] pointer-events-none z-10 grid w-fit grid-cols-7 grid-rows-4 text-[1.8rem] leading-none font-light tracking-wide uppercase sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[144px]">
      <span className="">
        Creati<span className="italic">v</span>e
      </span>
      <span className="col-span-full col-start-3 row-start-2">
        Designer <span className="italic">&</span>
      </span>
      <span className="row-start-3 text-center lg:col-start-2">
        Pr
        <span className="italic">o</span>fessi
        <span className="italic">o</span>nal
      </span>
      <span className="col-span-4 col-start-4 row-start-4 text-right sm:col-start-3 sm:ml-0 lg:col-start-4">
        De<span className="italic">v</span>el
        <span className="italic">O</span>
        per
      </span>
    </div>
  );
};

export default HeroText;
