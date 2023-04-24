import React from "react";

// import { useControllNavOnScroll } from "../../hooks";

import { MainNav, SecondaryNav } from "./components";

const Navigation: React.FC = () => {
  // const isVisible = useControllNavOnScroll();

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
