import React from "react";
import { Link } from "react-router-dom";

import useAppStore from "store/appStore";
import { useGetRootRoute } from "hooks";
import { Container } from "components/Layouts";

const CatalogMain: React.FC = () => {
  const catalogs = useAppStore().catalogMain;

  const rootRoute = useGetRootRoute();
  const listToRender = catalogs[rootRoute.label === "men" ? "men" : "women"];

  return (
    <Container>
      <div className="flex justify-between gap-10 my-10">
        {listToRender.map((block) => (
          <Link
            key={block._id}
            to="products"
            state={{
              search_for: rootRoute,
              search_in: {
                label: block.query.search_in.label,
                query: block.query.search_in.query,
              },
              search: {
                label: block.query.search.label,
                query: block.query.search.query,
              },
            }}
            className="w-1/4 flex flex-col"
          >
            <figure className="w-full h-[380px] overflow-hidden">
              <img
                src={block.fig}
                alt={block.title}
                className="w-full h-full object-cover object-top"
              />
            </figure>
            <div className="flex flex-col items-center mt-3">
              <span className="uppercase font-bold text-app-big">
                {block.title}
              </span>
              <span className="text-app-base">{block.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default CatalogMain;
