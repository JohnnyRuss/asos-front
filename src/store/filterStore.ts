import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { FilterStoreT } from "interface";
import { axiosQuery } from "service";

const useFilterStore = create<FilterStoreT>()(
  devtools(
    immer(
      persist(
        (set) => ({
          activeDropdown: "INACTIVE",

          filter: {
            sort: "",
            // category: "",
            productType: [],
            brand: [],
            size: [],
          },

          productsFilter: {
            productType: [],
            brand: [],
            size: [],
            sort: [],
          },

          setActiveDropdown: (filter: FilterStoreT["activeDropdown"]) => {
            set({
              activeDropdown: filter,
            });
          },

          setFilter: (key: keyof FilterStoreT["filter"], value: string) => {
            function pushToFilter(arr: string[], value: string): string[] {
              if (arr.includes(value))
                return arr.filter((val) => val !== value);
              else return [...arr, value];
            }

            set((state) => ({
              filter: {
                ...state.filter,
                [key]:
                  key === "sort"
                    ? value
                    : pushToFilter(state.filter[key], value),
              },
            }));
          },

          getProductsFilterQuery: async ({ search_for, search_in, search }) => {
            try {
              const { data } = await axiosQuery.get(
                `products/filter?search_for=${search_for}&search_in=${search_in}${
                  search ? `&search=${search}` : ""
                }`
              );

              set({
                productsFilter: {
                  size: data.sizes,
                  brand: data.brands,
                  productType: data.productTypes,
                  sort: data.sort,
                },
              });
            } catch (error) {
              console.log(error);
            }
          },

          resetFilter: () => {
            set({
              filter: {
                sort: "",
                // category: "",
                productType: [],
                brand: [],
                size: [],
              },
            });
          },
        }),
        // Persist Options
        {
          name: "filter",
          partialize: (state) =>
            Object.fromEntries(
              Object.entries(state).filter(
                (key) => !["activeDropdown"].includes(key[0])
              )
            ),
        }
      )
    )
  )
);

export default useFilterStore;
