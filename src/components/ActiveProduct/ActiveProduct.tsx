import React from "react";

import useAppStore from "../../store/app";

import { Container, Spinner, Path } from "components/Layouts";
import ProductDetails from "./components/ProductDetails";
import Slider from "./components/Slider";

const ActiveProduct: React.FC = () => {
  const { loadingStatus, productTitle } = useAppStore((state) => ({
    loadingStatus: state.productLoadingStatus,
    productTitle: state.product?.title,
  }));

  return (
    <div className="relative">
      {loadingStatus.loading && <Spinner />}

      <Container>
        <div className="min-h-screen">
          {!loadingStatus.loading && (
            <>
              <Path title={productTitle} />

              <div className="flex gap-4 justify-center py-10">
                <Slider />
                <ProductDetails />
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ActiveProduct;
