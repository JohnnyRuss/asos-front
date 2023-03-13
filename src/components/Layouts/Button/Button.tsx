import React from "react";

interface ButtonType {
  className?: string;
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonType> = ({ className, label, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`w-48 h-12 font-bold uppercase bg-app-white text-app-black hover:text-app-white hover:bg-app-black transition-colors duration-200 ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
