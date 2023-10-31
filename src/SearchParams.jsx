import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location"> Location</label>
        <input
          name="location"
          value={location}
          placeholder="Location"
          onChange={(v) => setLocation(v)}
        />
        <label htmlFor="animal">Animal</label>
        <select
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          {ANIMALS.map((animal) => (
            <option key={animal}> {animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
          disabled={!breeds.length}
        >
          {breeds.map((animal) => (
            <option key={animal}> {animal}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
