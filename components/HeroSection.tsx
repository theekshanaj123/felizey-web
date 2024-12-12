import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start justify-center text-left min-h-[400px] px-4 md:px-8 lg:px-16 mt-8">
      {/* Main Heading */}
      <h1
        className={`${anton.className} text-white text-[40px] sm:text-[48px] md:text-[64px] lg:text-[96px] font-normal leading-tight tracking-wide capitalize`}
        style={{ maxWidth: "1045px" }}
      >
        Discover Festivals & Events Worldwide with Felizey!
      </h1>

      {/* Subtext */}
      <p
        className="text-white text-[14px] sm:text-[16px] md:text-[20px] font-inter font-bold capitalize mt-4 sm:mt-6"
        style={{ lineHeight: "1.5", maxWidth: "1045px" }}
      >
        Never miss out on amazing festivals and events again. Connect with fellow explorers and make unforgettable memories.
      </p>

      {/* Start Here Button */}
      <div className="mt-4 sm:mt-6">
        <button
          className="px-6 py-3 sm:px-8 sm:py-4 bg-felizeyPurple text-felizeyWhite text-[18px] sm:text-[24px] font-inter font-bold capitalize rounded-lg sm:rounded-[20px] shadow-lg hover:bg-[#D639B3] hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
        >
          Start Here &gt;&gt;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
