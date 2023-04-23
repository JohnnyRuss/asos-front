import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type FilterT =
  | "INACTIVE"
  | "SORT"
  | "CATEGORY"
  | "PRODUCT_TYPE"
  | "BRAND"
  | "SIZE";

interface StateT {
  activeFilter: FilterT;
}

const useFilterStore = create<StateT>()(
  devtools(
    immer(
      persist(
        (set) => ({
          activeFilter: "INACTIVE",
        }),
        { name: "filter" }
      )
    )
  )
);
