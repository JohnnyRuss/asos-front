import { ProductFiltersT, ActiveFiltersT } from "interface";

export default function detectActiveFilterLabel(
  productsFilter: ProductFiltersT,
  key: keyof ProductFiltersT,
  filter: ActiveFiltersT
): string {
  return key === "sort"
    ? productsFilter.sort.find((sortType) => sortType.query === filter?.sort)
        ?.label || ""
    : key === "size" || key === "brand"
    ? filter[key][filter[key].length - 1] || ""
    : productsFilter[key].find(
        (type) => type.query === filter[key][filter.productType.length - 1]
      )?.label || "";
}
