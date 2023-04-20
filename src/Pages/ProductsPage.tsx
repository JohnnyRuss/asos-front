/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAppStore from "../store/app";

import { useScrollUp } from "../hooks";

import Products from "../components/Products/Products";

const ProductsPage: React.FC = () => {
  useScrollUp();

  const { state } = useLocation();

  const getProducts = useAppStore((state) => state.getProducts);

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
