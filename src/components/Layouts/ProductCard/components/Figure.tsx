import { ProductT } from "interface";
import React from "react";
import { createImageUrl } from "utils";

interface FigureType {
  alt: string;
  productMedia: ProductT["media"];
  children: React.ReactNode;
}

const Figure: React.FC<FigureType> = ({ productMedia, alt, children }) => {
  return (
    <figure className="h-4/5 relative overflow-hidden group/card-fig">
      <img
        className="absolute transition-all duration-200 ease-linear group-hover/card-fig:opacity-0 group-hover/card-fig:scale-110"
        src={createImageUrl(productMedia.pictures[0])}
        alt={alt}
      />
      <img
        className="absolute opacity-0 scale-90 transition-all duration-200 ease-linear group-hover/card-fig:scale-100 group-hover/card-fig:opacity-100"
        src={createImageUrl(productMedia.pictures[1])}
        alt={alt}
      />
      {children}
    </figure>
  );
};

export default Figure;
