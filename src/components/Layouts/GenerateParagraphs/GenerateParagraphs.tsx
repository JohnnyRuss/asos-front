import React from "react";
import { Link } from "react-router-dom";

import { createFragmentsForMarkUp } from "./functions";

interface GenerateParagraphsType {
  text: string;
  id: string;
}

const GenerateParagraphs: React.FC<GenerateParagraphsType> = ({ text, id }) => {
  return (
    <>
      {createFragmentsForMarkUp(text).map((separation, i) => {
        const reg = /<b>(.*?)<b>/gim;
        const regBetweenMatch = /(?<=<b>)([\w\s&.]+)(?=<b>)/gi;

        const query = separation?.match(regBetweenMatch)?.[0];

        if (reg.test(separation))
          return (
            <Link
              key={`separation-${id}--${i}`}
              to="/women/products"
              state={{ query: query?.toLocaleLowerCase() }}
              style={{
                textDecoration: "underline",
                fontWeight: 700,
                fontSize: "inherit",
                textTransform: "capitalize",
              }}
            >
              {query}
              &nbsp;
            </Link>
          );
        else return <span key={`separation-${id}--${i}`}>{separation}</span>;
      })}
    </>
  );
};

export default GenerateParagraphs;
