import { QueryT } from "./appStore";

export interface TrendingBrandsT {
  men: TrendingBrandT[];
  women: TrendingBrandT[];
}

interface TrendingBrandT {
  _id: string;
  fig: string;
  name: string;
  query: QueryT;
}
