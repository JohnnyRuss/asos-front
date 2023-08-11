import React from "react";
import { useShoppingCardStore } from "store";

import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartAside from "./CartAside";

interface ShoppingCardType {}

const ShoppingCard: React.FC<ShoppingCardType> = () => {
  const cartProducts = useShoppingCardStore((state) => state.cartProducts);

  return (
    <main className="min-h-[35vw] bg-app-gray-shade">
      <div className="flex relative bg-indigo-400 h-12">
        <div className="flex-1 bg-pink-400"></div>
        <div className="flex-1 bg-app-black "></div>
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 max-w-container-lg w-full flex items-center text-sm font-bold">
          <div className="flex-1 text-center flex flex-col">
            <span>UP TO 50% OFF</span>
            <span>CERTIFIED BANGERS!</span>
          </div>
          <div className="flex-1 text-center text-app-white">
            FREE WORLDWIDE DELIVERY
          </div>
        </div>
      </div>

      <div className="flex gap-4 max-w-container-lg m-auto pt-4 pb-12">
        <div className="flex-1 flex flex-col gap-4">
          <CartHeader />

          <ul className="flex flex-col gap-6 bg-app-white px-8 py-4">
            {cartProducts[0] &&
              cartProducts.map((product) => (
                <CartItem key={product.productId} product={product} />
              ))}

            {!cartProducts[0] && (
              <span className="inline-block text-center font-bold text-app-black-tr">
                There are no products in cart.
              </span>
            )}
          </ul>

          <CartFooter />
        </div>
        <CartAside />
      </div>
    </main>
  );
};

export default ShoppingCard;
