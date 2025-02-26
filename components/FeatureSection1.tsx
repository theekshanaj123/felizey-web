import React from "react";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const FeatureSection1: React.FC = () => {
  return (
    <section className="bg-[#161221] py-20 px-6 flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-12">
        {/* Top Section with 'Your Next Festival Adventure' and 'Start Here >>' in one line */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left">
          {/* 'Your Next Festival Adventure' Heading */}
          <h2
            style={{
              color: "#D9D9D9",
              fontFamily: "'Franklin Gothic Medium', sans-serif",
              fontSize: "32px",
              fontWeight: 400,
            }}
            className="sm:text-4xl text-2xl"
          >
            Your Next Festival Adventure
          </h2>

          {/* 'Start Here >>' Button */}
          <button
            style={{
              color: "#BB17A2",
              fontFamily: anton.style.fontFamily,
              fontSize: "44px",
              textTransform: "capitalize",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            className="sm:text-4xl text-2xl mt-4 sm:mt-0"
          >
            Start Here &gt;&gt;
          </button>
        </div>

        {/* Layout for screenshot and text sections */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:space-x-6 w-full">
          {/* Screenshot Image */}
          <div className="flex-shrink-0 mb-8 sm:mb-0">
            <img
              src="https://votcesciwpymmsijdcvm.supabase.co/storage/v1/object/public/new/offical/Device13PM.webp"
              alt="Mobile showing the Felizey app"
              width="350"
              height="200"
              className="object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center sm:items-end text-right space-y-6 text-white">
            {/* Description Text */}
            <p
              style={{
                maxWidth: "559px",
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "24px",
                lineHeight: "1.6",
                letterSpacing: "1.44px",
              }}
              className="text-center sm:text-right text-sm"
            >
              &quot;Get <span style={{ color: "#BB17A2" }}>Felizey</span> on
              your device and unlock a world of festivals and exclusive events!
              Download now to explore, connect, and experience unforgettable
              moments, all in one app.&quot;
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-row gap-6 justify-center sm:justify-end items-center sm:items-center">
              {/* Google Play Button */}
              <a
                href="#"
                style={{
                  display: "inline-block",
                  width: "180px", // Adjusted width for mobile
                  height: "56px", // Adjusted height for mobile
                  backgroundImage: `url(/assets/googleplay.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label="Download on Google Play"
              ></a>

              {/* Apple App Store Button */}
              <a
                href="#"
                style={{
                  display: "inline-block",
                  width: "160px", // Adjusted width for mobile
                  height: "48px", // Adjusted height for mobile
                  backgroundImage: `url(/assets/appleappstore.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  border: "1px solid #FAF8FB",
                }}
                aria-label="Download on the App Store"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection1;
