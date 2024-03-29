import React from "react";

interface ProductActionsType {
  handleAddToBag: () => void;
}

const ProductActions: React.FC<ProductActionsType> = ({ handleAddToBag }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={handleAddToBag}
        className="bg-app-green-shade text-app-white py-2 w-60 rounded-md uppercase font-bold"
      >
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
  );
};

export default ProductActions;
