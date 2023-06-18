import { QueryT } from "./appStore";

export interface CatalogSubT {
  men: SubT[];
  women: SubT[];
}

interface SubT {
  _id: string;
  chapter: number;
  title: string;
  label: string;
  fig: string;
  actionLabel: string;
  query: QueryT;
}
