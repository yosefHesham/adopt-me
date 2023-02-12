import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreedList.js";
import fetchSearch from "./fetchSearch.js";
import AdoptedPetContext from "./AdoptedPetContext.js";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  // eslint-disable-next-line no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);
  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="mb-10 flex flex-col items-center rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name}></img>
          </div>
        )}

        <label htmlFor="location">
          {" "}
          Location
          <input
            name="location"
            id="location"
            className="search-input"
            placeholder="Location"
            type="text"
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            className="search-input"
            value={animal}
            placeholder="Animal"
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            className="search-input grayed-out-disabled"
            disabled={breeds.length === 0}
            id="breed"
            placeholder="breed "
            name="breed"
          >
            {breeds.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <button className="color rounded bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          {" "}
          Submit{" "}
        </button>
      </form>
      {<p>Here is some changes</p>}
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
