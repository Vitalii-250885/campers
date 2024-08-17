import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCampers } from "../../redux/campers/selectors";

import ModalWindow from "../modalWindow/ModalWindow";

import css from "./FavoriteList.module.css";
import FavoriteItem from "../favoriteItem/FavoriteItem";

const FavoriteList = () => {
  const [camper, setCamper] = useState({ price: 0, reviews: [], gallery: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const campers = useSelector(selectCampers);

  const openModal = (camper) => {
    setCamper(camper);
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <FavoriteItem
            key={camper._id}
            openModal={openModal}
            camper={camper}
          />
        ))}
      </ul>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        onCloseModal={onCloseModal}
        camper={camper}
      />
    </div>
  );
};

export default FavoriteList;
