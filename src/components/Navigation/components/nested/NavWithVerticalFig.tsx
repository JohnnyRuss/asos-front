import React from "react";

import NestedNavContainer from "./NestedNavContainer";
import NavWithVerticalFigList from "./NavWithVerticalFigList";

import { NestedListT } from "./types";

const NavWithVerticalFig: React.FC<NestedListT> = ({
  query,
  routes,
  title,
}) => {
  return (
    <NestedNavContainer title={title}>
      <NavWithVerticalFigList routes={routes} query={query} />
    </NestedNavContainer>
  );
};

export default NavWithVerticalFig;
