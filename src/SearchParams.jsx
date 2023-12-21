import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchQuery } from "./petService";
import Results from "../Results";
import { all } from "./searchParamsSlice";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const adoptedPet = useSelector((state) => state.adoptedPet.value);
  const requestParams = useSelector((state) => state.searchParams.value);
  const dispatch = useDispatch();

  let { data: pets } = useSearchQuery(requestParams);

  pets = pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            location: formData.get("location"),
            animal: formData.get("animal"),
            breed: formData.get("breed"),
          };
          dispatch(all(obj));
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
            setAnimal(e.target.value);
          }}
        >
          {ANIMALS.map((animal) => (
            <option key={animal}> {animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select name="breed" disabled={!breeds.length}>
          {breeds.map((animal) => (
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
