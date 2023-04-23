import React from "react";
import { useScrollUp } from "hooks";
import {
  Offer,
  NewHere,
  Hero,
  CatalogMain,
  CatalogSpecial,
  Brands,
} from "components";

const HomePage: React.FC = () => {
  useScrollUp();

  return (
    <>
      <NewHere />
      <Offer />
      <Hero />
      <CatalogMain />
      <Offer />
      <CatalogSpecial />
      <Brands />
    </>
  );
};

export default HomePage;
