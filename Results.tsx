import Pet from "./src/Pet";
import { Pet as PetType } from "./src/ResponsesTypes"
const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length && <h1> No Pets Found !</h1>}

      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          description={pet.description}
          images={pet.images}
          id={pet.id}
          location={`${pet.city} ${pet.state}`}
        />
      ))}
    </div>
  );
};

export default Results;
