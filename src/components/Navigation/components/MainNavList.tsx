import React from "react";
import { NavLink } from "react-router-dom";

import useAppStore from "../../../store/app";

interface MainNavListType {}

const MainNavList: React.FC<MainNavListType> = (props) => {
  const navigation = useAppStore().navigation.main;

  return (
    <ul className="h-full flex items-center gap-4 uppercase font-semibold text-app-base">
      {navigation.map((route) => (
        <li className="h-full" key={route.route}>
          <NavLink
            to={route.route}
            className={({ isActive }) =>
              (isActive ? "bg-app-gray" : "") + ` flex items-center h-full px-3`
            }
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MainNavList;
