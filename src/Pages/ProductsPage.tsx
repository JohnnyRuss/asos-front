/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Products } from "components";
import { useProductsStore } from "store";
import { useScrollUp, useGetProductsQueryStr } from "hooks";

const ProductsPage: React.FC = () => {
  useScrollUp();

  const getProducts = useProductsStore((state) => state.getProducts);
  const getProductsQueryStr = useGetProductsQueryStr();

  const { search_for, search_in, search } = getProductsQueryStr();

  useEffect(() => {
    if (!search_for || !search_in) return;
    getProducts({ search_for, search_in, search });
  }, [search_for, search_in, search]);

  return <Products />;
};

export default ProductsPage;
