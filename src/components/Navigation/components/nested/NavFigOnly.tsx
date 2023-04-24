import React from "react";

import NestedNavContainer from "./NestedNavContainer";
import NavFigOnlyList from "./NavFigOnlyList";

import { NestedListT } from "./types";

const NavFigOnly: React.FC<NestedListT> = ({ query, routes, title }) => {
  return (
    <NestedNavContainer title={title}>
      <NavFigOnlyList query={query} routes={routes} />
    </NestedNavContainer>
  );
};

export default NavFigOnly;
