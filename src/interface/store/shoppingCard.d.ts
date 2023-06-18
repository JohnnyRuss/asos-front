import { ProductT } from "interface/DB";

export interface ShoppingCardStoreT extends ShoppingCardStoreActionsT {
  products: ProductToCardT[];
}

interface ShoppingCardStoreActionsT {
  addToBag: (args: AddToBagArgsT) => void;
}

interface ProductToCardT {
  productId: ProductT["_id"];
  color: ProductT["colour"];
  sizes: ProductT["sizes"];
  selectedSizeId: string;
  title: ProductT["title"];
  price: ProductT["price"];
  thumbnail: string;
}

type AddToBagArgsT = ProductToCardT;
