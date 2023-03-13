import React from "react";
import useAppStore from "../../store/app";

import ProductAccordion from "./ProductAccordion";

const ProductDetails: React.FC = () => {
  const product = useAppStore((state) => state.product);

  return (
    <div className="flex flex-col gap-4 px-4">
      {product && (
        <>
          <h4 className="w-80 tracking-[1px]">{product.title}</h4>

          {product.sale ? (
            <div className="flex flex-col">
              <span className="font-bold text-app-lg text-app-red">
                Now £{product.sale}
              </span>
              <span className="font-bold text-app-base line-through">
                Original Price: £{product.price}
              </span>
            </div>
          ) : (
            <span className="font-bold text-app-lg">£{product.price}</span>
          )}

          {product.rating && (
            <div className="flex items-center gap-2">
              <span>Rating:</span>
              <span>{product.rating}</span>
              <span>{product.votes}</span>
            </div>
          )}

          <span>
            <span className="font-bold uppercase text-app-xsm">colour:</span>
            &nbsp;
            <span className="uppercase tracking-[2px]">{product.colour}</span>
          </span>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold uppercase text-app-xsm">
              size:
            </label>
            <select name="" id="" className="w-60 h-10 cursor-pointer outline-none border border-app-gray p-1 rounded-md">
              <option value="" disabled>
                Please Select Size
              </option>
              {product.sizes.map((size) => (
                <option
                  key={size._id}
                  className={`py-2 cursor-pointer ${
                    !size.inStock ? "opacity-5" : ""
                  }`}
                  disabled={!size.inStock}
                >
                  {size.mainSize && <span>{size.mainSize} - </span>}
                  <span>{size.size}</span>
                  {!size.inStock && <span>&nbsp;&nbsp;Not In Stock</span>}
                </option>
              ))}
            </select>
          </div>

          {/* <ul className="list-disc">
            {product.productType.map((type) => (
              <li key={`product--type-${type}`}>{type}</li>
            ))}
          </ul> */}

          <div className="flex gap-4">
            <button className="bg-app-green-shade text-app-white py-2 w-60 rounded-md uppercase font-bold">
              add to bag
            </button>
            <button className="bg-app-gray-shade rounded-full w-9 h-9 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
              </svg>
            </button>
          </div>

          <ProductAccordion />

          <div className="bg-app-gray-tint text-app-xsm flex flex-col px-2 py-3 mt-2 rounded-sm">
            <span className="font-bold">SIZING HELP</span>
            <span>Still unsure what size to get?</span>
            <span className="underline">Find your recommended size.</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
