import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection'; // Importing the Hero Section

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
