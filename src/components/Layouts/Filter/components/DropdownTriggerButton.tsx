import React from "react";

interface DropdownTriggerButtonType {
  caption: string;
  onClick: () => void;
}

const DropdownTriggerButton: React.FC<DropdownTriggerButtonType> = ({
  caption,
  onClick,
}) => {
  return (
    <button
      className="flex items-center justify-between p-2 w-full capitalize"
      onClick={onClick}
    >
      <span>{caption}</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default DropdownTriggerButton;
