import React from "react";

interface DropdownListItemType {
  children: React.ReactNode;
}

const DropdownListItem: React.FC<DropdownListItemType> = ({ children }) => {
  return <li className="py-2 px-3 cursor-pointer rounded-md bg-app-white transition-all hover:shadow-md">{children}</li>;
};

export default DropdownListItem;
