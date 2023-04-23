import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import axios from "axios";

import navData from "../lib/navigation.json";
import footerData from "../lib/footer.json";
import landingData from "../lib/landing.json";

import { AppT } from "../interface/store/app";
interface StateT extends AppT {
  productsLoadingStatus: {
    loading: boolean;
    error: boolean;
    message: string;
  };

  productLoadingStatus: {
    loading: boolean;
    error: boolean;
    message: string;
  };

  getProducts: (params: {
    search_for: string;
    search_in: string;
    search: string;
  }) => void;
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

      productsLoadingStatus: {
        loading: false,
        error: false,
        message: "",
      },

      productLoadingStatus: {
        loading: false,
        error: false,
        message: "",
      },

      getProducts: async ({ search_for, search_in, search }) => {
        try {
          set({
            productsLoadingStatus: {
              loading: true,
              error: false,
              message: "",
            },
          });

          // console.log({
          //   search_for,
          //   search_in,
          //   search,
          // });

          const { data } = await axios.get(
            `http://localhost:4013/api/v1/products?search_for=${search_for}&search_in=${search_in}${search ? `&search=${search}`:""}`
          );

          set({ products: data });
        } catch (error) {
          console.log(error);
        } finally {
          set({
            productsLoadingStatus: {
              loading: false,
              error: true,
              message: "",
            },
          });
        }
      },

      getProduct: async (productId) => {
        try {
          set({
            productLoadingStatus: {
              loading: true,
              error: false,
              message: "",
            },
          });

          const { data } = await axios.get(
            `http://localhost:4013/api/v1/app/${productId}`
          );

          set({ product: data });
        } catch (error) {
          console.log(error);
        } finally {
          set({
            productLoadingStatus: {
              loading: false,
              error: true,
              message: "",
            },
          });
        }
      },
    }))
  )
);

export default useAppStore;
