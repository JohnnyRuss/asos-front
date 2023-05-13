import React from "react";

interface ProducsCountType {
  productsCount: number;
}

const ProducsCount: React.FC<ProducsCountType> = ({ productsCount }) => {
  return (
    <span className="flex items-center justify-center gap-2 text-app-sm mt-4">
      <span>{productsCount.toLocaleString()}</span>
      <span>styles found</span>
    </span>
  );
};

export default ProducsCount;
