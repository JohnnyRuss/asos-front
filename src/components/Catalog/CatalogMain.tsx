import React from "react";

import useAppStore from "store/appStore";
import { useGetRootRoute } from "hooks";
import { Container } from "components/Layouts";

const CatalogMain: React.FC = () => {
  const catalogs = useAppStore().landing.landingCatalog;

  const rootRoute = useGetRootRoute();
  const listToRender = catalogs[rootRoute === "men" ? "men" : "women"].main;

  return (
    <Container>
      <div className="flex justify-between gap-10 my-10">
        {listToRender.map((block) => (
          <div key={block._id} className="w-1/4 flex flex-col">
            <figure className="w-full h-[380px] overflow-hidden">
              <img
                src={block.fig}
                alt={block.title}
                className="w-full h-full object-cover object-top"
              />
            </figure>
            <div className="flex flex-col items-center mt-3">
              <span className="uppercase font-bold text-app-big">{block.title}</span>
              <span className="text-app-base">{block.label}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CatalogMain;
