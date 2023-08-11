import React from "react";

import { useShoppingCardStore } from "store";
import { createImageUrl } from "utils";

import { ProductToCardT } from "interface/store/shoppingCard";

interface CartItemType {
  product: ProductToCardT;
}

const CartItem: React.FC<CartItemType> = ({ product }) => {
  const { increaseProductQuantity, onRemove } = useShoppingCardStore(
    (state) => ({
      increaseProductQuantity: state.increaseProductQuantity,
      onRemove: state.removeFromCart,
    })
  );

  return (
    <li className="h-56 pb-6 flex gap-2 items-start border-b border-b-app-dark-gray last:border-b-0">
      <figure className="h-full w-40 overflow-hidden">
        <img
          className="object-contain w-full h-full"
          src={createImageUrl(product.thumbnail)}
          alt={product.title}
        />
      </figure>

      <div className="flex flex-col self-stretch gap-2 relative flex-1">
        <span className="font-bold">£{product.price.toFixed(2)}</span>

        <span>{product.title}</span>

        <div className="flex items-center gap-2 mt-6">
          <span className="border-r border-r-app-dark-gray pr-3 uppercase">
            {product.color}
          </span>

          <div className="border-r border-r-app-dark-gray pr-3">
            <select name="size" id="" className="w-16 outline-none">
              {product.sizes.map((size) => (
                <option value={size._id} key={size._id}>
                  {size.size}
                </option>
              ))}
            </select>
          </div>

          <div className="p-l-3">
            <select
              name="quantity"
              id=""
              className="w-16 outline-none"
              onChange={(e) =>
                increaseProductQuantity(product.productId, +e.target.value)
              }
            >
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (quantity) => (
                  <option
                    value={quantity}
                    key={`quantity-${quantity}`}
                    selected={product.quantity === quantity}
                  >
                    {quantity}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <button className="w-max mt-auto p-2 border border-app-dark-gray flex items-center gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
            </svg>
          </span>
          <p className="first-letter:capitalize">add to favorites</p>
        </button>

        <button
          className="absolute top-1 right-1 text-2xl"
          onClick={() => onRemove(product.productId)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
