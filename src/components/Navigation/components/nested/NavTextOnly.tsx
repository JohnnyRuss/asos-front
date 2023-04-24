import React from "react";

import NestedNavContainer from "./NestedNavContainer";
import NavTextOnlyList from "./NavTextOnlyList";

import { NestedListT } from "./types";

const NavTextOnly: React.FC<NestedListT> = ({ query, routes, title }) => {
  const maxRouteInRow = 15;
  return (
    <NestedNavContainer title={title}>
      {routes.length > maxRouteInRow ? (
        <div className="flex gap-16">
          <NavTextOnlyList
            query={query}
            routes={routes.slice(0, maxRouteInRow)}
          />
          <NavTextOnlyList query={query} routes={routes.slice(maxRouteInRow)} />
        </div>
      ) : (
        <NavTextOnlyList query={query} routes={routes} />
      )}
    </NestedNavContainer>
  );
};

export default NavTextOnly;
