import React from "react";
import { useNavigate } from "react-router-dom";

import useAppStore from "store/appStore";
import { useGetRootRoute, useGetRandomNumber } from "hooks";
import { Container, Button } from "components/Layouts";

const CatalogSpecial: React.FC = () => {
  const navigate = useNavigate();

  const catalogs = useAppStore().landing.landingCatalog;

  const rootRoute = useGetRootRoute();
  const listToRender =
    catalogs[rootRoute.label === "men" ? "men" : "women"].sub;

  const randomNumber = useGetRandomNumber({
    max: listToRender.length / 2,
  });

  return (
    <Container>
      <div className="flex justify-center gap-10 my-10">
        {listToRender
          .filter((block) => block.chapter === randomNumber)
          .map((block, i) => (
            <div
              key={`${block._id}--${i}`}
              className="w-1/3 flex flex-col items-center"
            >
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
                  onClick={() =>
                    navigate("products", {
                      state: {
                        search_for: rootRoute,
                        search_in: {
                          label: block.query.search_in.label,
                          route: block.query.search_in.query,
                        },
                        search: {
                          label: block.query.search.label,
                          route: block.query.search.query,
                        },
                      },
                    })
                  }
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
