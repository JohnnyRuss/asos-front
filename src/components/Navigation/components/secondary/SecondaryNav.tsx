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
    route: "",
  });

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

        if (route !== secondaryRoute.route) setSecondaryRoute({ label, route });
      }
    } else return setSecondaryRoute({ label: "", route: "" });
  }

  return (
    <div className="relative bg-app-gray text-app-white">
      <Container>
        <div onMouseOver={controllNavOnEnter}>
          <SecondaryNavList
            navList={rootRoute === "men" ? menNav : womenNav}
            activeRoute={secondaryRoute}
          />

          {secondaryRoute.route && (
            <NestedNav rootRoute={rootRoute} secondaryRoute={secondaryRoute} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default SecondaryNav;
