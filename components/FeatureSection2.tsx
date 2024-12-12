import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const FeatureSection2: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 items-center py-8 md:py-0 px-6 md:px-0">
      {/* Section Title */}
      <div
        className={`${anton.className} text-center text-[3.5rem] text-[#BB17A2] capitalize`}
      >
        How it works :)
      </div>

      {/* Top Section */}
      <div className="w-full md:w-[1004px] h-auto md:h-[450px] flex flex-col md:flex-row md:flex-shrink-0 rounded-[20px] bg-white relative overflow-hidden py-4 md:py-0">
        {/* Left Part - 2/3 Width */}
        <div className="w-full md:w-2/3 h-full p-6 flex flex-col justify-center">
          <h2
            className={`${anton.className} text-black text-[40px] md:text-[70px] leading-[48px] md:leading-[84px] capitalize`}
          >
            Easily Organize Your Event
          </h2>
          <p className="mt-4 font-inter text-black text-[16px] leading-[19.2px] font-semibold capitalize max-w-[529px]">
            We understand that planning a festival can be overwhelming. Felizey
            makes the event creation process simple and intuitive. From the
            moment you start, we help you organize every detail whether it’s
            setting up ticketing, creating event pages, or managing the crowd.
            We’ve got you covered, so you can focus on what matters most:
            crafting a unique, amazing experience for your attendees.
          </p>
        </div>

        {/* Right Part - 1/3 Width (removed for mobile) */}
        <div className="hidden md:block w-1/3 h-full relative">
          <img
            src="/assets/Device13PMF.png"
            alt="iPhone"
            className="absolute bottom-0 left-0 w-auto h-auto max-h-full"
          />
        </div>
      </div>

      {/* Middle Section*/}
      <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-4 py-0 md:py-0">
        {/* Left Div */}
        <div
          className="w-full md:w-[494px] h-auto md:h-[450px] flex-shrink-0 rounded-[20px] p-6"
          style={{ background: "#E50AE0" }}
        >
          <h2
            className={`${anton.className} text-[#FFF8F8] text-[32px] md:text-[48px] font-normal leading-[38.4px] md:leading-[57.6px] capitalize`}
          >
            Reach a Community of Festival Lovers
          </h2>

          <p className="font-inter text-white text-[18px] md:text-[20px] font-bold leading-[22px] md:leading-[24px] capitalize mt-4">
            With Felizey, your event will get the attention it deserves. We
            connect your festival to a passionate, global community of people
            eager to discover new experiences. It’s more than just promoting
            your event—it’s about reaching the right people who are excited to
            join your community and be part of your festival journey.
          </p>
        </div>

        {/* Right Div */}
        <div
          className="w-full md:w-[494px] h-auto md:h-[450px] flex-shrink-0 rounded-[20px] bg-cover bg-center"
          style={{
            background:
              "url('/assets/RectanglePeople.jpg') lightgray 50% / cover no-repeat",
          }}
        >
          <h2
            className={`${anton.className} text-[#BB17A2] text-[32px] md:text-[40px] font-normal leading-[38.4px] md:leading-[48px] capitalize p-6`}
          >
            Build Buzz and Community Before the Event
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full md:w-[1004px] h-auto md:h-[450px] flex-shrink-0 rounded-[20px] bg-[#562955] flex flex-col md:flex-row py-0 md:py-0">
        {/* Left Part - 1/3 Width (removed for mobile) */}
        <div className="w-full md:w-1/3 h-full relative flex justify-end">
          <img
            src="/assets/Device13PMS.png"
            alt="iPhone"
            className="absolute bottom-0 right-0 w-auto h-auto max-h-full"
          />
        </div>

        {/* Right Part - 2/3 Width */}
        <div className="w-full md:w-2/3 h-full p-6 flex flex-col justify-center items-end">
          <h2
            className={`${anton.className} text-white text-[40px] md:text-[70px] leading-[48px] md:leading-[84px] capitalize text-right`}
          >
            Easily Organize Your Event
          </h2>

          <p className="mt-4 font-inter text-white text-[16px] md:text-[16px] leading-[19.2px] font-semibold capitalize max-w-[529px] text-right">
            We understand that planning a festival can be overwhelming. Felizey
            makes the event creation process simple and intuitive. From the
            moment you start, we help you organize every detail whether it’s
            setting up ticketing, creating event pages, or managing the crowd.
            We’ve got you covered, so you can focus on what matters most:
            crafting a unique, amazing experience for your attendees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
