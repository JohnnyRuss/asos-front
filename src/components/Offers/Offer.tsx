import React from "react";

import { useGetRandomNumber } from "../../hooks";

import { Container } from "../Layouts";

const offers = [
  { id: 0, element: <OutletOffer /> },
  { id: 1, element: <MajorLayerOffer /> },
];

const Offer: React.FC = (props) => {
  const randomNumber = useGetRandomNumber({ max: offers.length });

  return (
    <React.Fragment key={`random--offer---${randomNumber}`}>
      {offers.map((el) => (el.id === randomNumber ? el.element : <></>))}
    </React.Fragment>
  );
};

export default Offer;

function OutletOffer() {
  return (
    <div className="bg-app-cyan">
      <Container>
        <div className="text-center py-10">
          <div className="outlet">
            <span className="outlet-o"></span>
            <span>utlet</span>
          </div>
          <span className="text-app-2xl font-bold uppercase">
            25% off spring styles!
          </span>
          <br />
          <span className="text-app-xl font-bold uppercase">
            up to 70% off already
          </span>
          <br />
          <span className="text-app-lg font-bold">
            Wih code{" "}
            <span className="border-2 border-app-black px-2 py-1">BREEZE</span>
          </span>
          <br />
          <span className="text-app-xsm">
            Outlet items only. See website banner for Ts&Cs. Selected marked
            products excluded from promo.
          </span>
        </div>
      </Container>
    </div>
  );
}

function MajorLayerOffer() {
  return (
    <div className="bg-app-green">
      <Container>
        <div className="text-center flex flex-col gap-2 py-5">
          <div className="text-app-2xl font-bold uppercase flex flex-col leading-none">
            up to 50% off <br /> major layers! <br /> coats,knits,boots & more
          </div>
          <p className="text-app-xsm">
            Limited time only. Selected styles marked down as shown.
          </p>
        </div>
      </Container>
    </div>
  );
}
