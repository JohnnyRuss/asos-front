import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import {
  navigationData,
  footerData,
  heroData,
  catalogMainData,
  catalogSubData,
  trendingBrandsData,
} from "lib";
import { AppStoreT } from "interface";

const useAppStore = create<AppStoreT>()(
  devtools(
    immer((set) => ({
      navigation: navigationData,
      hero: heroData,
      catalogMain: catalogMainData,
      catalogSub: catalogSubData,
      trendingBrands: trendingBrandsData,
      footer: footerData,
    }))
  )
);

export default useAppStore;
