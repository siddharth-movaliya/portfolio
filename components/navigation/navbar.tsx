import React from 'react';

const NavBar = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className="group pointer-events-none sticky top-6 z-999 m-6 flex justify-between text-5xl font-light text-white uppercase mix-blend-difference">
      {/* Nav Icon */}
      <div className="pointer-events-auto z-999 flex cursor-pointer flex-col">
        <div className="flex">
          <span>S</span>
          <div className="flex overflow-hidden">
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-0">
              i
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-50">
              d
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-100">
              d
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-150">
              h
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-200">
              a
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-250">
              r
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-300">
              t
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-350">
              h
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="pl-6">M</span>
          <div className="flex overflow-hidden">
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-0">
              o
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-50">
              v
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-100">
              a
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-150">
              l
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-200">
              i
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-250">
              y
            </span>
            <span className="translate-y-full transition group-hover:translate-0 group-hover:delay-300">
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
          <span className="translate-y-full transition delay-100 group-hover:translate-0 group-hover:delay-0">
            E
          </span>
          <span className="translate-y-full transition delay-50 group-hover:translate-0 group-hover:delay-50">
            N
          </span>
          <span className="translate-y-full transition delay-0 group-hover:translate-0 group-hover:delay-100">
            U
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
