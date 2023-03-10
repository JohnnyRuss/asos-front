import React from "react";

import Offers from "../components/Offers/Offers";
import Hero from "../components/Hero/Hero";
import CatalogMain from "../components/Catalog/CatalogMain";
import Offer from "../components/Offers/Offer";
import CatalogSpecial from "../components/Catalog/CatalogSpecial";

const HomePage: React.FC = () => {
  return (
    <>
      <Offers />
      <Hero />
      <CatalogMain />
      <Offer />
      <CatalogSpecial />
    </>
  );
};

export default HomePage;
