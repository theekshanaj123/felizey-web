import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAF8FB] flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-darkPurple text-center mb-8">
          Contact Us
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          {/* Contact Info */}
          <div className="md:w-1/3 space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <FaPhone className="text-[#BB17A2] text-2xl mr-2" />
              <p className="text-lg text-mediamGray">+1 (555) 123-4567</p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-[#BB17A2] text-2xl mr-2" />
              <p className="text-lg text-mediamGray">info@felizey.com</p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#BB17A2] text-2xl mr-2" />
              <p className="text-lg text-mediamGray">123 Event Ave, City, Country</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3 flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold text-darkPurple">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#3b5998] text-3xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#1DA1F2] text-3xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#C13584] text-3xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/3 space-y-4 text-center md:text-left">
            <h3 className="text-xl font-semibold text-darkPurple">Send Us a Message</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-lightGray focus:outline-none focus:border-[#BB17A2]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-lightGray focus:outline-none focus:border-[#BB17A2]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-lightGray focus:outline-none focus:border-[#BB17A2]"
              ></textarea>
              <button type="submit" className="w-full py-3 bg-[#BB17A2] text-white font-semibold rounded-lg hover:bg-[#9A137D] transition duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
