import React from "react";
import { ProductT } from "interface";

interface ProductColorType {
  colour: ProductT["colour"];
}

const ProductColor: React.FC<ProductColorType> = ({ colour }) => {
  return (
    <div>
      <span className="font-bold uppercase text-app-xsm">colour:</span>
      &nbsp;
      <span className="uppercase tracking-[2px]">{colour}</span>
    </div>
  );
};

export default ProductColor;
