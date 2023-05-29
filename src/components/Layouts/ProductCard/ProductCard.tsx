import React from "react";
import { Link, useLocation } from "react-router-dom";

import Figure from "./components/Figure";
import { HeartButton } from "components/Layouts";

import { ProductLabelT } from "interface/DB/products";
interface ProductCardType {
  product: ProductLabelT;
  passRouteQuery: boolean;
}

const ProductCard: React.FC<ProductCardType> = ({
  product,
  passRouteQuery,
}) => {
  const { state } = useLocation();

  return (
    <Link
      className="h-full flex flex-col gap-3"
      to={`/women/products/${product._id}`}
      state={
        passRouteQuery
          ? {
              search_for: state?.search_for,
              search_in: state?.search_in,
              search: state?.search,
            }
          : null
      }
    >
      <Figure productMedia={product.media} alt={product.title}>
        <HeartButton />
      </Figure>

      <div className="flex flex-col h-1/5 relative group/title">
        {/* <span>{product._id}</span> */}

        <span className="text-app-sm ">{product.title}</span>

        {/* <div className="hidden group-hover/title:block absolute top-[25px] border border-app-gray p-2 shadow-2xl z-10 bg-app-white rounded-md">
          <div>
            <span className="font-bold">categories:</span>
            <ul className="list-disc pl-5">
              {product.productType.map((type, i) => (
                <li key={`${product._id}--${type}__${i}`}>{type.query}</li>
              ))}
            </ul>
          </div>
        </div> */}

        <span className="text-app-xsm mt-auto pt-1`">{product.colour}</span>

        <div className="flex items-center justify-between font-bold mt-1">
          <span>£{product.price}</span>
          {product.sale && <span>£{product.sale}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
