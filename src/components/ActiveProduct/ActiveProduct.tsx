import React from "react";

import { Container } from "../Layouts";
import ProductDetails from "./ProductDetails";
import Slider from "./Slider";

const ActiveProduct: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-4 justify-center py-10 min-h-screen">
          <Slider />
          <ProductDetails />
        </div>
      </Container>
    </div>
  );
};

export default ActiveProduct;
