import React from "react";

import { RelatedProductT } from "interface";
interface RelatedProductDetailsType {
  sale: RelatedProductT["sale"];
  price: RelatedProductT["price"];
  brand: RelatedProductT["brand"];
}

const RelatedProductDetails: React.FC<RelatedProductDetailsType> = ({
  brand,
  price,
  sale,
}) => {
  return (
    <div className="flex flex-col pt-2">
      {sale && <span className={`text-red-500 font-bold`}>£&nbsp;{sale}</span>}
      <span className={sale ? "line-through text-sm" : "font-bold"}>
        £&nbsp;{price}
      </span>
      <span className="text-gray-700 text-sm capitalize">{brand?.name}</span>
    </div>
  );
};

export default RelatedProductDetails;
