import React from "react";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavFigOnlyListItemType {
  route: NavLinkWithFigT;
  query: NestedListQueryT;
}

const NavFigOnlyListItem: React.FC<NavFigOnlyListItemType> = ({
  query,
  route,
}) => {
  return (
    <li className="flex flex-col items-center gap-2 relative">
      <figure className="h-auto overflow-hidden">
        <img
          src={route.fig}
          alt={route.label}
          className="w-auto h-auto object-contain object-center"
          loading="lazy"
        />
      </figure>
      <span className="absolute bottom-4 uppercase font-semibold">
        {route.label}
      </span>
    </li>
  );
};

export default NavFigOnlyListItem;
