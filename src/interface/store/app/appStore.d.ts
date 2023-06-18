import { NavigationT } from "./navigation";
import { HerosT } from "./hero";
import { CatalogMainT } from "./catalog-main";
import { CatalogSubT } from "./catalog-sub";
import { TrendingBrandsT } from "./trending-brands";
import { FooterT } from "./footer";

export interface AppStoreT {
  navigation: NavigationT;
  hero: HerosT;
  catalogMain: CatalogMainT;
  catalogSub: CatalogSubT;
  trendingBrands: TrendingBrandsT;
  footer: FooterT;
}

export interface QueryT {
  search_in: QueryFragmentsT;
  search: QueryFragmentsT;
}

interface QueryFragmentsT {
  query: string;
  label: string;
}
