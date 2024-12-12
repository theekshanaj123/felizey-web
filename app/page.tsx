import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection1 from "@/components/FeatureSection1"; // Import FeatureSection1
import FeatureSection2 from "@/components/FeatureSection2"; // Import FeatureSection2
import Footer from "@/components/Footer";
import FestivalHeading from "@/components/FestivalHeading"; // Import FestivalHeading

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Background and Styling */}
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
        <Navbar />
        <HeroSection />
      </div>

      {/* Feature Section 1 */}
      <FeatureSection1 />

      {/* Feature Section 2 */}
      {/* <FeatureSection2 /> */}

      {/* Festival Heading Section */}
      <FestivalHeading />

      {/* Footer */}
      <Footer />
    </div>
  );
}
