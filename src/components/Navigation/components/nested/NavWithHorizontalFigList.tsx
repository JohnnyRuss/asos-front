import React from "react";

import NestedNavListContainer from "./NestedNavListContainer";
import NavWithHorizontalFigListItem from "./NavWithHorizontalFigListItem";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavWithHorizontalFigListType {
  routes: NavLinkWithFigT[];
  query: NestedListQueryT;
  clearDropdownState: () => void;
}

const NavWithHorizontalFigList: React.FC<NavWithHorizontalFigListType> = ({
  routes,
  query,
  clearDropdownState,
}) => {
  return (
    <NestedNavListContainer>
      {routes.map((route, i) => (
        <NavWithHorizontalFigListItem
          route={route}
          query={query}
          key={`nested-nav--route__fig-x__${i}-${route.route}`}
          onClick={clearDropdownState}
        />
      ))}
    </NestedNavListContainer>
  );
};

export default NavWithHorizontalFigList;
