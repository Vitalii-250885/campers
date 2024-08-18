import { useState } from "react";
import { useSelector } from "react-redux";

import ModalWindow from "../modalWindow/ModalWindow";

import css from "./FavoriteList.module.css";
import FavoriteItem from "../favoriteItem/FavoriteItem";
import { selectFavoriteCampers } from "../../redux/favorite/selectors";

const FavoriteList = () => {
  const [camper, setCamper] = useState({ price: 0, reviews: [], gallery: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const favoriteCampers = useSelector(selectFavoriteCampers);

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
        {favoriteCampers.map((camper) => (
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
