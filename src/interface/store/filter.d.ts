export interface FilterStoreT extends FilterStoreActionsT {
  activeDropdown: FilterDropdownT;
  filter: ActiveFiltersT;
  productsFilter: ProductFiltersT;
}

export interface FilterStoreActionsT {
  setActiveDropdown: (filter: DropdownTS) => void;
  setFilter: (key: keyof ActiveFiltersT, value: string) => void;
  resetFilter: () => void;
  getProductsFilterQuery: (params: {
    search_for: string;
    search_in: string;
    search: string;
  }) => void;
}

type FilterDropdownT =
  | "INACTIVE"
  | "SORT"
  | "CATEGORY"
  | "PRODUCT_TYPE"
  | "BRAND"
  | "SIZE";

type ActiveFiltersT = {
  sort: string;
  productType: string[];
  brand: string[];
  size: string[];
};

interface ProductFiltersT {
  sort: ProductFilterT[];
  productType: ProductFilterT[];
  size: string[];
  brand: FilterBrandT[];
}

interface ProductFilterT {
  label: string;
  query: string;
}

interface FilterBrandT {
  _id: string;
  name: string;
}
