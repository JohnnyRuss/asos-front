import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { FilterStateT } from "interface";

const useFilterStore = create<FilterStateT>()(
  devtools(
    immer(
      persist(
        (set) => ({
          activeDropdown: "INACTIVE",

          filter: {
            sort: "",
            category: "",
            productType: "",
            brand: "",
            size: "",
          },

          setActiveDropdown: (filter: FilterStateT["activeDropdown"]) => {
            set({
              activeDropdown: filter,
            });
          },

          setFilter: (key: keyof FilterStateT["filter"], value: string) => {
            set((state) => ({
              filter: {
                ...state.filter,
                [key]: value,
              },
            }));
          },

          resetFilter: () => {
            set({
              filter: {
                sort: "",
                category: "",
                productType: "",
                brand: "",
                size: "",
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
