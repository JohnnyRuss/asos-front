import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createImageUrl } from "../../../lib";
import { ProductLabelT } from "../../../interface/DB/products.types";

interface ProductCardType {
  product: ProductLabelT;
}

const ProductCard: React.FC<ProductCardType> = ({ product }) => {
  const [activeFig, setActiveFig] = useState<number>(0);

  return (
    <Link
      to={`/women/products/${product._id}`}
      className="h-full flex flex-col gap-3"
    >
      <figure
        className="h-4/5 relative"
        onMouseEnter={() => setActiveFig(1)}
        onMouseLeave={() => setActiveFig(0)}
      >
        <img
          src={createImageUrl(product.media.pictures[activeFig])}
          alt={product.title}
        />
        <button className="absolute bottom-4 right-2 bg-app-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
          </svg>
        </button>
      </figure>
      <div className="flex flex-col h-1/5 relative group/title">
        <span>{product._id}</span>

        <span className="text-app-sm ">{product.title}</span>
        <div className="hidden group-hover/title:block absolute top-[25px] border border-app-gray p-2 shadow-2xl z-10 bg-app-white rounded-md">
          <div>
            <span className="font-bold">categories:</span>
            <ul className="list-disc pl-5">
              {product.productType.map((type, i) => (
                <li key={`${product._id}--${type}__${i}`}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
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
