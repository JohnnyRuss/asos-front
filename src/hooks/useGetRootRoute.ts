/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationRootRouteT } from "interface";

export default function useGetRootRoute(): NavigationRootRouteT {
  const { state } = useLocation();

  const [activeRootRoute, setActiveRootRoute] = useState<NavigationRootRouteT>({
    label: "women",
    route: "women",
  });

  useEffect(() => {
    const { search_for: rootRoute } = state;

    if (rootRoute && (rootRoute.route === "men" || rootRoute.route === "women"))
      setActiveRootRoute(rootRoute);
  }, [state]);

  return activeRootRoute;
}
