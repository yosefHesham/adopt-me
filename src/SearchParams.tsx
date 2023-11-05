import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useContext } from "react";
import Results from "../Results";
import AdoptedPetContext from "./AdoptedPetContext";
import fetchSearch from "./fetchSearch";
import { Animal } from "./ResponsesTypes";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "" as Animal,
    breed: "",
    location: "",
  });
  const [animal, setAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results.data?.pets ?? [];

  const [adoptedPet] = useContext(AdoptedPetContext);
  console.log(adoptedPet);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            location: formData.get("location")?.toString() ?? "",
            animal: (formData.get("animal")?.toString() as Animal) ?? "",
            breed: formData.get("breed")?.toString() ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name}></img>
          </div>
        )}
        <label htmlFor="location"> Location</label>
        <input name="location" placeholder="Location" />
        <label htmlFor="animal">Animal</label>
        <select
          value={animal}
          name="animal"
          onChange={(e) => {
            setAnimal(e.target.value as Animal);
          }}
        >
          {ANIMALS.map((animal) => (
            <option key={animal}> {animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select name="breed" disabled={!breeds.length}>
          {(breeds as string[])?.map((animal: string) => (
            <option key={animal}> {animal}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
