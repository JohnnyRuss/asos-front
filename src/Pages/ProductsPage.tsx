/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Products } from "components";
import { useProductsStore } from "store";
import { useScrollUp, useGetProductsQueryStr } from "hooks";

const ProductsPage: React.FC = () => {
  useScrollUp();
  const { state } = useLocation();

  const getProducts = useProductsStore((state) => state.getProducts);
  const getProductsQueryStr = useGetProductsQueryStr();

  useEffect(() => {
    const { search_for, search_in, search } = getProductsQueryStr();

    if (!search_for || !search_in) return;

    getProducts({ search_for, search_in, search });
  }, [state]);

  return <Products />;
};


export default ProductsPage;
