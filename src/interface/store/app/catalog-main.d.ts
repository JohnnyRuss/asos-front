import { QueryT } from "./appStore";

export interface CatalogMainT {
  men: MainT[];
  women: MainT[];
}

interface MainT {
  _id: string;
  title: string;
  label: string;
  fig: string;
  query: QueryT;
}
