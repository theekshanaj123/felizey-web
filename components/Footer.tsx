import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkPurple text-white py-8">
      <div className="container mx-auto px-6 text-center lg:text-left">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          {/* About Section */}
          <div className="flex-1 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">About Felizey</h3>
            <p className="text-sm text-lightGray">
              Discover exciting events and festivals worldwide. Join us and celebrate life’s most memorable moments!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm text-lightGray space-y-2">
              <li>
                <a href="#about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white">Careers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-lightGray">Email: support@felizey.com</p>
            <p className="text-sm text-lightGray">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-sm text-lightGray text-center lg:text-left">
          <p>&copy; {new Date().getFullYear()} Felizey. All rights reserved.</p>
          <p>
            Website developed by{" "}
            <a href="https://efoit.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">
              Efoit Company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
