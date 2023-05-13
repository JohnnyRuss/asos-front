import { ProductT } from "interface";
import React, { useState } from "react";
import { createImageUrl } from "utils";

interface FigureType {
  alt: string;
  productMedia: ProductT["media"];
  children: React.ReactNode;
}

const Figure: React.FC<FigureType> = ({ productMedia, alt, children }) => {
  const [activeFig, setActiveFig] = useState<number>(0);
  return (
    <figure
      className="h-4/5 relative"
      onMouseEnter={() => setActiveFig(1)}
      onMouseLeave={() => setActiveFig(0)}
    >
      <img src={createImageUrl(productMedia.pictures[activeFig])} alt={alt} />
      {children}
    </figure>
  );
};

export default Figure;
