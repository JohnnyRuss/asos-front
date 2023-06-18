export interface NavigationT {
  main: NavLinkT[];
  secondary: SecondaryNavigationT;
  nested: NestedNavigationT[];
}

export type NavigationRootRouteT = {
  label: "men" | "women";
  query: "men" | "women";
};

export interface NavLinkT {
  label: string;
  query: string;
}

export interface NavLinkWithFigT extends NavLinkT {
  fig?: string;
}

export interface NavBaseQueryT {
  search_for: NavigationRootRouteT;
  search_in?: NavLinkT | null;
  search?: NavLinkT | null;
}

// PARTIALS
interface SecondaryNavigationT {
  men: NavLinkT[];
  women: NavLinkT[];
}

interface NestedNavigationT extends NavLinkT {
  nestedNav: NestedNavT[];
}

interface NestedNavT {
  title?: string;
  listType: string;
  routes: NestedNavRoutesT;
}

export type NestedNavListTypeT =
  | "TEXT_ONLY"
  | "ROUNDED_FIG_X"
  | "ROUNDED_FIG_Y"
  | "FIG_ONLY";

interface NestedNavRoutesT {
  men: NavLinkWithFigT[];
  women: NavLinkWithFigT[];
}

// HELPERS
