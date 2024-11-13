import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import FeatureSectionReverse from "../components/FeatureSectionReverse";
import ContactSection from "@/components/ContactSection";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Feature Section */}
      <FeatureSectionReverse />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <footer className="bg-[#34A193] text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Felizey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
