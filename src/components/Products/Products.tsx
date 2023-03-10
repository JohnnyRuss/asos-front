import React from "react";
import useAppStore from "../../store/app";

import { Container, Spinner, Path } from "../Layouts";
import ProductCard from "../Layouts/ProductCard/ProductCard";

const Products: React.FC = () => {
  const { products, loadingStatus } = useAppStore((state) => ({
    products: state.products,
    loadingStatus: state.productsLoadingStatus,
  }));

  return (
    <div className="relative min-h-screen">
      {loadingStatus.loading && <Spinner />}
      {!loadingStatus.loading && (
        <Container>
          <Path />

          <span className="flex items-center justify-center gap-2 text-app-sm">
            <span>{products.length.toLocaleString()}</span>
            <span>styles found</span>
          </span>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,_300px))] justify-center content-start gap-x-6 gap-y-8 py-5 ">
            {products[0] &&
              products.map((product) => (
                <ProductCard
                  product={{
                    title: product.title,
                    _id: product._id,
                    media: product.media,
                    price: product.price,
                    sale: product.sale,
                    colour: product.colour,
                    productType: product.productType,
                  }}
                  key={product._id}
                  passRouteQuery={true}
                />
              ))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Products;
