import React from "react";

import { createImageUrl } from "utils";

import { HeartButton } from "components/Layouts";

import { RelatedProductT } from "interface";
interface RelatedProductFigType {
  pictures: RelatedProductT["media"]["pictures"];
  brand: RelatedProductT["brand"];
}

const RelatedProductFig: React.FC<RelatedProductFigType> = ({
  brand,
  pictures,
}) => {
  return (
    <figure className="w-full h-full overflow-hidden relative">
      <img
        src={createImageUrl(pictures[0])}
        alt={brand?.name}
        className="w-full h-full object-cover object-top"
      />
      <HeartButton />
    </figure>
  );
};

export default RelatedProductFig;
