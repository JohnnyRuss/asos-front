export interface ProductT {
  details: ProductDetailsT;
  sizeAndFit: ProductSizeAndFitT;
  about: AboutProductT;
  media: ProductMediaT;
  _id: string;
  brand?: ProductBrandT;
  for: string;
  productType: string[];
  title: string;
  price: number;
  sale?: number;
  colour: string;
  sizes: ProductSizeT[];
  productCode: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  rating?: number;
  votes?: number;
}

export interface ProductLabelT {
  _id: string;
  media: ProductMediaT;
  title: string;
  price: number;
  sale?: number;
  colour: string;
}

interface ProductSizeT {
  size: string;
  inStock: boolean;
  amount: number;
  _id: string;
  mainSize?: string;
}

interface ProductBrandT {
  _id: string;
  name: string;
  fig: string;
  history: string;
  __v: number;
}

interface ProductMediaT {
  video: ProductVideoT;
  pictures: string[];
}

interface ProductVideoT {
  src: string;
}

interface AboutProductT {
  label: string;
  texture: string;
}

interface ProductSizeAndFitT {
  modelWears: string;
  modelHeight: string;
}

interface ProductDetailsT {
  title: string;
  list: string[];
}
