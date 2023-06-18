/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationRootRouteT } from "interface";

export default function useGetRootRoute(): NavigationRootRouteT {
  const { state } = useLocation();

  const [activeRootRoute, setActiveRootRoute] = useState<NavigationRootRouteT>({
    label: "women",
    query: "women",
  });

  useEffect(() => {
    if (
      state?.search_for &&
      (state?.search_for?.label === "men" ||
        state?.search_for?.label === "women")
    )
      setActiveRootRoute(state.search_for);
  }, [state]);

  return activeRootRoute;
}
