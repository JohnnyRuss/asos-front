import React from "react";

import { ProductT } from "interface";
interface ProductPriceType {
  sale: ProductT["sale"];
  price: ProductT["price"];
}

const ProductPrice: React.FC<ProductPriceType> = ({ sale, price }) => {
  return sale ? (
    <div className="flex flex-col">
      <span className="font-bold text-app-lg text-app-red">Now £{sale}</span>
      <span className="font-bold text-app-base line-through">
        Original Price: £{price}
      </span>
    </div>
  ) : (
    <span className="font-bold text-app-lg">£{price}</span>
  );
};

export default ProductPrice;
