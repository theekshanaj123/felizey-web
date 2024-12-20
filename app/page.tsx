"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection1 from "@/components/FeatureSection1";
import FeatureSection2 from "@/components/FeatureSection2";
import Footer from "@/components/Footer";
import FestivalHeading from "@/components/FestivalHeading";

export default function Home() {
  const featureSection1Ref = useRef<HTMLDivElement>(null);
  const featureSection2Ref = useRef<HTMLDivElement>(null);

  const scrollToFeatureSection1 = () => {
    featureSection1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatureSection2 = () => {
    featureSection2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div
        className="max-w-screen-xl mx-auto px-6"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(22, 18, 33, 0.1), #161221), 
            linear-gradient(to right, #161221, rgba(22, 18, 33, 0.3) 20%, rgba(22, 18, 33, 0.3) 80%, #161221), 
            url('/assets/Herobg.jpg')
          `,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar
          onStartHereClick={scrollToFeatureSection1}
          onHowItWorksClick={scrollToFeatureSection2}
        />
        <HeroSection />
      </div>

      <div ref={featureSection1Ref}>
        <FeatureSection1 />
      </div>

      <div ref={featureSection2Ref}>
        <FeatureSection2 />
      </div>

      <FestivalHeading />
      <Footer />
    </div>
  );
}
