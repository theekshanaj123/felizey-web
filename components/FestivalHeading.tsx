import React from "react";

const FestivalHeading: React.FC = () => {
  return (
    <section className="relative bg-[#161221] text-white text-center py-20 sm:py-40 px-4 sm:px-0 overflow-hidden">
      {/* Heading */}
      <h1 className="font-anton text-white text-center text-[32px] sm:text-[64px] font-normal capitalize relative z-10">
        Let’s Bring{" "}
        <span className="text-[#BB17A2] glow-effect">
          Your Festival to Life!
        </span>
      </h1>

      {/* Sparkle Effects */}
      <div className="absolute top-[10%] left-[15%] sm:top-1/4 sm:left-1/4 w-10 h-10 bg-[#BB17A2] rounded-full opacity-50 blur-md animate-pulse"></div>
      <div className="absolute top-[40%] left-[20%] sm:top-1/2 sm:left-1/3 w-16 h-16 bg-[#BB17A2] rounded-full opacity-40 blur-lg animate-pulse"></div>
      <div className="absolute bottom-[35%] right-[10%] sm:bottom-1/3 sm:right-1/4 w-12 h-12 bg-[#FFFFFF] rounded-full opacity-30 blur-sm animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[25%] sm:bottom-1/4 sm:right-1/3 w-8 h-8 bg-[#BB17A2] rounded-full opacity-60 blur-md animate-pulse"></div>
      <div className="absolute top-[25%] right-[5%] sm:top-1/3 sm:right-1/4 w-6 h-6 bg-[#FFFFFF] rounded-full opacity-20 blur-sm animate-pulse"></div>
      <div className="absolute bottom-[15%] left-[10%] sm:bottom-1/4 sm:left-1/5 w-14 h-14 bg-[#BB17A2] rounded-full opacity-50 blur-lg animate-pulse"></div>
    </section>
  );
};

export default FestivalHeading;
