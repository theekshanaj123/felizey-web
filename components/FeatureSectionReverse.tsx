import Image from "next/image";

const FeatureSectionLeftImage: React.FC = () => {
  return (
    <section className="py-12 md:py-20 flex items-center relative max-w-screen-xl mx-auto">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2/3 h-full rounded-full blur-3xl opacity-30 md:opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center md:pr-8 lg:pr-16">
          <Image
            src="/assets/feature2.png" // Replace with your image path
            alt="Feature Image"
            width={450}
            height={550}
            className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Text Content */}
        <div className="text-left md:w-1/2 space-y-6 md:pl-12">
          <h2 className="text-sm md:text-base uppercase font-semibold text-purple tracking-wide mb-4 transition-colors duration-300 hover:text-darkPurple">
            Exclusive Feature
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkPurple leading-tight transition-all duration-300">
            Experience It Like Never Before
          </h3>
          <p className="text-lg md:text-xl text-mediamGray leading-relaxed max-w-prose">
            Discover how this feature enhances your experience, bringing efficiency and delight to every interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionLeftImage;
