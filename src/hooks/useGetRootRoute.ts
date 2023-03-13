import { useParams } from "react-router-dom";

export default function useGetRootRoute(): string {
  const { rootRoute } = useParams();
  return rootRoute || "";
}