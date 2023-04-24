import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { navigationData, footerData, landingData } from "lib";
import { AppStoreT } from "interface";

const useAppStore = create<AppStoreT>()(
  devtools(
    immer((set) => ({
      navigation: navigationData,
      footer: footerData,
      landing: landingData,
    }))
  )
);

export default useAppStore;
