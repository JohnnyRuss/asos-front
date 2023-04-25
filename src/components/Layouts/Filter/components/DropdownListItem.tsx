import React from "react";

import { FilterStoreT } from "interface";

interface DropdownListItemType {
  children: React.ReactNode;
  name: keyof FilterStoreT["filter"];
  value: string;
  onClick: ({
    key,
    value,
  }: {
    key: keyof FilterStoreT["filter"];
    value: string;
  }) => void;
}

const DropdownListItem: React.FC<DropdownListItemType> = ({
  children,
  onClick,
  name,
  value,
}) => {
  return (
    <li
      onClick={({ target }: React.MouseEvent<HTMLLIElement>) =>
        onClick({
          key: (target as HTMLElement).dataset
            .name as keyof FilterStoreT["filter"],
          value: (target as HTMLElement).dataset.value!,
        })
      }
      data-name={name}
      data-value={value}
      className="py-2 px-3 cursor-pointer rounded-md bg-app-white transition-all hover:shadow-md"
    >
      {children}
    </li>
  );
};

export default DropdownListItem;
