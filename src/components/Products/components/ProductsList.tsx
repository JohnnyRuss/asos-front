import React from "react";
import { ProductLabelT } from "interface";

import { ProductCard } from "components/Layouts";

interface ProductsListType {
  products: ProductLabelT[];
}

const ProductsList: React.FC<ProductsListType> = ({ products }) => {
  return (
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
  );
};

export default ProductsList;
