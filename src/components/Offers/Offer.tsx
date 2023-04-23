import React from "react";
import { useGetRandomNumber } from "hooks";
import MajorLayer from "./components/MajorLayer";
import Outlet from "./components/Outlet";

const offers = [
  { id: 0, element: <Outlet /> },
  { id: 1, element: <MajorLayer /> },
];

const Offer: React.FC = () => {
  const randomNumber = useGetRandomNumber({ max: offers.length });
  const offer = offers.find((offer) => offer.id === randomNumber);

  return <React.Fragment>{offer?.element}</React.Fragment>;
};

export default Offer;
