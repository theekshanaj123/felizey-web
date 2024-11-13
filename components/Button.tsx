import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

interface ButtonProps {
  text: string;
  link: string;
  icon: "playstore" | "appstore";
}

const Button: React.FC<ButtonProps> = ({ text, link, icon }) => {
  const IconComponent = icon === "playstore" ? FaGooglePlay : FaApple;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white text-lg sm:text-xl font-semibold bg-[#342D34] shadow-md transition-all duration-300 ease-in-out transform hover:bg-[#5B5B5B] hover:shadow-lg hover:scale-105"
    >
      <IconComponent className="w-6 h-6 mr-3" />
      {text}
    </a>
  );
};

export default Button;
