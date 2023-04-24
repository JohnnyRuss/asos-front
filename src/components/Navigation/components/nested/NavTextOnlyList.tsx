import React from "react";

import NestedNavListContainer from "./NestedNavListContainer";
import NavTextOnlyListItem from "./NavTextOnlyListItem";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavTextOnlyListType {
  routes: NavLinkWithFigT[];
  query: NestedListQueryT;
}

const NavTextOnlyList: React.FC<NavTextOnlyListType> = ({ routes, query }) => {
  return (
    <NestedNavListContainer>
      {routes.map((route, i) => (
        <NavTextOnlyListItem
          route={route}
          query={query}
          key={`nested-nav--route__text-only__${i}-${route.route}--${route.label}`}
        />
      ))}
    </NestedNavListContainer>
  );
};

export default NavTextOnlyList;
