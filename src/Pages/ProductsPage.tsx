/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useAppStore from "../store/app";

import { useScrollUp } from "../hooks";

import Products from "../components/Products/Products";

const ProductsPage: React.FC = () => {
  useScrollUp();

  const getProducts = useAppStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return <Products />;
};

export default ProductsPage;
