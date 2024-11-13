"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FeatureSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`py-10 md:py-16 bg-gradient-to-r from-lightGray to-white flex flex-col md:flex-row items-center transition-all duration-700 ease-in-out ${
        isVisible ? "animate-fade-in-up opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Text Content */}
        <div className="text-left md:w-2/3 space-y-4 md:mr-10 pl-[0px] md:pl-[120px]">
          <h2 className="text-xs md:text-sm uppercase tracking-wide font-semibold text-purple mb-2">
            Discover Our Features
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-darkPurple mb-6 leading-snug">
            Felizey’s Unique Features
          </h3>
          <p className="text-base md:text-lg text-mediamGray leading-relaxed">
            Felizey lets you explore top events, manage priorities, and connect with enthusiasts around the globe. Plan effectively, discover new connections, and maximize your festival experience like never before.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/3 flex justify-center items-center md:ml-10 lg:ml-16 mb-6 md:mb-0">
          <Image
            src="/assets/feature1.png" // Replace with your image path
            alt="Feature Display"
            width={320} // Adjusted width for balanced layout
            height={420} // Adjusted height for balanced layout
            className="rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
