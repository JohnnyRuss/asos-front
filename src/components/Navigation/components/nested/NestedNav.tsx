import React from "react";

import { useAppStore } from "store";

import { Container } from "components/Layouts";
import NavTextOnly from "./NavTextOnly";
import NavWithHorizontalFig from "./NavWithHorizontalFig";
import NavWithVerticalFig from "./NavWithVerticalFig";
import NavFigOnly from "./NavFigOnly";

import { NavigationRootRouteT, NavLinkT } from "interface";
interface NestedNavType {
  rootRoute: NavigationRootRouteT;
  secondaryRoute: NavLinkT;
}

const NestedNav: React.FC<NestedNavType> = ({ secondaryRoute, rootRoute }) => {
  const nestedNav = useAppStore(
    ({ navigation }) =>
      navigation.nested.find((nav) => nav.route === secondaryRoute.route)
        ?.nestedNav
  );

  return (
    <div className="absolute z-10 left-0 right-0 h-screen bg-app-black-tr">
      <Container>
        <div
          data-sub-nav-list
          className="flex max-h-screen py-3 bg-app-white text-app-black"
        >
          {nestedNav &&
            nestedNav.map((nav, i) => {
              const title = nav.title;
              const routes = nav.routes[rootRoute];
              const listType = nav.listType;

              if (listType === "TEXT_ONLY")
                return (
                  <NavTextOnly
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: secondaryRoute,
                    }}
                    key={`sub-nav--list__${listType}-${i}`}
                  />
                );
              else if (listType === "ROUNDED_FIG_X")
                return (
                  <NavWithHorizontalFig
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: secondaryRoute,
                    }}
                    key={`sub-nav--list__${listType}-${i}`}
                  />
                );
              else if (listType === "ROUNDED_FIG_Y")
                return (
                  <NavWithVerticalFig
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: secondaryRoute,
                    }}
                    key={`sub-nav--list__${listType}-${i}`}
                  />
                );
              else if (listType === "FIG_ONLY")
                return (
                  <NavFigOnly
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: secondaryRoute,
                    }}
                    key={`sub-nav--list__${listType}-${i}`}
                  />
                );
              else return <></>;
            })}
        </div>
      </Container>
    </div>
  );
};

export default NestedNav;
