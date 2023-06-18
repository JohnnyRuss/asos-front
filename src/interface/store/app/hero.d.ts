import { QueryT } from "./appStore";

export interface HerosT {
  men: HeroT[];
  women: HeroT[];
}

interface HeroT {
  fig: string;
  query: QueryT;
}
