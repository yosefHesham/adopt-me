import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext.js";
import { useState } from "react";
import Modal from "./Modal.jsx";
import fetchPet from "./fetchPet.js";
import Carousel from "./Carousel.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { useContext } from "react";
const Details = () => {
  const { id } = useParams();
  // takes caching key
  const results = useQuery(["details", id], fetchPet);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

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
      <Carousel images={pet.images}></Carousel>
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal && (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons ">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  yes
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  no
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details></Details>
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
