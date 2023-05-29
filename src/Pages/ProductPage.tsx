/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ActiveProduct } from "components";
import { useScrollUp } from "hooks";
import { useProductsStore } from "store";

const ProductPage: React.FC = () => {
  useScrollUp();

  const { getProduct, getRelatedProducts } = useProductsStore((state) => ({
    getProduct: state.getProduct,
    getRelatedProducts: state.getRelatedProducts,
  }));
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      getProduct(productId);
      getRelatedProducts(productId);
    }
  }, [productId]);

  return <ActiveProduct />;
};

export default ProductPage;
