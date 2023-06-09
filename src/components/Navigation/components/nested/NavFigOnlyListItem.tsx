import React from "react";
import { Link } from "react-router-dom";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavFigOnlyListItemType {
  route: NavLinkWithFigT;
  query: NestedListQueryT;
  onClick: () => void;
}

const NavFigOnlyListItem: React.FC<NavFigOnlyListItemType> = ({
  query,
  route,
  onClick,
}) => {
  return (
    <li className="relative">
      <Link
        className="flex flex-col items-center gap-2"
        to={`${query.search_for.route}/products`}
        onClick={onClick}
        state={{
          search_for: query.search_for,
          search_in: query.search_in,
          search: { label: route.label, route: route.route },
        }}
      >
        <figure className="h-auto overflow-hidden">
          <img
            src={route.fig}
            alt={route.label}
            className="w-auto h-auto object-contain object-center"
            loading="lazy"
          />
        </figure>
        <span className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center uppercase font-semibold bg-gradient-to-b from-app-black-tr to-transparent text-white backdrop-blur-[2px]">
          {route.label}
        </span>
      </Link>
    </li>
  );
};

export default NavFigOnlyListItem;
