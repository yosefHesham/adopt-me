import { createContext } from "react";
import { Pet } from "./ResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adopetPet: Pet) => void]>(
  [
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
  ]
);

export default AdoptedPetContext;
