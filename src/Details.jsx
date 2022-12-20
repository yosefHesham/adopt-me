import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet.js";
const Details = () => {
  const { id } = useParams();
  // takes caching key
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <article className="loading-pane">
        <h2 className="loader"> loading 🐚</h2>
      </article>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
