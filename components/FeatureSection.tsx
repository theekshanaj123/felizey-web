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
      { threshold: 0.4 }
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
      className={`py-12 md:py-20 flex flex-col md:flex-row items-center transition-transform duration-700 ease-in-out max-w-screen-xl mx-auto ${
        isVisible ? "animate-fade-in-up opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-left md:w-2/3 space-y-6 md:mr-12 pl-0 md:pl-[100px]">
          <h2 className="text-sm md:text-base uppercase tracking-wide font-semibold text-purple mb-4">
            Discover Our Features
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkPurple leading-tight">
            Felizey’s Unique Features
          </h3>
          <p className="text-lg md:text-xl text-mediamGray leading-relaxed max-w-prose">
            Felizey lets you explore top events, manage priorities, and connect with enthusiasts around the globe.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/3 flex justify-center items-center md:ml-12 lg:ml-20 mb-6 md:mb-0">
          <Image
            src="/assets/feature1.png" // Replace with your image path
            alt="Feature Display"
            width={360}
            height={480}
            className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
