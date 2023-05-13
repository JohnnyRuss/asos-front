import generateMatches from "./generateMatches";
import combineMatchesWithFragments from "./combineMatchesWithFragments";

export default function createFragmentsForMarkUp(str: string): string[] {
  const { separatedStr, extractedMatches } = generateMatches(str);

  const fragments = combineMatchesWithFragments(extractedMatches, separatedStr);

  return fragments;
}
