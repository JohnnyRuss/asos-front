import React from "react";

import useAppStore from "../../store/app";

import { Container, Spinner } from "../Layouts";
import ProductDetails from "./ProductDetails";
import Slider from "./Slider";
import Path from "./Path";

const ActiveProduct: React.FC = () => {
  const loadingStatus = useAppStore((state) => state.productLoadingStatus);
  console.log(loadingStatus);
  return (
    <div className="relative">
      {loadingStatus.loading && <Spinner />}
      <Container>
        <div className="min-h-screen">
          {!loadingStatus.loading && (
            <>
              <Path />
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
