import React from "react";
import useAppStore from "../../store/app";

import { Container } from "../Layouts";
import ProductCard from "../Layouts/ProductCard/ProductCard";

const Products: React.FC = () => {
  const products = useAppStore((state) => state.products);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,_300px))] justify-center gap-x-6 gap-y-8 py-5 min-h-screen">
          {/* <div className="flex gap-4"> */}
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
                }}
                key={product._id}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
