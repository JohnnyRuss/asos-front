import React from "react";
import useAppStore from "store/appStore";

import HelpAndInformation from "./components/HelpAndInformation";
import AboutAsos from "./components/AboutAsos";
import MoreFromAsos from "./components/MoreFromAsos";

const Footer: React.FC = () => {
  const footer = useAppStore().footer;
  
  return (
    <footer>
      <HelpAndInformation />

      <AboutAsos main={footer.main} />

      <MoreFromAsos sub={footer.sub} />
    </footer>
  );
};

export default Footer;
