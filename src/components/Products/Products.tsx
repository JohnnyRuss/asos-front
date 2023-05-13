/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useProductsStore, useFilterStore } from "store";
import { useGetProductsQueryStr } from "hooks";

import Heading from "./components/Heading";
import ProducsCount from "./components/ProducsCount";
import ProductsList from "./components/ProductsList";
import { Container, Spinner, Path, Filter } from "components/Layouts";

const Products: React.FC = () => {
  const { products, loadingStatus, getFilteredProducts } = useProductsStore(
    (state) => ({
      products: state.products,
      loadingStatus: state.productsLoadingStatus,
      getFilteredProducts: state.getFilteredProducts,
    })
  );

  const activeFilters = useFilterStore((state) => state.filter);
  const getProductsQueryStr = useGetProductsQueryStr();

  useEffect(() => {
    const timer = setTimeout(() => {
      getFilteredProducts(getProductsQueryStr(), activeFilters);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [activeFilters]);

  return (
    <div className="relative min-h-screen">
      <Path />

      <Heading />

      <Filter />

      <Container>
        {loadingStatus.loading && <Spinner />}

        {!loadingStatus.loading && (
          <>
            <ProducsCount productsCount={products.length} />

            <ProductsList products={products} />
          </>
        )}
      </Container>
    </div>
  );
};

export default Products;
