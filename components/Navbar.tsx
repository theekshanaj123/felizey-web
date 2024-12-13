"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 md:py-6 bg-transparent relative">
      {/* Logo */}
      <div className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0">
        <img
          src="../assets/felizeylogo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Links (Desktop View) */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#start-here"
          className="group text-[#FAF8FB] text-lg font-bold capitalize relative"
        >
          Start here
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#BB17A2] scale-x-0 group-hover:scale-x-100 transition-all"></span>
        </a>
        <a
          href="#how-it-works"
          className="group text-[#FAF8FB] text-lg font-bold capitalize relative"
        >
          How it works
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#BB17A2] scale-x-0 group-hover:scale-x-100 transition-all"></span>
        </a>
        <a
          href="#backstage"
          className="group text-[#FAF8FB] text-lg font-bold capitalize relative"
        >
          Backstage
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#BB17A2] scale-x-0 group-hover:scale-x-100 transition-all"></span>
        </a>
        <a
          href="#say-hello"
          className="group text-[#FAF8FB] text-lg font-bold capitalize relative"
        >
          Say hello
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#BB17A2] scale-x-0 group-hover:scale-x-100 transition-all"></span>
        </a>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className="md:hidden relative z-20">
  <button
    className="text-[#FAF8FB] text-2xl"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle Menu"
  >
    {menuOpen ? "✖" : "☰"}
  </button>
</div>

{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-[#161221] text-[#FAF8FB] flex flex-col items-center gap-4 py-6 md:hidden z-10">
    <a href="#start-here" className="text-lg font-bold capitalize">
      Start here
    </a>
    <a href="#how-it-works" className="text-lg font-bold capitalize">
      How it works
    </a>
    <a href="#backstage" className="text-lg font-bold capitalize">
      Backstage
    </a>
    <a href="#say-hello" className="text-lg font-bold capitalize">
      Say hello
    </a>
    <button className="px-4 py-2 bg-[#BB17A2] text-[#FAF8FB] text-lg font-bold rounded-lg mt-4">
      Download now
    </button>
  </div>
)}

      {/* Download Button */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-[#BB17A2] text-[#FAF8FB] text-lg font-bold rounded-lg shadow-lg hover:bg-[#D639B3] hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
          Download now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
