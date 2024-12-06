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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/path-to-background-image.jpg')",
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
