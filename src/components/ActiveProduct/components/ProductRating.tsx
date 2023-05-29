import React from "react";

import { ProductT } from "interface";
interface ProductRatingType {
  rating: ProductT["rating"];
  votes: ProductT["votes"];
}

const ProductRating: React.FC<ProductRatingType> = ({ rating, votes }) => {
  return (
    <div className="flex items-center gap-2">
      <span>Rating:</span>
      <span>{rating}</span>
      <span>{votes}</span>
    </div>
  );
};

export default ProductRating;
