import { ProductT } from "interface/DB";

export interface ShoppingCardStoreT extends ShoppingCardStoreActionsT {
  cartProducts: ProductToCardT[];
}

export interface ShoppingCardStoreActionsT {
  addToBag: (args: AddToBagArgsT) => void;
  removeFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string, quantity: number) => void;
}

export interface ProductToCardT {
  productId: ProductT["_id"];
  color: ProductT["colour"];
  sizes: ProductT["sizes"];
  selectedSizeId: string;
  title: ProductT["title"];
  price: ProductT["price"];
  thumbnail: string;
  quantity: number;
}

type AddToBagArgsT = ProductToCardT;
