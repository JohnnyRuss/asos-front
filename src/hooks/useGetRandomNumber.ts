export default function useGetRandomNumber({
  max,
  min = 0,
}: {
  max: number;
  min?: number;
}): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
