export interface LandingT {
  hero: HerosT;
  landingCatalog: LandingCatalogsT;
  trendingBrands: TrendingBrandsT;
}

interface QueryT {
  search_in: QueryFragmentsT;
  search: QueryFragmentsT;
}

interface QueryFragmentsT {
  query: string;
  label: string;
}

interface HerosT {
  men: HeroT[];
  women: HeroT[];
}

interface LandingCatalogsT {
  men: LandingCatalogT;
  women: LandingCatalogT;
}

interface HeroT {
  fig: string;
  query: QueryT;
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
  query: QueryT;
}

interface CatalogSubT {
  _id: string;
  chapter: number;
  title: string;
  label: string;
  fig: string;
  actionLabel: string;
  query: QueryT;
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
