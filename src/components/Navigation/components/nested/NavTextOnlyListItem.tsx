import React from "react";
import { Link } from "react-router-dom";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavTextOnlyListItemType {
  route: NavLinkWithFigT;
  query: NestedListQueryT;
  onClick: () => void;
}

const NavTextOnlyListItem: React.FC<NavTextOnlyListItemType> = ({
  route,
  query,
  onClick,
}) => {
  return (
    <li>
      <Link
        className="inline-block w-full hover:text-app-blue transition-colors duration-200"
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
        {route.label}
      </Link>
    </li>
  );
};

export default NavTextOnlyListItem;
