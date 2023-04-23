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

export type FilterStateT = {
  activeDropdown: DropdownT;
  setActiveDropdown: (filter: DropdownTS) => void;
  filter: FilterT;
  setFilter: (key: keyof FilterT, value: string) => void;
  resetFilter: () => void;
};
