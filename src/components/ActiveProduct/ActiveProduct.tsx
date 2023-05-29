import React from "react";

import { useProductsStore } from "store";

import { Container, Spinner, Path } from "components/Layouts";
import ProductDetails from "./components/ProductDetails";
import Slider from "./components/Slider";
import RelatedProducts from "./components/RelatedProducts";

const ActiveProduct: React.FC = () => {
  const { loadingStatus, productTitle } = useProductsStore((state) => ({
    loadingStatus: state.productLoadingStatus,
    productTitle: state.product?.title,
  }));

  return (
    <div className="relative">
      {loadingStatus.loading && <Spinner />}

      <Container>
        <div className="min-h-screen pb-20">
          {!loadingStatus.loading && (
            <>
              <Path title={productTitle} />

              <div className="flex gap-4 justify-center py-10">
                <Slider />
                <ProductDetails />
              </div>
              <RelatedProducts />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ActiveProduct;
