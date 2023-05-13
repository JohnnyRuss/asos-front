export default function createLineBreaks(str: string) {
  return str.replace(/<br>/gm, "\n");
}
