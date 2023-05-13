import createLineBreaks from "./createLineBreaks";

export default function generateMatches(str: string): {
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
