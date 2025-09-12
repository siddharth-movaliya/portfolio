import React from 'react';

const FooterName = () => {
  return (
    <div className="relative flex aspect-[1501/282] w-full items-end justify-center overflow-hidden bg-transparent">
      <div className="xs:text-[91px] relative z-0 h-full w-[150%] translate-y-[%] text-center font-sans text-[88px] leading-none text-white min-[769px]:text-[195px] sm:text-[101px] md:text-[185px] lg:text-[240px] xl:text-[330px] 2xl:text-[400px]">
        Siddharth
      </div>
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`pointer-events-none absolute inset-0 layer${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterName;
