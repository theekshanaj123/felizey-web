import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <nav className="bg-[#F8F8FF] shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-5xl font-bold text-[#34A193]">Felizey</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="overflow-hidden relative h-screen bg-[#F8F8FF] flex items-center">
        {/* Green SVG Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="300 -100 100 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="200"
              cy="400"
              r="400"
              fill="#FFA500"
              className="blur-2xl"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left side */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Discover Festivals & Events Worldwide with Felizey!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#000000]">
              Never miss out on amazing festivals and events again. Connect
              with fellow explorers and make unforgettable memories.
            </p>
            {/* <button className="mt-6 px-8 py-3 bg-white text-[#FFA500] text-lg font-semibold rounded-md shadow-md">
              Get Started
            </button> */}
          </div>

          {/* Right side - iPhone Mockup Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="https://knjxysvpnobgllbfvtrj.supabase.co/storage/v1/object/public/web/iPhone%2014%20Pro%20Mockup%20Free%20PSD.png"
              alt="iPhone Mockup"
              width={3300}
              height={3600}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
