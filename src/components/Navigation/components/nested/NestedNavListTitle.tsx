import React from "react";

interface NestedNavListTitleType {
  title: string;
}

const NestedNavListTitle: React.FC<NestedNavListTitleType> = ({ title }) => {
  return (
    <span className="self-start underline font-semibold uppercase">
      {title}
    </span>
  );
};

export default NestedNavListTitle;
