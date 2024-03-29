import React from "react";
import { Link } from "react-router-dom";

import { useAppStore } from "store";
import { useGetRootRoute } from "hooks";
import { Container } from "components/Layouts";

const Brands: React.FC = () => {
  const brands = useAppStore((state) => state.trendingBrands);

  const rootRoute = useGetRootRoute();
  const brandsToRender = brands[rootRoute.label === "women" ? "women" : "men"];

  return (
    <div>
      <Container>
        <div className="pt-9">
          <h4 className="uppercase font-semibold text-app-xl text-center">
            trending bands
          </h4>
          <ul className="flex items-center gap-4 flex-wrap justify-center">
            {brandsToRender.map((brand) => (
              <li className="max-w-[15%]" key={brand._id}>
                <Link
                  to="products"
                  state={{
                    search_for: rootRoute,
                    search_in: brand.query.search_in,
                    search: brand.query.search,
                  }}
                >
                  <figure className="w-full overflow-hidden">
                    <img
                      src={brand.fig}
                      alt={brand.name}
                      className="w-full object-contain"
                    />
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
