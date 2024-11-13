import Image from "next/image";

const FeatureSectionLeftImage: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-r from-lightGray to-white flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center md:pr-8 lg:pr-16">
          <Image
            src="/assets/feature2.png" // Replace with your image path
            alt="Feature Image"
            width={400} // Adjusted width for better layout balance
            height={500} // Adjusted height for proportional scaling
            className="rounded-lg shadow-xl mx-auto transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="text-left md:w-1/2 space-y-4 md:pl-12">
          <h2 className="text-xs md:text-sm uppercase font-semibold text-purple tracking-wide mb-2">
            Exclusive Feature
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-darkPurple mb-4 leading-snug">
            Experience Our Feature Like Never Before
          </h3>
          <p className="text-base md:text-lg text-mediamGray leading-relaxed">
            Discover how this feature enhances your experience, bringing efficiency and delight to every interaction. Our tools are crafted for simplicity and impact, so you can focus on what matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionLeftImage;
