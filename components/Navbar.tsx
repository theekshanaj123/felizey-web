"use client"; // Add this line at the top of your component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#F8F8FF] shadow-md py-2 px-4">
      <div className="container mx-auto flex items-center justify-between max-w-screen-xl">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/felizey full logo with text.png"
            alt="Felizey Logo"
            width={100}
            height={60}
            className="mr-2"
          />
        </Link>

        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#features"
            className="text-lg font-semibold text-darkPurple hover:text-[#BB17A2] transition duration-300"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-lg font-semibold text-darkPurple hover:text-[#BB17A2] transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-lg font-semibold text-darkPurple hover:text-[#BB17A2] transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-darkPurple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#F8F8FF] py-2 px-4 transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            href="#features"
            className="text-lg font-semibold text-darkPurple hover:text-[#BB17A2] transition duration-300"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-lg font-semibold text-darkPurple hover:text-[#BB17A2] transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-lg font-semibold text-darkPurple hover:text-[#BB17A2] transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
