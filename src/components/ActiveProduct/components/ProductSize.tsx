import React from "react";
import { ProductT } from "interface";

interface ProductSizeType {
  sizes: ProductT["sizes"];
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSize: React.FC<ProductSizeType> = ({ sizes, setSelectedSize }) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold uppercase text-app-xsm">size:</label>
      <select
        onChange={(e) => setSelectedSize(e.target.value)}
        className="w-60 h-10 cursor-pointer outline-none border border-app-gray p-1 rounded-md"
      >
        <option disabled>Please select size</option>
        <option value="">select size</option>
        {sizes.map((size) => (
          <option
            key={size._id}
            className={`py-2 cursor-pointer ${
              !size.inStock ? "opacity-5" : ""
            }`}
            disabled={!size.inStock}
            value={size._id}
          >
            {size.mainSize && (
              <>{size.mainSize.toLocaleUpperCase()} &nbsp;-&nbsp;</>
            )}
            {size.size}
            {!size.inStock && <>&nbsp;&nbsp;Not In Stock</>}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSize;
