import React, { useState } from "react";
import DropdownTriggerButton from "./DropdownTriggerButton";

interface DropdownType {
  children: React.ReactNode;
  activeLabel: string;
}

const Dropdown: React.FC<DropdownType> = ({ children, activeLabel }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <div
      className={`relative border-y border-y-app-gray-shade rounded-md ${
        activeDropdown && "border border-app-blue border-y-app-blue"
      }`}
    >
      <DropdownTriggerButton
        caption={activeLabel}
        onClick={() => setActiveDropdown((prev) => !prev)}
      />
      {activeDropdown && (
        <ul className="absolute top-full left-0 right-0 p-2 flex flex-col gap-2 rounded-sm shadow-2xl z-[1] bg-app-gray-tint">
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
