import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      {!pets.length ? (
        <h1> No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            id={pet.id}
            images={pet.images}
            location={`${pet.city},  ${pet.state}`}
          />
        ))
      )}
    </section>
  );
};

export default Results;
