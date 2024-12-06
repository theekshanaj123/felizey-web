import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-[94px] px-[88px] bg-[#161221]">
      {/* Logo */}
      <div className="w-[48px] h-[50.595px] flex-shrink-0">
        <img
          src="../assets/felizeylogo.png" 
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Links (Center horizontally) */}
      <div className="flex items-center justify-center flex-grow gap-[30px] h-[24px] hidden md:flex">
        <a
          href="#start-here"
          className="text-[#FAF8FB] text-[20px] font-bold leading-none capitalize text-center"
        >
          Start here
        </a>
        <a
          href="#backstage"
          className="text-[#FAF8FB] text-[20px] font-bold leading-none capitalize text-center"
        >
          Backstage
        </a>
        <a
          href="#say-hello"
          className="text-[#FAF8FB] text-[20px] font-bold leading-none capitalize text-center"
        >
          Say hello
        </a>
        <a
          href="#how-it-works"
          className="text-[#FAF8FB] text-[20px] font-bold leading-none capitalize text-center"
        >
          How it works
        </a>
      </div>

      {/* Hamburger Menu (Mobile view) */}
      <div className="md:hidden flex items-center">
        <button className="text-[#FAF8FB] text-[24px]">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Download Button */}
      <div className="w-[193px] h-[50px] flex-shrink-0">
        <button
          className="w-full h-full bg-[#BB17A2] text-[#FAF8FB] text-[20px] font-bold capitalize text-center rounded-[20px]" // updated border-radius
        >
          Download now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
