export interface LandingT {
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
