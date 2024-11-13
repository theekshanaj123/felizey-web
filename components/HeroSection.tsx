import Image from "next/image";
import Button from "../components/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] bg-lightGray flex items-center justify-center py-12 sm:py-8 md:py-20">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        <img
          src="/assets/party-with-blurred.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-lightGray via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-8 flex flex-col md:flex-row items-center justify-between text-darkGray z-10">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide text-darkPurple drop-shadow-md">
            Discover Festivals & Events Worldwide with Felizey!
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-xl text-mediamGray font-light max-w-md drop-shadow-sm">
            Join a world of explorers and never miss unforgettable events again. Find festivals, connect, and celebrate together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-8 justify-center sm:justify-start">
            <Button
              text="Get it on Playstore"
              link="https://play.google.com"
              icon="playstore"
            />
            <Button
              text="Download on Appstore"
              link="https://www.apple.com/app-store/"
              icon="appstore"
            />
          </div>
        </div>

        {/* Right side - iPhone Mockup Image */}
        <div className="hidden md:flex w-full md:w-1/2 mt-10 md:mt-0 justify-center">
          <Image
            src="/assets/mock.png"
            alt="Mock Image"
            width={350}
            height={400}
            className="transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
