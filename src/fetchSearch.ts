import { QueryFunction } from "@tanstack/react-query";
import { Animal, PetAPIResponse } from "./ResponsesTypes";

const fetchSearch: QueryFunction<
  PetAPIResponse,
  ["search", { location: string; animal: Animal; breed: string }]
> = async ({ queryKey }) => {
  const { animal, breed, location } = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!apiRes.ok) {
    throw new Error("pets not fetched");
  }

  return apiRes.json();
};

export default fetchSearch;
