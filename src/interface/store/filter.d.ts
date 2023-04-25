import { ProductT } from "interface";

export interface FilterStoreT extends FilterStoreActionsT {
  activeDropdown: DropdownT;
  filter: FilterT;
}

interface FilterStoreActionsT {
  setActiveDropdown: (filter: DropdownTS) => void;
  setFilter: (key: keyof FilterT, value: string) => void;
  resetFilter: () => void;
}

export type DropdownT =
  | "INACTIVE"
  | "SORT"
  | "CATEGORY"
  | "PRODUCT_TYPE"
  | "BRAND"
  | "SIZE";

export type FilterT = {
  sort: string;
  category: string;
  productType: string;
  brand: string;
  size: string;
};
