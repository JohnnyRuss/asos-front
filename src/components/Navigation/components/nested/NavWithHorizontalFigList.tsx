import React from "react";

import NestedNavListContainer from "./NestedNavListContainer";
import NavWithHorizontalFigListItem from "./NavWithHorizontalFigListItem";

import { NavLinkWithFigT } from "interface";
import { NestedListQueryT } from "./types";
interface NavWithHorizontalFigListType {
  routes: NavLinkWithFigT[];
  query: NestedListQueryT;
}

const NavWithHorizontalFigList: React.FC<NavWithHorizontalFigListType> = ({
  routes,
  query,
}) => {
  return (
    <NestedNavListContainer>
      {routes.map((route, i) => (
        <NavWithHorizontalFigListItem
          route={route}
          query={query}
          key={`nested-nav--route__fig-x__${i}-${route.route}`}
        />
      ))}
    </NestedNavListContainer>
  );
};

export default NavWithHorizontalFigList;
