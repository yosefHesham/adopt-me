import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundry";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { adopt } from "./adoptedPetSlice";
import { useGetPetQuery } from "./petService";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars

  const navigate = useNavigate();

  const { isLoading, data: pet } = useGetPetQuery(id);

  if (isLoading) {
    return (
      <div className="loading-pane">
        <div className="loader">🐚</div>
      </div>
    );
  }

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
              <button
                onClick={() => {
                  dispatch(adopt(pet));
                  navigate("/");
                }}
              >
                yes
              </button>
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
