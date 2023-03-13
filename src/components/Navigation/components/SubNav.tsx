/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import useAppStore from "../../../store/app";
import { useGetRootRoute } from "../../../hooks";

import { Container } from "../../Layouts";
import SubNavPopUp from "./SubNavPopUp";

const SubNav: React.FC = () => {
  const { men: menNav, women: womenNav } = useAppStore().navigation.subNavs;

  const rootRoute = useGetRootRoute();

  const [listRoute, setListRoute] = useState<string>("");

  function controllNavOnEnter(e: React.MouseEvent) {
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (
      target.closest("[data-sub-nav]") ||
      target.closest("[data-sub-nav-list]") ||
      target.closest("[data-nav-pointer]")
    ) {
      if (target.closest("[data-nav-pointer]")) {
        const aim: string = target.dataset.pointedSubnav!;
        if (aim !== listRoute) setListRoute(aim);
      }
    } else return setListRoute("");
  }

  return (
    <div className="relative bg-app-gray text-app-white">
      <Container>
        <div onMouseOver={controllNavOnEnter}>
          <ul
            data-sub-nav
            className="flex items-center gap-3 h-8 capitalize text-app-sm"
          >
            {[...(rootRoute === "men" ? menNav : womenNav)].map((route) => (
              <li
                className={`cursor-pointer h-full flex items-center px-2 ${
                  listRoute === route.route
                    ? "bg-app-gray-tint text-app-dark-gray"
                    : ""
                }`}
                data-pointed-subnav={route.route}
                data-nav-pointer
                key={route.route}
              >
                {route.label}
              </li>
            ))}
          </ul>
          {listRoute && (
            <SubNavPopUp
              listOf={rootRoute === "men" ? "men" : "women"}
              listRoute={listRoute}
              rootRoute={rootRoute}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default SubNav;
