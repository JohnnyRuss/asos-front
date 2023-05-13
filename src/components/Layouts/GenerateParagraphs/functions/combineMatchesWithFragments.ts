export default function combineMatchesWithFragments(
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
