import { useGetBreedsQuery } from "./petService";

const useBreedList = (animal) => {
  const { isLoading, data: breeds } = useGetBreedsQuery(animal, {
    skip: !animal,
  });
  if (!animal) {
    return [[], "loaded"];
  }

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
};

export default useBreedList;
