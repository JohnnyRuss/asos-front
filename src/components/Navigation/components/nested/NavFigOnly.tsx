import React from "react";

import NestedNavContainer from "./NestedNavContainer";
import NavFigOnlyList from "./NavFigOnlyList";

import { NestedListT } from "./types";

const NavFigOnly: React.FC<NestedListT> = ({
  query,
  routes,
  title,
  clearDropdownState,
}) => {
  return (
    <NestedNavContainer title={title}>
      <NavFigOnlyList
        query={query}
        routes={routes}
        clearDropdownState={clearDropdownState}
      />
    </NestedNavContainer>
  );
};

export default NavFigOnly;
