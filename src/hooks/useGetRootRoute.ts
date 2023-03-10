import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useGetRootRoute(): string {
  const { pathname } = useLocation();

  const [activeRootRoute, setActiveRootRoute] = useState<string>("women");

  useEffect(() => {
    const root = pathname.split("/").filter((part) => part !== "");
    setActiveRootRoute(root[0]);
  }, [pathname]);

  return activeRootRoute;
}
