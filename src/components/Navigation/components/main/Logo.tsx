import React from "react";
import { Link } from "react-router-dom";

import { useGetRootRoute } from "hooks";

const Logo: React.FC = () => {
  const rootRoute = useGetRootRoute();

  return (
    <Link
      to={rootRoute.query}
      state={{
        search_for: rootRoute,
        search_in: null,
        search: null,
      }}
    >
      <figure className="w-24 border-r border-r-app-gray pr-4 ">
        <img
          src="/assets/logo/logo-big-white.webp"
          alt="ASOS"
          className="w-full h-full object-contain object-center"
        />
      </figure>
    </Link>
  );
};

export default Logo;
