import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ShoppingCardStoreT } from "interface/store/shoppingCard";

const useShoppingCardStore = create<ShoppingCardStoreT>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          products: [],

          addToBag: (args) => {
            const products = get().products;

            const isExistingProduct = products.some(
              (p) =>
                p.productId === args.productId &&
                p.selectedSizeId === args.selectedSizeId
            );

            if (isExistingProduct) return;

            products.unshift(args);

            set((state) => ({
              ...state,
              products,
            }));
          },
        }),
        { name: "asos-shopping-card" }
      )
    )
  )
);

export default useShoppingCardStore;
