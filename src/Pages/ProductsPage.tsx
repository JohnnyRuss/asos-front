/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Products } from "components";
import { useProductsStore } from "store";
import { useScrollUp } from "hooks";

const ProductsPage: React.FC = () => {
  useScrollUp();

  const { state } = useLocation();

  const getProducts = useProductsStore((state) => state.getProducts);

  useEffect(() => {
    const routeState = {
      search_for: state?.search_for || "",
      search_in: state?.search_in || "",
      search: state?.search || "",
    };

    if (!routeState.search_for || !routeState.search_in) return;

    getProducts({
      search_for: routeState.search_for,
      search_in: routeState.search_in.route,
      search: routeState.search.route || "",
    });
  }, [state]);

  return <Products />;
};

export default ProductsPage;
