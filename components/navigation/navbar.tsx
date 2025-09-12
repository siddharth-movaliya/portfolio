import React from 'react';

const NavBar = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className="group pointer-events-none sticky top-6 z-999 m-6 flex justify-between text-2xl font-light text-white uppercase mix-blend-difference lg:text-3xl xl:text-4xl 2xl:text-5xl">
      {/* Nav Icon */}
      <div className="pointer-events-auto z-999 flex cursor-pointer flex-col">
        <div className="flex">
          <span>S</span>
          <div className="flex overflow-hidden">
            <span className="transition group-hover:translate-0 group-hover:delay-0 lg:translate-y-full">
              i
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-50 lg:translate-y-full">
              d
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-100 lg:translate-y-full">
              d
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-150 lg:translate-y-full">
              h
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-200 lg:translate-y-full">
              a
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-250 lg:translate-y-full">
              r
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-300 lg:translate-y-full">
              t
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-350 lg:translate-y-full">
              h
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-6">M</span>
          <div className="flex overflow-hidden">
            <span className="transition group-hover:translate-0 group-hover:delay-0 lg:translate-y-full">
              o
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-50 lg:translate-y-full">
              v
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-100 lg:translate-y-full">
              a
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-150 lg:translate-y-full">
              l
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-200 lg:translate-y-full">
              i
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-250 lg:translate-y-full">
              y
            </span>
            <span className="transition group-hover:translate-0 group-hover:delay-300 lg:translate-y-full">
              a
            </span>
          </div>
        </div>
      </div>
      {/* Nav Menu */}
      <div
        className="pointer-events-auto z-999 flex h-fit cursor-pointer"
        onClick={toggleMenu}
      >
        <span>M</span>
        <div className="flex overflow-hidden">
          <span className="transition delay-100 group-hover:translate-0 group-hover:delay-0 lg:translate-y-full">
            E
          </span>
          <span className="transition delay-50 group-hover:translate-0 group-hover:delay-50 lg:translate-y-full">
            N
          </span>
          <span className="transition delay-0 group-hover:translate-0 group-hover:delay-100 lg:translate-y-full">
            U
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
