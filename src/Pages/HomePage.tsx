import React from "react";

import { useScrollUp } from "../hooks";

import Offers from "../components/Offers/Offers";
import Hero from "../components/Hero/Hero";
import CatalogMain from "../components/Catalog/CatalogMain";
import Offer from "../components/Offers/Offer";
import CatalogSpecial from "../components/Catalog/CatalogSpecial";
import Brands from "../components/Brands/Brands";

const HomePage: React.FC = () => {
  useScrollUp();

  return (
    <>
      <Offers />
      <Hero />
      <CatalogMain />
      <Offer />
      <CatalogSpecial />
      <Brands />
    </>
  );
};

export default HomePage;
