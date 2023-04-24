import React from "react";

import NestedNavContainer from "./NestedNavContainer";
import NavWithHorizontalFigList from "./NavWithHorizontalFigList";

import { NestedListT } from "./types";

const NavWithHorizontalFig: React.FC<NestedListT> = ({
  query,
  routes,
  title,
}) => {
  return (
    <NestedNavContainer title={title}>
      {routes.length > 6 ? (
        <div className="flex gap-16">
          <NavWithHorizontalFigList routes={routes.slice(0, 6)} query={query} />
          <NavWithHorizontalFigList routes={routes.slice(6)} query={query} />
        </div>
      ) : (
        <NavWithHorizontalFigList routes={routes} query={query} />
      )}
    </NestedNavContainer>
  );
};

export default NavWithHorizontalFig;
