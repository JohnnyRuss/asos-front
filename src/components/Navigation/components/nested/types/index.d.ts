export interface NestedListQueryT {
  search_for: string;
  search_in: {
    label: string;
    route: string;
  };
}

export interface NestedListT {
  title: string;
  query: NestedListQueryT;
  routes: NavLinkWithFigT[];
}
