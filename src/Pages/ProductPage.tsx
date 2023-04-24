/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ActiveProduct } from "components";
import { useScrollUp } from "hooks";
import { useProductsStore } from "store";

const ProductPage: React.FC = () => {
  useScrollUp();

  const getProduct = useProductsStore((state) => state.getProduct);
  const { productId } = useParams();

  useEffect(() => {
    productId && getProduct(productId);
  }, []);

  return <ActiveProduct />;
};

export default ProductPage;
