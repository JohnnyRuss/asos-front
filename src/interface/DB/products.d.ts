export interface ProductT {
  brand?: ProductBrandT;
  sizes: ProductSizeT[];
  productType: ProductTypeT[];
  details: ProductDetailsT;
  sizeAndFit: ProductSizeAndFitT;
  about: AboutProductT;
  media: ProductMediaT;
  _id: string;
  for: string;
  title: string;
  price: number;
  sale?: number;
  colour: string;
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
  productType: ProductTypeT[];
}

// includes
interface ProductBrandT {
  _id: string;
  name: string;
  fig: string;
  history: string;
  __v: number;
}

interface ProductSizeT {
  size: string;
  inStock: boolean;
  amount: number;
  _id: string;
  mainSize?: string;
}

interface ProductTypeT {
  label: string;
  query: string;
}

interface ProductDetailsT {
  title: string;
  list: string[];
}

interface ProductSizeAndFitT {
  modelWears: string;
  modelHeight: string;
}

interface AboutProductT {
  label: string;
  texture: string;
}

interface ProductMediaT {
  video: ProductVideoT;
  pictures: string[];
}

interface ProductVideoT {
  src: string;
}
