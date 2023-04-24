import { NavigationT } from "./navigation";
import { FooterT } from "./footer";
import { LandingT } from "./landing";

export interface AppStoreT {
  navigation: NavigationT;
  footer: FooterT;
  landing: LandingT;
}
