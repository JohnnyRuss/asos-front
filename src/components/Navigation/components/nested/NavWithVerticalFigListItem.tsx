import React from "react";
import { Link } from "react-router-dom";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavWithVerticalFigListItemType {
  route: NavLinkWithFigT;
  query: NestedListQueryT;
  onClick: () => void;
}

const NavWithVerticalFigListItem: React.FC<NavWithVerticalFigListItemType> = ({
  query,
  route,
  onClick,
}) => {
  return (
    <li className="group/fig-y">
      <Link
        className="flex flex-col items-center gap-2"
        to={`/${query.search_for.query}/products`}
        onClick={onClick}
        state={{
          search_for: query.search_for,
          search_in: query.search_in,
          search: {
            label: route.label,
            query: route.query,
          },
        }}
      >
        <figure className="min-w-[80px] w-20 h-20 min-h-[80px] aspect-square rounded-full overflow-hidden border-2 border-app-gray-shade group-hover/fig-y:border-app-blue transition-colors duration-200">
          <img
            src={route.fig}
            alt={route.label}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </figure>
        <span className="group-hover/fig-y:text-app-blue transition-colors duration-200 text-center">
          {route.label}
        </span>
      </Link>
    </li>
  );
};

export default NavWithVerticalFigListItem;
