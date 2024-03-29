import React from "react";

import { MainNav, SecondaryNav } from "./components";

const Navigation: React.FC = () => {
  return (
    <nav className="sticky z-40 top-0 h-nav-h overflow-hidden">
      <>
        <MainNav />
        <SecondaryNav />
      </>
    </nav>
  );
};

export default Navigation;
