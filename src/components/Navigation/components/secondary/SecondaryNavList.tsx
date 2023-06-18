import React from "react";
import { NavLinkT } from "interface";

interface SecondaryNavListType {
  navList: NavLinkT[];
  activeRoute: NavLinkT;
}

const SecondaryNavList: React.FC<SecondaryNavListType> = ({
  navList,
  activeRoute,
}) => {
  return (
    <ul
      data-sub-nav
      className="flex items-center gap-3 h-8 capitalize text-app-sm"
    >
      {navList.map((route) => (
        <li
          className={`cursor-pointer h-full flex items-center px-2 transition-colors ${
            activeRoute.query === route.query
              ? "bg-app-gray-tint text-app-dark-gray"
              : ""
          }`}
          data-pointed-subnav-route={route.query}
          data-pointed-subnav-label={route.label}
          data-nav-pointer
          key={route.query}
        >
          {route.label}
        </li>
      ))}
    </ul>
  );
};

export default SecondaryNavList;
