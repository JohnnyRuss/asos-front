import React from "react";

import useAppStore from "../../store/app";
import { useGetRootRoute, useGetRandomNumber } from "../../hooks";

import { Container, Button } from "../Layouts";

interface CatalogSpecialType {}

const CatalogSpecial: React.FC<CatalogSpecialType> = (props) => {
  const catalogs = useAppStore().landing.landingCatalog;

  const rootRoute = useGetRootRoute();
  const listToRender = catalogs[rootRoute === "men" ? "men" : "women"].sub;

  const randomNumber = useGetRandomNumber({
    max: listToRender.length / 2,
  });

  return (
    <Container>
      <div className="flex justify-center gap-10 my-10">
        {listToRender
          .filter((block) => block.chapter === randomNumber)
          .map((block) => (
            <div key={block._id} className="w-1/3 flex flex-col items-center">
              <figure className="w-full h-[520px] overflow-hidden">
                <img
                  src={block.fig}
                  alt={block.title}
                  className="w-full h-full object-contain object-top"
                />
              </figure>
              <div className="flex flex-col items-center mt-3">
                <span className="uppercase font-bold text-app-big">
                  {block.title}
                </span>
                <span className="text-app-base">{block.label}</span>
                <Button
                  label="shop now"
                  className="border-2 border-app-black mt-3"
                />
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default CatalogSpecial;
