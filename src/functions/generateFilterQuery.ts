import { ActiveFiltersT } from "interface";

export default function generateFilterQuery({
  sort,
  productType,
  brand,
  size,
}: ActiveFiltersT): string {
  let base = "";

  if (sort) base += `&sort=${sort}`;
  if (Array.isArray(productType) && productType[0])
    base += `&productType=${productType.join(",")}`;
  if (Array.isArray(brand) && brand[0]) base += `&brand=${brand.join(",")}`;
  if (Array.isArray(size) && size[0]) base += `&size=${size.join(",")}`;

  return base;
}
