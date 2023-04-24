import { ProductT } from "interface/DB/products";

export interface ProductsStoreT extends ProductsStoreActionsT {
  products: ProductT[];
  product: ProductT | null;

  productsLoadingStatus: RequestStatusT;
  productLoadingStatus: RequestStatusT;
}

interface ProductsStoreActionsT {
  getProducts: (params: {
    search_for: string;
    search_in: string;
    search: string;
  }) => void;

  getProduct: (productId: string) => void;
}

interface RequestStatusT {
  loading: boolean;
  error: boolean;
  message: string;
}
