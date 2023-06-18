import React from "react";
import ShoppingCard from "components/ShoppingCard/ShoppingCard";

interface ShoppingCardPageType {}

const ShoppingCardPage: React.FC<ShoppingCardPageType> = (props) => {
  return <ShoppingCard />;
};

export default ShoppingCardPage;
