import React from 'react';

const FooterName = () => {
  return (
    <div className="relative flex aspect-[1501/282] w-full items-end justify-center overflow-hidden bg-transparent">
      <div className="relative z-0 h-full w-[150%] translate-y-[%] text-center font-sans text-[420px] leading-none text-white">
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
