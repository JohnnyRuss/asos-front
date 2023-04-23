/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import DropdownTriggerButton from "./DropdownTriggerButton";

import { FilterT } from "store/filter";
interface DropdownType {
  children: React.ReactNode;
  activeLabel: string;
  name: FilterT;
}

const Dropdown: React.FC<DropdownType> = ({ children, activeLabel }) => {
  const dropdownBodyRef = useRef<HTMLUListElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const [activeDropdown, setActiveDropdown] = useState(false);

  function globalClickListener({ target }: MouseEvent): void {
    if (
      (dropdownBodyRef.current &&
        dropdownBodyRef.current.contains(target as Node)) ||
      (dropdownButtonRef.current &&
        (target as Element).closest("#dropdown-trigger"))
    )
      return;

    setActiveDropdown(false);
    document.removeEventListener("click", globalClickListener);
  }

  function toggleDropdown(): void {
    setActiveDropdown((prev) => !prev);
    !activeDropdown && document.addEventListener("click", globalClickListener);
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("click", globalClickListener);
    };
  }, []);

  return (
    <div
      className={`relative border-y border-y-app-gray-shade rounded-md ${
        activeDropdown && "border border-app-blue border-y-app-blue"
      }`}
    >
      <DropdownTriggerButton
        caption={activeLabel}
        onClick={toggleDropdown}
        ref={dropdownButtonRef}
      />
      {activeDropdown && (
        <ul
          ref={dropdownBodyRef}
          className="absolute top-full left-0 right-0 p-2 flex flex-col gap-2 rounded-sm shadow-2xl z-[1] bg-app-gray-tint"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
