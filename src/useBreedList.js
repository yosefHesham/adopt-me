import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../fetchBreedList.js";
export default function useBreedList(animal) {
  const query = useQuery(["breeds", animal], fetchBreedList);

  return [query?.data?.breeds ?? [], query.status];
}
