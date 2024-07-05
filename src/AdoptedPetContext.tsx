import { createContext } from "react";
import { PetResponse } from "./ResponsesTypes";

const AdoptedPetContext = createContext<
  [PetResponse | null, (adopetPet: PetResponse) => void]
>([
  {
    id: 13357,
    name: "fido",
    animal: "dog",
    description: "lorem",
    breed: "beeagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
