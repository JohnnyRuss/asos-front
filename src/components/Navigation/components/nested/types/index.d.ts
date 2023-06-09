import { NavBaseQueryT } from "interface";

export interface NestedListQueryT extends NavBaseQueryT {}

export interface NestedListT {
  title: string;
  query: NestedListQueryT;
  routes: NavLinkWithFigT[];
  clearDropdownState;
}
