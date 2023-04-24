import React from "react";

import NestedNavListContainer from "./NestedNavListContainer";
import NavWithVerticalFigListItem from "./NavWithVerticalFigListItem";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavWithVerticalFigListType {
  routes: NavLinkWithFigT[];
  query: NestedListQueryT;
}

const NavWithVerticalFigList: React.FC<NavWithVerticalFigListType> = ({
  routes,
  query,
}) => {
  return (
    <NestedNavListContainer layoutType="GRID">
      {routes.map((route, i) => (
        <NavWithVerticalFigListItem
          query={query}
          route={route}
          key={`nested-nav--route__fig-y__${i}-${route.route}`}
        />
      ))}
    </NestedNavListContainer>
  );
};

export default NavWithVerticalFigList;
