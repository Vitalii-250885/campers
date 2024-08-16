import Modal from "react-modal";
import css from "./ModalWindow.module.css";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import Features from "../features/Features";
import Reviews from "../reviews/Reviews";

Modal.setAppElement("#root");

const ModalWindow = ({ modalIsOpen, onCloseModal, camper }) => {
  const navigate = useNavigate();

  const [isShowFeatures, setIsShowFeatures] = useState(true);
  const [isShowReviews, setIsShowReviews] = useState(false);
  const [isActiveFeatures, setIsActiveFeatures] = useState(true);
  const [isActiveReviews, setIsActiveReviews] = useState(false);

  const name = camper.name;
  const price = camper.price;
  const rating = camper.rating;
  const location = camper.location;
  const description = camper.description;
  const gallery = camper.gallery;
  const reviews = camper.reviews;

  const handleShowFeatures = () => {
    setIsShowReviews(false);
    setIsShowFeatures(true);
    setIsActiveFeatures(true);
    setIsActiveReviews(false);
  };

  const handleShowReviews = () => {
    setIsShowFeatures(false);
    setIsShowReviews(true);
    setIsActiveReviews(true);
    setIsActiveFeatures(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onAfterClose={() => navigate("/catalog")}
      className={css["modal-window"]}
      bodyOpenClassName={css["modal-open"]}
      overlayClassName={css.overlay}>
      <div className={css["modal-container"]}>
        <img
          src="icons/close.svg"
          alt=""
          className={css["btn-close"]}
          onClick={onCloseModal}
        />

        <h4 className={css.name}>{name}</h4>
        <p className={css.rating}>
          <img src="icons/Rating.svg" className={css["rating-icon"]} alt="" />
          <span className={css.reviews}>
            {rating}({reviews.length} Reviews)
          </span>
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
        <p className={css.description}>{description}</p>
        <ul className={css["information-list"]}>
          <li className={css["information-item"]}>
            <span
              onClick={handleShowFeatures}
              className={clsx(css.link, isActiveFeatures && css.active)}>
              Features
            </span>
          </li>
          <li className={css["information-item"]}>
            <span
              onClick={handleShowReviews}
              className={clsx(css.link, isActiveReviews && css.active)}>
              Reviews
            </span>
          </li>
        </ul>
        <div className={css.container}>
          <div className={css.details}>
            {isShowFeatures && <Features camper={camper} />}
            {isShowReviews && <Reviews camper={camper} />}
          </div>
          <div className={css.form}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.call}>
              Stay connected! We are always ready to help you.
            </p>
            <input type="text" className={css.input} placeholder="Name" />
            <input type="email" className={css.input} placeholder="Email" />
            <input
              type="date"
              className={css.input}
              placeholder="Booking date"
            />
            <textarea
              name="comment"
              rows="5"
              className={css.textaria}
              placeholder="Comment"></textarea>
            <button type="button" className={css.button}>
              Send
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
