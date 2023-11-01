import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundry";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <div className="loader">🐚</div>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}> Adopt {pet.name} </button>
      </div>
      <p>{pet.description}</p>
      {showModal && (
        <Modal>
          <div>
            <h1>Would you like do adopt {pet.name} ?</h1>
            <div className="buttons">
              <button onClick={() => setShowModal(false)}>yes</button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props}></Details>
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
