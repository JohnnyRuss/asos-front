import { ProductT, RelatedProductT } from "interface/DB";
import { ActiveFiltersT } from "interface/store";

export interface ProductsStoreT extends ProductsStoreActionsT {
  products: ProductT[];
  relatedProducts: RelatedProductT[];
  product: ProductT | null;

  productsLoadingStatus: RequestStatusT;
  productLoadingStatus: RequestStatusT;
}

interface GetProductsBaseQueryT {
  search_for: string;
  search_in: string;
  search: string;
}

interface ProductsStoreActionsT {
  getProducts: (params: GetProductsBaseQueryT) => void;

  getProduct: (productId: string) => void;

  getFilteredProducts: (
    baseQuery: GetProductsBaseQueryT,
    params: ActiveFiltersT
  ) => void;

  getRelatedProducts: (productId: string) => void;
}

interface RequestStatusT {
  loading: boolean;
  error: boolean;
  message: string;
}
