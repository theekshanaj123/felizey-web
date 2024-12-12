import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161221] py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          {/* Logo Placeholder */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#BB17A2] rounded-full"></div>
            <h1 className="text-[#D9D9D9] font-bold text-xl">Felizey</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          <a
            href="#about"
            className="text-[#D9D9D9] hover:text-[#BB17A2] transition duration-200"
          >
            About Us
          </a>
          <a
            href="#features"
            className="text-[#D9D9D9] hover:text-[#BB17A2] transition duration-200"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-[#D9D9D9] hover:text-[#BB17A2] transition duration-200"
          >
            Contact
          </a>
          <a
            href="#privacy"
            className="text-[#D9D9D9] hover:text-[#BB17A2] transition duration-200"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-[#BB17A2] text-white hover:bg-[#D9D9D9] transition duration-200"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-white"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-[#BB17A2] text-white hover:bg-[#D9D9D9] transition duration-200"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-white"></i>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex justify-center items-center rounded-full bg-[#BB17A2] text-white hover:bg-[#D9D9D9] transition duration-200"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-white"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-[#342D34] pt-6 text-center text-[#5B5B5B] text-sm">
        <p>&copy; {new Date().getFullYear()} Felizey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;