import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import axios from "axios";

import navData from "../lib/navigation.json";
import footerData from "../lib/footer.json";
import landingData from "../lib/landing.json";

import { AppT } from "../interface/app.types";
interface StateT extends AppT {
  getProducts: () => void;
  getProduct: (productId: string) => void;
}

export type NestedNavListTypeT =
  | "TEXT_ONLY"
  | "ROUNDED_FIG_X"
  | "ROUNDED_FIG_Y"
  | "FIG_ONLY";

const useAppStore = create<StateT>()(
  devtools(
    immer((set) => ({
      navigation: navData,
      footer: footerData,
      landing: landingData,
      products: [],
      product: null,

      getProducts: async () => {
        const { data } = await axios.get("http://localhost:4013/api/v1/app");
        set({ products: data });
      },

      getProduct: async (productId) => {
        const { data } = await axios.get(
          `http://localhost:4013/api/v1/app/${productId}`
        );
        set({ product: data });
      },
    }))
  )
);

export default useAppStore;
