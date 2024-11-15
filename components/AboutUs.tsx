import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-lightGray py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-8 max-w-screen-xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkPurple">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-mediamGray font-light max-w-3xl mx-auto">
            Felizey is your go-to platform to discover exciting festivals and events from around the world. We aim to bring people together, fostering connections, and creating unforgettable memories. Our mission is to make it easier for you to explore and celebrate life’s most special moments.
          </p>
        </div>

        {/* Center-aligned buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white text-lg sm:text-xl font-semibold bg-darkPurple shadow-md transition-all duration-300 ease-in-out transform hover:bg-purple hover:shadow-lg hover:scale-105"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-darkPurple text-lg sm:text-xl font-semibold border-2 border-darkPurple transition-all duration-300 ease-in-out transform hover:bg-darkPurple hover:text-white hover:scale-105"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
