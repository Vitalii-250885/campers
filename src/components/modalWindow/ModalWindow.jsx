import Modal from "react-modal";
import css from "./ModalWindow.module.css";

Modal.setAppElement("#root");

const ModalWindow = ({ modalIsOpen, onCloseModal, camper }) => {
  const name = camper.name;
  const price = camper.price;
  const rating = camper.rating;
  const location = camper.location;
  const description = camper.description;
  const gallery = camper.gallery;
  const reviews = camper.reviews;
  // const details = camper.details;
  // const adults = camper.adults;
  // const transmission = camper.transmission;
  // const engine = camper.engine;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modalWindow}
      style={{
        overlay: {
          backgroundColor: "rgba(17, 18, 19, 0.1)",
        },
      }}>
      <div className={css.modalContainer}>
        <button type="button" onClick={onCloseModal} className={css.btnClose}>
          x
        </button>
        <div className={css["modal-window"]}>
          <h4 className={css.name}>{name}</h4>
          <p className={css.rating}>
            <img src="icons/Rating.svg" className={css["rating-icon"]} alt="" />
            {rating}({reviews.length} Reviews)
            <img
              src="icons/map-pin.svg"
              className={css["location-icon"]}
              alt=""
            />
            {location}
          </p>
          <p className={css.price}>&#8364; {price.toFixed(2)}</p>
          <ul className={css["photo-list"]}>
            {gallery.map((photo) => (
              <li key={photo}>
                <img src={photo} alt="" className={css.photo} />
              </li>
            ))}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
