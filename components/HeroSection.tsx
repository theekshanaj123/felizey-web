import React from 'react';
import { Anton } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
});


const HeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-start justify-center bg-cover bg-center text-left min-h-[600px] px-6 md:px-16 lg:px-32"
      style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}
    >
      {/* Main Heading */}
      <h1
        className={`${anton.className} text-white text-[96px] font-normal leading-[0.99] tracking-[5.76px] capitalize`}
        style={{ maxWidth: '1045px', flexShrink: 0 }}
      >
        Discover Festivals & Events Worldwide with Felizey!
      </h1>

      {/* Subtext */}
      <p
        className="text-white text-[20px] font-inter font-bold capitalize mt-6"
        style={{ lineHeight: 'normal', maxWidth: '1045px' }}
      >
        Never miss out on amazing festivals and events again. Connect with fellow explorers and make unforgettable memories.
      </p>

      {/* Start Here Button */}
      <div className="mt-8">
        <button
          className="w-[238px] h-[64px] bg-[#BB17A2] text-white text-[24px] font-inter font-bold capitalize text-center rounded-[20px]"
          style={{ flexShrink: 0 }}
        >
          Start Here
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
