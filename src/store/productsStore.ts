import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { axiosQuery } from "service";
import { ProductsStoreT } from "interface";

import { updateRequestStatus } from "./helpers";
import { generateFilterQuery } from "functions";

const useProductsStore = create<ProductsStoreT>()(
  devtools(
    immer((set) => ({
      products: [],
      relatedProducts: [],
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
            productsLoadingStatus: updateRequestStatus(),
          });

          const { data } = await axiosQuery.get(
            `products?search_for=${search_for}&search_in=${search_in}${
              search ? `&search=${search}` : ""
            }`
          );

          set({ products: data });
        } catch (error: any) {
          console.log(error);
          set({
            productLoadingStatus: updateRequestStatus(
              false,
              true,
              error.message
            ),
          });
        } finally {
          set({
            productsLoadingStatus: updateRequestStatus(false),
          });
        }
      },

      getFilteredProducts: async (
        { search_for, search_in, search },
        { brand, productType, size, sort }
      ) => {
        try {
          set({
            productsLoadingStatus: updateRequestStatus(),
          });

          let baseQuery: string = `products?search_for=${search_for}&search_in=${search_in}${
            search ? `&search=${search}` : ""
          }`;

          const filterQuery = generateFilterQuery({
            sort,
            productType,
            brand,
            size,
          });

          if (filterQuery) baseQuery += filterQuery;

          const { data } = await axiosQuery.get(baseQuery);

          set({ products: data });
        } catch (error: any) {
          console.log(error);
          set({
            productLoadingStatus: updateRequestStatus(
              false,
              true,
              error.message
            ),
          });
        } finally {
          set({
            productsLoadingStatus: updateRequestStatus(false),
          });
        }
      },

      getProduct: async (productId) => {
        try {
          set({
            productLoadingStatus: updateRequestStatus(),
          });

          const { data } = await axiosQuery.get(`products/${productId}`);

          set({ product: data });
        } catch (error: any) {
          set({
            productLoadingStatus: updateRequestStatus(
              false,
              true,
              error.message
            ),
          });
        } finally {
          set({
            productLoadingStatus: updateRequestStatus(false),
          });
        }
      },

      getRelatedProducts: async (productId) => {
        try {
          const { data } = await axiosQuery(`products/${productId}/related`);
          set({ relatedProducts: data });
        } catch (error) {
          console.log(error);
        }
      },
    }))
  )
);

export default useProductsStore;
