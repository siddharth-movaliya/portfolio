import React from 'react';

const HeroText = () => {
  return (
    <div className="pointer-events-none z-10 grid w-fit grid-cols-7 grid-rows-4 text-[144px] leading-none font-light tracking-wide uppercase">
      <span className="">
        Creati<span className="italic">v</span>e
      </span>
      <span className="col-span-full col-start-3 row-start-2">
        Designer <span className="italic">&</span>
      </span>
      <span className="col-start-2 row-start-3 text-center">
        Pr
        <span className="italic">o</span>fessi
        <span className="italic">o</span>nal
      </span>
      <span className="col-span-4 col-start-4 row-start-4 text-right">
        De<span className="italic">v</span>el
        <span className="italic">O</span>
        per
      </span>
    </div>
  );
};

export default HeroText;
