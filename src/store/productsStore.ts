import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { axiosQuery } from "service";
import { ProductsStoreT } from "interface";

const useProductsStore = create<ProductsStoreT>()(
  devtools(
    immer((set) => ({
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

          const { data } = await axiosQuery.get(
            `products?search_for=${search_for}&search_in=${search_in}${
              search ? `&search=${search}` : ""
            }`
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

      getFilteredProducts: async (
        { search_for, search_in, search },
        { brand, productType, size, sort }
      ) => {
        try {
          set({
            productsLoadingStatus: {
              loading: true,
              error: false,
              message: "",
            },
          });

          let baseQuery: string = `products?search_for=${search_for}&search_in=${search_in}${
            search ? `&search=${search}` : ""
          }`;

          if (sort) baseQuery += `&sort=${sort}`;
          if (Array.isArray(productType) && productType[0])
            baseQuery += `&productType=${productType.join(",")}`;
          if (Array.isArray(brand) && brand[0])
            baseQuery += `&brand=${brand.join(",")}`;
          if (Array.isArray(size) && size[0])
            baseQuery += `&size=${size.join(",")}`;

          const { data } = await axiosQuery.get(baseQuery);

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

          const { data } = await axiosQuery.get(`products/${productId}`);

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

export default useProductsStore;
