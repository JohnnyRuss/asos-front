import React from "react";

interface NestedNavListContainerType {
  children: React.ReactNode;
  layoutType?: "GRID" | "FLEX";
}

const NestedNavListContainer: React.FC<NestedNavListContainerType> = ({
  children,
  layoutType = "FLEX",
}) => {
  return (
    <ul
      className={`text-app-sm capitalize w-full ${
        layoutType === "FLEX"
          ? "flex flex-col gap-3 "
          : layoutType === "GRID"
          ? "grid grid-cols-2 gap-x-6 gap-y-10 justify-center"
          : ""
      }`}
    >
      {children}
    </ul>
  );
};

export default NestedNavListContainer;
