/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationRootRouteT } from "interface";

export default function useGetRootRoute(): NavigationRootRouteT {
  const { pathname } = useLocation();

  const [activeRootRoute, setActiveRootRoute] =
    useState<NavigationRootRouteT>("women");

  useEffect(() => {
    const rootRoute = pathname.split("/")[1];

    if (rootRoute && (rootRoute === "men" || rootRoute === "women"))
      setActiveRootRoute(rootRoute);
  }, [pathname]);

  return activeRootRoute;
}
