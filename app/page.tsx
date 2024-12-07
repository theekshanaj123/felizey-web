import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection1 from "@/components/FeatureSection1"; // Import FeatureSection1

export default function Home() {
  return (
    <div className="min-h-screen">
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

      {/* Feature Section */}
      <FeatureSection1 />
    </div>
  );
}
