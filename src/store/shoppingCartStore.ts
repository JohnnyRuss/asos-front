import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ShoppingCardStoreT } from "interface/store/shoppingCard";

const useShoppingCardStore = create<ShoppingCardStoreT>()(
  devtools(
    persist(
      immer((set, get) => ({
        cartProducts: [],

        addToBag: (args) => {
          let cartProducts = get().cartProducts;

          const isExistingProduct = cartProducts.some(
            (p) =>
              p.productId === args.productId &&
              p.selectedSizeId === args.selectedSizeId
          );

          if (isExistingProduct) return;

          cartProducts = [args, ...cartProducts];

          set((state) => ({
            ...state,
            cartProducts,
          }));
        },

        removeFromCart: (productId) => {
          const cartProducts = get().cartProducts.filter(
            (p) => p.productId !== productId
          );

          set((state) => ({
            ...state,
            cartProducts,
          }));
        },

        // increaseProductQuantity: (productId, quantity) => {
        //   const cartProducts = get().cartProducts;

        //   const productIndex = cartProducts.findIndex(
        //     (p) => p.productId === productId
        //   );

        //   if (productIndex < 0) return;

        //   const productToModify = cartProducts[productIndex];
        //   productToModify.quantity = quantity;

        //   cartProducts[productIndex] = productToModify;

        //   set((state) => {});
        // },

        increaseProductQuantity: (productId, quantity) =>
          set((state) => {
            const productToModify = state.cartProducts.find(
              (p) => p.productId === productId
            );

            if (!productToModify) return;

            productToModify.quantity = quantity;

            return;
          }),
      })),
      { name: "asos-shopping-card" }
    )
  )
);

export default useShoppingCardStore;

export const useShoppingCardSubTotal = () =>
  useShoppingCardStore((state) => state.cartProducts).reduce(
    (acc, product) => (acc += product.price * product.quantity),
    0
  );
