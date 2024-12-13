import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161221] py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Tagline */}
<div className="flex flex-col items-center md:items-start space-y-2">
    {/* Logo Placeholder */}
    <div className="flex items-center space-x-2">
        <img src="../assets/felizey full logo with text.png" alt="Felizey Logo" className="w-40 h-20" />
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

        {/* Round Divs for Social Media Links */}
        <div className="flex space-x-6">
          <div className="w-10 h-10 bg-[#BB17A2] rounded-full hover:bg-[#D9D9D9] transition duration-200 flex justify-center items-center">
            <a
              href="#"
              className="w-4 h-4 flex rounded-full text-white"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="w-10 h-10 bg-[#BB17A2] rounded-full hover:bg-[#D9D9D9] transition duration-200 flex justify-center items-center">
            <a
              href="#"
              className="w-4 h-4 flex rounded-full text-white"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="w-10 h-10 bg-[#BB17A2] rounded-full hover:bg-[#D9D9D9] transition duration-200 flex justify-center items-center">
            <a
              href="#"
              className="w-4 h-4 flex rounded-full text-white"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
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
