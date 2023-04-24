import React from "react";
import NestedNavListTitle from "./NestedNavListTitle";

interface NestedNavContainerType {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const NestedNavContainer: React.FC<NestedNavContainerType> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start gap-4 border-x border-x-app-gray-shade px-5 ${className}`}
    >
      <NestedNavListTitle title={title} />
      {children}
    </div>
  );
};

export default NestedNavContainer;
