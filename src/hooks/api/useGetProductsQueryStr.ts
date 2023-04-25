import { useLocation } from "react-router-dom";

import { NavBaseQueryT } from "interface";
import useGetRootRoute from "hooks/useGetRootRoute";

interface QueryStrT {
  search_for: string;
  search_in: string;
  search: string;
}

export default function useGetProductsQueryStr(): () => QueryStrT {
  const { state }: { state: NavBaseQueryT | null } = useLocation();
  const rootRoute = useGetRootRoute();

  function getProductsQueryStr(): QueryStrT {
    return {
      search_for: state?.search_for.route || rootRoute.route,
      search_in: state?.search_in?.route || "",
      search: state?.search?.route || "",
    };
  }

  return getProductsQueryStr;
}
