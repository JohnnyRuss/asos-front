import React from "react";
import { Link } from "react-router-dom";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavWithHorizontalFigListItemType {
  route: NavLinkWithFigT;
  query: NestedListQueryT;
  onClick: () => void;
}

const NavWithHorizontalFigListItem: React.FC<
  NavWithHorizontalFigListItemType
> = ({ query, route, onClick }) => {
  return (
    <li className="w-full group/fig-x">
      <Link
        className="flex gap-2"
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
        <figure className="min-w-[40px] w-10 h-10 min-h-[40px] aspect-square rounded-full overflow-hidden border-2 border-app-gray-shade group-hover/fig-x:border-app-blue transition-colors duration-200">
          <img
            src={route.fig}
            alt={route.label}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </figure>
        <span className="flex items-center w-full min-h-full border-b border-b-app-gray group-hover/fig-x:text-app-blue group-hover/fig-x:border-b-app-blue transition-colors duration-200">
          {route.label}
        </span>
      </Link>
    </li>
  );
};

export default NavWithHorizontalFigListItem;
