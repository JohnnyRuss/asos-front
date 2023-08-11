import React, { useState } from "react";
import { useProductsStore, useShoppingCardStore } from "store";

import ProductAccordion from "./ProductAccordion";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductActions from "./ProductActions";
import ProductSizingHelp from "./ProductSizingHelp";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

const ProductDetails: React.FC = () => {
  const product = useProductsStore((state) => state.product);
  const { addToBag } = useShoppingCardStore();

  const [selectedSize, setSelectedSize] = useState<string>("");

  function handleAddToBag() {
    if (!selectedSize || !product) return;

    addToBag({
      productId: product._id,
      color: product.colour,
      price: product.price,
      sizes: product.sizes,
      selectedSizeId: selectedSize,
      thumbnail: product.media.pictures[0],
      title: product.title,
      quantity: 1,
    });
  }

  return (
    <div className="flex flex-col gap-4 px-4">
      {product && (
        <>
          <h4 className="w-80 tracking-[1px]">{product.title}</h4>

          <ProductPrice sale={product.sale} price={product.price} />

          {product.rating && (
            <ProductRating rating={product.rating} votes={product.votes} />
          )}

          <ProductColor colour={product.colour} />

          <ProductSize
            sizes={product.sizes}
            setSelectedSize={setSelectedSize}
          />

          <ProductActions handleAddToBag={handleAddToBag} />

          <ProductAccordion />

          <ProductSizingHelp />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
