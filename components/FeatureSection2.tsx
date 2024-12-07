import React from "react";

const FeatureSection2: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 items-center">
      {/* Section Title */}
      <div className="font-anton text-center text-[3.5rem] text-[#BB17A2] capitalize">
        How it works :)
      </div>

      {/* Top Section */}
      <div className="w-[1004px] h-[450px] flex flex-row flex-shrink-0 rounded-[20px] bg-white relative overflow-hidden">
        {/* Left Part - 2/3 Width */}
        <div className="w-2/3 h-full p-6 flex flex-col justify-center">
          <h2 className="font-anton text-black text-[70px] leading-[84px] capitalize">
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

        {/* Right Part - 1/3 Width */}
        <div className="w-1/3 h-full relative">
          <img
            src="/assets/Device13PMF.png"
            alt="iPhone"
            className="absolute bottom-0 left-0 w-auto h-auto max-h-full"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex gap-4">
        {/* Left Div */}
        <div
          className="w-[494px] h-[450px] flex-shrink-0 rounded-[20px] p-6" // Add padding here
          style={{ background: "#E50AE0" }}
        >
          {/* Header */}
          <h2 className="font-anton text-[#FFF8F8] text-[48px] font-normal leading-[57.6px] capitalize">
            Reach a Community of Festival Lovers
          </h2>

          {/* Paragraph */}
          <p className="font-inter text-white text-[20px] font-bold leading-[24px] capitalize mt-4">
            With Felizey, your event will get the attention it deserves. We
            connect your festival to a passionate, global community of people
            eager to discover new experiences. It’s more than just promoting
            your event—it’s about reaching the right people who are excited to
            join your community and be part of your festival journey.
          </p>
        </div>

        {/* Right Div */}
        <div
          className="w-[494px] h-[450px] flex-shrink-0 rounded-[20px] bg-cover bg-center"
          style={{
            background:
              "url('/assets/RectanglePeople.jpg') lightgray 50% / cover no-repeat",
          }}
        >
          {/* Header */}
          <h2 className="font-anton text-[#BB17A2] text-[40px] font-normal leading-[48px] capitalize p-6">
            Build Buzz and Community Before the Event
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[1004px] h-[450px] flex-shrink-0 rounded-[20px] bg-[#562955] flex flex-row">
        {/* Left Part - 1/3 Width */}
        <div className="w-1/3 h-full relative flex justify-end">
          <img
            src="/assets/Device13PMF.png"
            alt="iPhone"
            className="absolute bottom-0 right-0 w-auto h-auto max-h-full"
          />
        </div>

        {/* Right Part - 2/3 Width */}
        <div className="w-2/3 h-full p-6 flex flex-col justify-center items-end">
          {/* Header */}
          <h2 className="font-anton text-white text-[70px] leading-[84px] capitalize text-right">
            Easily Organize Your Event
          </h2>

          {/* Paragraph */}
          <p className="mt-4 font-inter text-white text-[16px] leading-[19.2px] font-semibold capitalize max-w-[529px] text-right">
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
