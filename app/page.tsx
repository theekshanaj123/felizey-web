import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FeatureSectionReverse from "@/components/FeatureSectionReverse";
import ContactSection from "@/components/ContactSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

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

      {/* AboutUs Section */}
      <AboutUs />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
      
    </div>
  );
};

export default Home;
