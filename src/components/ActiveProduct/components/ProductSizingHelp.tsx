import React from "react";

interface ProductSizingHelpType {}

const ProductSizingHelp: React.FC<ProductSizingHelpType> = (props) => {
  return (
    <div className="bg-app-gray-tint text-app-xsm flex flex-col px-2 py-3 mt-2 rounded-sm">
      <span className="font-bold">SIZING HELP</span>
      <span>Still unsure what size to get?</span>
      <span className="underline">Find your recommended size.</span>
    </div>
  );
};

export default ProductSizingHelp;
