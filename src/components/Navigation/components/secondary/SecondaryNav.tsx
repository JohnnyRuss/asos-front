/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import { useAppStore } from "store";
import { useGetRootRoute } from "hooks";

import { NavLinkT } from "interface";

import { Container } from "components/Layouts";
import { NestedNav } from "../";
import SecondaryNavList from "./SecondaryNavList";

const SecondaryNav: React.FC = () => {
  const { men: menNav, women: womenNav } = useAppStore(
    ({ navigation }) => navigation.secondary
  );

  const rootRoute = useGetRootRoute();

  const [secondaryRoute, setSecondaryRoute] = useState<NavLinkT>({
    label: "",
    query: "",
  });

  let timeoutId: any = undefined;

  function clearDropdownState() {
    timeoutId && clearTimeout(timeoutId);
    setSecondaryRoute({ label: "", query: "" });
  }

  function controllNavOnEnter(e: React.MouseEvent) {
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (
      target.closest("[data-sub-nav]") ||
      target.closest("[data-sub-nav-list]") ||
      target.closest("[data-nav-pointer]")
    ) {
      if (target.closest("[data-nav-pointer]")) {
        const route: string = target.dataset.pointedSubnavRoute as string;
        const label: string = target.dataset.pointedSubnavLabel as string;

        if (route !== secondaryRoute.query)
          timeoutId = setTimeout(() => {
            setSecondaryRoute({ label, query: route });
          }, 300);
      }
    } else return clearDropdownState();
  }

  const controllNavOnLeave = () => clearDropdownState();

  return (
    <div className="relative bg-app-gray text-app-white">
      <Container>
        <div onMouseOver={controllNavOnEnter} onMouseLeave={controllNavOnLeave}>
          <SecondaryNavList
            navList={rootRoute.label === "men" ? menNav : womenNav}
            activeRoute={secondaryRoute}
          />

          {secondaryRoute.query && (
            <NestedNav
              rootRoute={rootRoute}
              secondaryRoute={secondaryRoute}
              clearDropdownState={clearDropdownState}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default SecondaryNav;
