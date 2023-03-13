/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useGetRootRoute(): string {
  const { pathname } = useLocation();

  const [activeRootRoute, setActiveRootRoute] = useState<"men" | "women">(
    "women"
  );

  useEffect(() => {
    const rootRoute = pathname.split("/")[1];

    if (rootRoute && (rootRoute === "men" || rootRoute === "women"))
      setActiveRootRoute(rootRoute);
  }, [pathname]);

  return activeRootRoute;
}
