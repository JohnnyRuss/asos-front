import { create } from "zustand";

import navData from "../lib/navigation.json";
import footerData from "../lib/footer.json";
import landingData from "../lib/landing.json";

import { AppT } from "../interface/app.types";

export type NestedNavListTypeT =
  | "TEXT_ONLY"
  | "ROUNDED_FIG_X"
  | "ROUNDED_FIG_Y"
  | "FIG_ONLY";

const useAppStore = create<AppT>()((set) => ({
  navigation: navData,
  footer: footerData,
  landing: landingData,
}));

export default useAppStore;
