import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-transparent">
      {/* Logo */}
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src="../assets/felizeylogo.png" 
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#start-here"
          className="text-[#FAF8FB] text-lg font-bold capitalize"
        >
          Start here
        </a>
        <a
          href="#backstage"
          className="text-[#FAF8FB] text-lg font-bold capitalize"
        >
          Backstage
        </a>
        <a
          href="#say-hello"
          className="text-[#FAF8FB] text-lg font-bold capitalize"
        >
          Say hello
        </a>
        <a
          href="#how-it-works"
          className="text-[#FAF8FB] text-lg font-bold capitalize"
        >
          How it works
        </a>
      </div>

      {/* Hamburger Menu (Mobile view) */}
      <div className="md:hidden">
        <button className="text-[#FAF8FB] text-2xl">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Download Button */}
      <div>
        <button
          className="px-4 py-2 bg-[#BB17A2] text-[#FAF8FB] text-lg font-bold rounded-lg"
        >
          Download now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
