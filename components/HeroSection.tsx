import React from "react";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] bg-lightGray flex items-center justify-center py-12 sm:py-8 md:py-20">
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-lightGray via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-8 flex flex-col md:flex-row items-center justify-between text-darkGray z-10 max-w-screen-xl">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide text-darkPurple drop-shadow-lg">
            Discover Festivals & Events Worldwide with Felizey!
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-mediamGray font-light max-w-md drop-shadow-sm">
            Join a world of explorers and never miss unforgettable events again. Find festivals, connect, and celebrate together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-8 justify-center sm:justify-start">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg text-white text-md sm:text-lg font-semibold bg-darkPurple shadow-md transition-all duration-300 ease-in-out transform hover:bg-purple hover:shadow-lg hover:scale-105"
            >
              <FaGooglePlay className="w-6 h-6 mr-3" />
              Get it on Playstore
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg text-white text-md sm:text-lg font-semibold bg-darkPurple shadow-md transition-all duration-300 ease-in-out transform hover:bg-purple hover:shadow-lg hover:scale-105"
            >
              <FaApple className="w-6 h-6 mr-3" />
              Download on Appstore
            </a>
          </div>
        </div>

        {/* Right side - iPhone Mockup Image */}
        <div className="hidden md:flex w-full md:w-1/2 mt-10 md:mt-0 justify-center">
          <Image
            src="/assets/mock.png"
            alt="Mock Image"
            width={350}
            height={400}
            className="transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
