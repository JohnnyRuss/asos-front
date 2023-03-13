import { ProductT } from "./DB/products.types";

export interface AppT {
  navigation: NavigationT;
  footer: FooterT;
  landing: LandingT;
  products: ProductT[];
  product: ProductT | null;
}

///////////////////////////////////////////////////////
/////////////////// < NAVIGATION > ///////////////////
/////////////////////////////////////////////////////

interface NavigationT {
  main: MainNavT[];
  subNavs: SubNavsT;
  sub: SubNavT[];
}

interface MainNavT {
  label: string;
  route: string;
}

interface SubNavsT {
  men: NestedNavRouteT[];
  women: NestedNavRouteT[];
}

interface SubNavT {
  label: string;
  route: string;
  nestedNav: NestedNavT[];
}

interface NestedNavT {
  listType: string;
  title?: string;
  routes: NestedNavRoutesT;
}

interface NestedNavRoutesT {
  men: NestedNavRouteT[];
  women: NestedNavRouteT[];
}

export interface NestedNavRouteT {
  label: string;
  route: string;
  fig?: string;
}

///////////////////////////////////////////////////
/////////////////// < FOOTER > ///////////////////
/////////////////////////////////////////////////

interface FooterT {
  main: FooterNavsT[];
  sub: string[];
}

interface FooterNavsT {
  listTitle: string;
  list: string[];
}

////////////////////////////////////////////////////
/////////////////// < LANDING > ///////////////////
//////////////////////////////////////////////////

interface LandingT {
  hero: HerosT;
  landingCatalog: LandingCatalogsT;
  trendingBrands: TrendingBrandsT;
}

interface HerosT {
  men: HeroT[];
  women: HeroT[];
}

interface HeroT {
  fig: string;
  label?: string;
}

interface LandingCatalogsT {
  men: LandingCatalogT;
  women: LandingCatalogT;
}

interface LandingCatalogT {
  main: CatalogMainT[];
  sub: CatalogSubT[];
}

interface CatalogMainT {
  _id: string;
  title: string;
  label: string;
  fig: string;
}

interface CatalogSubT {
  _id: string;
  chapter: number;
  title: string;
  label: string;
  fig: string;
  actionLabel: string;
}

interface TrendingBrandsT {
  men: TrendingBrandT[];
  women: TrendingBrandT[];
}

interface TrendingBrandT {
  _id: string;
  fig: string;
  name: string;
}
