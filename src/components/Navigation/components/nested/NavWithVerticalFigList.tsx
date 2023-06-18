import React from "react";

import NestedNavListContainer from "./NestedNavListContainer";
import NavWithVerticalFigListItem from "./NavWithVerticalFigListItem";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavWithVerticalFigListType {
  routes: NavLinkWithFigT[];
  query: NestedListQueryT;
  clearDropdownState: () => void;
}

const NavWithVerticalFigList: React.FC<NavWithVerticalFigListType> = ({
  routes,
  query,
  clearDropdownState,
}) => {
  return (
    <NestedNavListContainer layoutType="GRID">
      {routes.map((route, i) => (
        <NavWithVerticalFigListItem
          query={query}
          route={route}
          key={`nested-nav--route__fig-y__${i}-${route.query}`}
          onClick={clearDropdownState}
        />
      ))}
    </NestedNavListContainer>
  );
};

export default NavWithVerticalFigList;
