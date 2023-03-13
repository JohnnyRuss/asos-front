import React from "react";

// import { useControllNavOnScroll } from "../../hooks";

import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";

const Navigation: React.FC = () => {
  // const isVisible = useControllNavOnScroll();

  return (
    <nav className="sticky z-10 top-0">
      <>
        <MainNav />
        <SubNav />
      </>
    </nav>
  );
};

export default Navigation;
