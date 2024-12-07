import React from "react";
import Image from "next/image";

const FeatureSection1: React.FC = () => {
  return (
    <section className="bg-[#161221] py-16 px-6 flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-12">
        {/* Top Section with 'Your Next Festival Adventure' and 'Start Here >>' in one line */}
        <div className="flex items-center space-x-6 text-center">
          {/* 'Your Next Festival Adventure' Heading */}
          <h2
            style={{
              color: "#D9D9D9",
              fontFamily: "'Franklin Gothic Medium', sans-serif",
              fontSize: "32px",
              fontWeight: 400,
            }}
          >
            Your Next Festival Adventure
          </h2>

          {/* 'Start Here >>' Button */}
          <button
            style={{
              color: "#BB17A2",
              fontFamily: "Anton, sans-serif",
              fontSize: "44px",
              textTransform: "capitalize",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start Here &gt;&gt;
          </button>
        </div>

        {/* Layout for screenshot and text sections */}
        <div className="flex flex-row justify-between items-center space-x-6 w-full">
          {/* Mobile Screenshot Image */}
          <div
            style={{
              width: "251.42px",
              height: "507.031px",
              transform: "rotate(-11.124deg)",
            }}
          >
            <Image
              src="/assets/screenshot.png"
              alt="Mobile showing the Felizey app"
              width={251}
              height={507}
              className="object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center text-center space-y-6 text-white">
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
            >
              "Get{" "}
              <span style={{ color: "#BB17A2" }}>
                Felizey
              </span>{" "}
              on your device and unlock a world of festivals and exclusive events! Download now to explore, connect, and experience unforgettable moments, all in one app."
            </p>

            {/* App Download Buttons */}
            <div className="flex gap-6 justify-center items-center">
              {/* Google Play Button */}
              <a
                href="#"
                style={{
                  display: "inline-block",
                  width: "255px",
                  height: "76px",
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
                  width: "216px",
                  height: "68px",
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
