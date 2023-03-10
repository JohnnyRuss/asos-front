import React from "react";

import "./offers.css";
import { Container } from "../Layouts";
import Offer from "./Offer";

const Offers: React.FC = () => {
  return (
    <>
      <NewHereOffer />
      <Offer />
    </>
  );
};

export default Offers;

function NewHereOffer() {
  return (
    <div className="bg-app-black text-app-white">
      <Container>
        <div className="relative flex items-center justify-between h-12">
          <button className="border border-app-white w-28">WOMEN</button>

          <p className="flex flex-col items-center">
            <span className="font-bold">
              NEW HERE ? Get 15% off 100,000+ styles!*
            </span>
            <span className="text-app-sm font-bold">With code : HELLOASOS</span>
          </p>

          <button className="border border-app-white w-28">MEN</button>

          {false && (
            <blockquote className="title absolute top-[100%] w-[760px]  text-center bg-app-gray-shade text-app-black rounded-md text-app-sm">
              *Enter code HELLOASOS at checkout to receive discount on first
              order only over €30. Ends 09:00 UTC+2 28.08.2023. Code can be used
              on first order only up to a maximum pre-discount spend of €690.
              Country exclusions apply. Can’t be used with other promo codes or
              on gift vouchers, delivery charges, Premier Delivery or ASOS
              Marketplace. Selected marked products excluded from promo.
            </blockquote>
          )}
        </div>
      </Container>
    </div>
  );
}
