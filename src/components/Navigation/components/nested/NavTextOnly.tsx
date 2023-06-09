import React from "react";

import NestedNavContainer from "./NestedNavContainer";
import NavTextOnlyList from "./NavTextOnlyList";

import { NestedListT } from "./types";

const NavTextOnly: React.FC<NestedListT> = ({
  query,
  routes,
  title,
  clearDropdownState,
}) => {
  const maxRouteInRow = 15;
  return (
    <NestedNavContainer title={title}>
      {routes.length > maxRouteInRow ? (
        <div className="flex gap-16">
          <NavTextOnlyList
            query={query}
            routes={routes.slice(0, maxRouteInRow)}
            clearDropdownState={clearDropdownState}
          />
          <NavTextOnlyList
            query={query}
            routes={routes.slice(maxRouteInRow)}
            clearDropdownState={clearDropdownState}
          />
        </div>
      ) : (
        <NavTextOnlyList
          query={query}
          routes={routes}
          clearDropdownState={clearDropdownState}
        />
      )}
    </NestedNavContainer>
  );
};

export default NavTextOnly;
