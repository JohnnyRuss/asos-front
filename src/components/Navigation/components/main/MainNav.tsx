import React from "react";

import { Container } from "components/Layouts";
import Logo from "./Logo";
import MainNavList from "./MainNavList";
import MainNavSearch from "./MainNavSearch";
import MainNavActions from "./MainNavActions";

const MainNav: React.FC = () => {
  return (
    <div className="bg-app-dark-gray text-app-white">
      <Container>
        <div className="flex items-center h-12">
          <Logo />
          
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
