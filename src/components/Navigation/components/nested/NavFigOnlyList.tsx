import React from "react";

import NestedNavListContainer from "./NestedNavListContainer";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
import NavFigOnlyListItem from "./NavFigOnlyListItem";
interface NavFigOnlyListType {
  routes: NavLinkWithFigT[];
  query: NestedListQueryT;
  clearDropdownState: () => void;
}

const NavFigOnlyList: React.FC<NavFigOnlyListType> = ({
  query,
  routes,
  clearDropdownState,
}) => {
  return (
    <NestedNavListContainer>
      {routes.map((route, i) => (
        <NavFigOnlyListItem
          query={query}
          route={route}
          key={`nested-nav--route__fig-only__${i}-${route.query}`}
          onClick={clearDropdownState}
        />
      ))}
    </NestedNavListContainer>
  );
};

export default NavFigOnlyList;
