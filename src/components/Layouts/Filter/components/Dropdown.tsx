/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import DropdownTriggerButton from "./DropdownTriggerButton";

import { useFilterStore } from "store";

import { FilterStoreT } from "interface";
interface DropdownType {
  children: React.ReactNode;
  activeLabel: string;
  isActiveFiler: boolean;
  dropdownName: FilterStoreT["activeDropdown"];
}

const Dropdown: React.FC<DropdownType> = ({
  children,
  activeLabel,
  dropdownName,
  isActiveFiler,
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
      className={`relative ${
        activeDropdown === dropdownName
          ? "rounded-md border border-y-app-blue border-x-app-blue"
          : isActiveFiler
          ? "border-t border-t-app-blue"
          : "border-y border-y-app-gray-shade"
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
          className="absolute top-full left-0 right-0 p-2 max-h-72 overflow-auto overflow-x-hidden flex flex-col gap-2 rounded-sm shadow-2xl z-[1] bg-app-gray-tint"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
