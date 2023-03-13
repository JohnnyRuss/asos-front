import React from "react";
import { Link } from "react-router-dom";

import { useGetRootRoute } from "../../../hooks";

import { Container } from "../../Layouts";
import MainNavList from "./MainNavList";
import MainNavSearch from "./MainNavSearch";
import MainNavActions from "./MainNavActions";

const MainNav: React.FC = () => {
  const rootRoute = useGetRootRoute();

  return (
    <div className="bg-app-dark-gray text-app-white">
      <Container>
        <div className="flex items-center h-12">
          <Link to={rootRoute}>
            <figure className="w-24 border-r border-r-app-gray pr-4 ">
              <img
                src="/assets/logo/logo-big-white.webp"
                alt="ASOS"
                className="w-full h-full object-contain object-center"
              />
            </figure>
          </Link>

          <div className="flex justify-between items-center w-full h-full px-5 gap-9 ">
            <MainNavList />

            <MainNavSearch />

            <MainNavActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainNav;
