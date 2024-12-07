import React from "react";

const FeatureSection3: React.FC = () => {
  return (
    <section className="py-16 px-6 flex justify-center items-start min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-8"> {/* Reduced space-y-12 to space-y-8 */}
        {/* Section with Two Divs */}
        <div className="flex justify-between items-center space-x-6 w-full max-w-screen-lg p-6">
          {/* First Div */}
          <div
            className="flex-shrink-0"
            style={{
              width: "494px",
              height: "450px",
              borderRadius: "20px",
              backgroundColor: "#E50AE0",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <span className="text-white font-inter text-2xl">Content 1</span>
            </div>
          </div>

          {/* Second Div */}
          <div
            className="flex-shrink-0"
            style={{
              width: "494px",
              height: "450px",
              borderRadius: "20px",
              backgroundColor: "#E50AE0",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <span className="text-white font-inter text-2xl">Content 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection3;
