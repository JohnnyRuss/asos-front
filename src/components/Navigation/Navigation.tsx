import React from "react";

import { MainNav, SecondaryNav } from "./components";

const Navigation: React.FC = () => {
  return (
    <nav className="sticky z-10 top-0">
      <>
        <MainNav />
        <SecondaryNav />
      </>
    </nav>
  );
};

export default Navigation;
