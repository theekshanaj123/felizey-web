import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "url('/path-to-background-image.jpg'), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)", // Combined image and gradient
      },
      fontSize: {
        "96px": "96px",
        "24px": "24px",
        "20px": "20px",
        "16px": "16px",
      },
      letterSpacing: {
        "5.76px": "5.76px",
      },
      lineHeight: {
        "0.99": "0.99",
      },
      colors: {
        felizeyPurple: "#BB17A2",
        felizeyWhite: "#FAF8FB",
      },
      borderRadius: {
        "20px": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
