import React from "react";

import { FilterStoreT, FilterStoreActionsT } from "interface";

interface DropdownListItemType {
  children: React.ReactNode;
  name: keyof FilterStoreT["filter"];
  value: string;
  isActive: boolean;
  onClick: FilterStoreActionsT["setFilter"];
}

const DropdownListItem: React.FC<DropdownListItemType> = ({
  children,
  onClick,
  name,
  value,
  isActive,
}) => {
  return (
    <li
      onClick={({ target }: React.MouseEvent<HTMLLIElement>) =>
        onClick(
          (target as HTMLElement).dataset.name as keyof FilterStoreT["filter"],
          (target as HTMLElement).dataset.value!
        )
      }
      data-name={name}
      data-value={value}
      className={`py-2 px-3 cursor-pointer rounded-md  transition-all hover:shadow-md first-letter:capitalize ${
        isActive ? "bg-app-blue text-app-white" : "bg-app-white"
      }`}
    >
      {children}
    </li>
  );
};

export default DropdownListItem;
