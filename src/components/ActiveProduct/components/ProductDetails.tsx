import React from "react";
import { useProductsStore } from "store";
import ProductAccordion from "./ProductAccordion";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductActions from "./ProductActions";
import ProductSizingHelp from "./ProductSizingHelp";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

const ProductDetails: React.FC = () => {
  const product = useProductsStore((state) => state.product);

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

          <ProductSize sizes={product.sizes} />

          {/* <ul className="list-disc">
            {product.productType.map((type) => (
              <li key={`product--type-${type}`}>{type}</li>
            ))}
          </ul> */}

          <ProductActions />

          <ProductAccordion />

          <ProductSizingHelp />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
