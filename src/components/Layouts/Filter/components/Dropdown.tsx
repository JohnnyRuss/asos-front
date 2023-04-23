/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import DropdownTriggerButton from "./DropdownTriggerButton";

import { useFilterStore } from "store";

import { FilterStateT } from "interface";
interface DropdownType {
  children: React.ReactNode;
  activeLabel: string;
  dropdownName: FilterStateT["activeDropdown"];
}

const Dropdown: React.FC<DropdownType> = ({
  children,
  activeLabel,
  dropdownName,
}) => {
  const dropdownBodyRef = useRef<HTMLUListElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const { activeDropdown, setActiveDropdown } = useFilterStore((state) => ({
    activeDropdown: state.activeDropdown,
    setActiveDropdown: state.setActiveDropdown,
  }));

  function globalClickListener({ target }: MouseEvent): void {
    if (
      (dropdownBodyRef.current &&
        dropdownBodyRef.current.contains(target as Node)) ||
      (dropdownButtonRef.current &&
        (target as Element).closest("#dropdown-trigger"))
    )
      return;

    setActiveDropdown("INACTIVE");
    document.removeEventListener("click", globalClickListener);
  }

  function toggleDropdown(): void {
    if (activeDropdown === "INACTIVE") {
      setActiveDropdown(dropdownName);
      document.addEventListener("click", globalClickListener);
    } else if (activeDropdown === dropdownName) {
      setActiveDropdown("INACTIVE");
      document.removeEventListener("click", globalClickListener);
    } else {
      setActiveDropdown(dropdownName);
    }
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("click", globalClickListener);
    };
  }, []);

  return (
    <div
      className={`relative border-y border-y-app-gray-shade rounded-md ${
        activeDropdown === dropdownName &&
        "border border-app-blue border-y-app-blue"
      }`}
    >
      <DropdownTriggerButton
        caption={activeLabel}
        onClick={toggleDropdown}
        ref={dropdownButtonRef}
      />

      {activeDropdown === dropdownName && (
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
