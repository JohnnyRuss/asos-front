import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useProductsStore } from "store";

import RelatedProductFig from "./RelatedProductFig";
import RelatedProductDetails from "./RelatedProductDetails";
import { Container } from "components/Layouts";

const RelatedProducts: React.FC = () => {
  const relatedProducts = useProductsStore((state) => state.relatedProducts);
  const { state } = useLocation();

  return (
    <Container>
      <div className="pt-10">
        <span className="font-bold text-xl tracking-wider">
          YOU MIGHT ALSO LIKE
        </span>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(220px,max-content))] justify-center gap-x-5 gap-y-8 auto-rows-max">
          {relatedProducts[0] &&
            relatedProducts.map((product) => (
              <Link
                key={product._id}
                to={`/${state.search_for}/products/${product._id}`}
                state={{
                  search_for: state?.search_for,
                  search_in: state?.search_in,
                  search: state?.search,
                }}
              >
                <div className="grid grid-cols-1 grid-rows-[350px,75px]">
                  <RelatedProductFig
                    brand={product.brand}
                    pictures={product.media.pictures}
                  />
                  <RelatedProductDetails
                    sale={product.sale}
                    brand={product.brand}
                    price={product.price}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default RelatedProducts;
