import React from "react";
import { NavLink } from "react-router-dom";

import { useAppStore } from "store";

const MainNavList: React.FC = () => {
  const navigation = useAppStore(({ navigation }) => navigation.main);

  return (
    <ul className="h-full flex items-center gap-4 uppercase font-semibold text-app-base">
      {navigation.map((route) => (
        <li className="h-full" key={route.query}>
          <NavLink
            to={route.query}
            state={{
              search_for: route,
              search_in: null,
              search: null,
            }}
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
