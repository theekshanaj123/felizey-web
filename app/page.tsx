import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection1 from "@/components/FeatureSection1"; // Import FeatureSection1
import FeatureSection2 from "@/components/FeatureSection2"; // Import FeatureSection2

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Background and Styling */}
      <div
        className="max-w-screen-xl mx-auto px-6"
        style={{
          backgroundImage:
            "url('../assets/Herobg.jpg'), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #161221 100%)", // Gradient fading to #161221
          backgroundPosition: "bottom", // Ensures the image is aligned to the bottom of the div
          backgroundSize: "cover", // Ensures the image covers the div
          backgroundRepeat: "no-repeat", // Prevents repeating of the image
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <main>
          <div className="max-w-screen-lg mx-auto px-6">
            <HeroSection />
          </div>
        </main>
      </div>

      {/* Feature Section 1 */}
      <FeatureSection1 />

      {/* Feature Section 2 */}
      <FeatureSection2 />

      <h1 className="font-anton text-white text-center text-[64px] font-normal capitalize pt-40 pb-6">
        Let’s Bring{" "}
        <span className="text-[#BB17A2]">Your Festival to Life!</span>
      </h1>
    </div>
  );
}
