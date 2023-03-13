import React from "react";
import { Link } from "react-router-dom";

interface GenerateParagraphsType {
  text: string;
  id: string;
}

const GenerateParagraphs: React.FC<GenerateParagraphsType> = ({ text, id }) => {
  return (
    <>
      {createFragmentsForMarkUp(text).map((separation, i) => {
        const reg = /<b>(.*?)<b>/gim;
        const regBetweenMatch = /(?<=<b>)([\w\s&]+)(?=<b>)/gi;

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

function createFragmentsForMarkUp(str: string): string[] {
  const { separatedStr, extractedMatches } = generateMatches(str);

  const fragments = combineMatchesWithFragments(extractedMatches, separatedStr);

  return fragments;
}

function createLineBreaks(str: string) {
  return str.replace(/<br>/gm, "\n");
}

function generateMatches(str: string): {
  separatedStr: string[];
  extractedMatches: string[];
} {
  const reg = /<b>(.*?)<b>/gim;

  let strToMark = str;
  strToMark = createLineBreaks(strToMark);

  const matches = strToMark.matchAll(reg);

  const extractedMatches: string[] = [];
  for (const match of matches) {
    extractedMatches.push(match[0]);
    strToMark = strToMark.replace(match[0], "$split$");
  }

  const separatedStr = strToMark.split("$split$");

  return { extractedMatches, separatedStr };
}

function combineMatchesWithFragments(
  matches: string[],
  fragments: string[]
): string[] {
  return fragments
    .map((separation, i, arr) => {
      if (!arr[0] || arr[0]?.trim() === "") {
        if (i === 0) return [matches[i], separation];
        else return [separation, matches[i]];
      } else {
        if (i > 0) return [matches[i - 1], separation];
        else return [separation, matches[i - 1]];
      }
    })
    .flatMap((separation) => separation)
    .filter(
      (separation) => separation?.trim() !== "" && separation !== undefined
    );
}
