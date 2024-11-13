// components/Navbar.js
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#F8F8FF] shadow-md p-4">
      <div className="container mx-auto flex items-center">
        {/* Icon */}
        <div className="mr-3">
          {/* Replace this with an actual icon component or image */}
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#34A193]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.31 8l5.74 9.94M9.69 8H20M4.26 15.95L9.69 8l5.73 9.94" />
          </svg>
        </div>

        {/* Brand Text */}
        <Link href="/" className="text-2xl font-bold text-[#34A193]">
          Felizey
        </Link>
      </div>
    </nav>
  );
}
