import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCampers } from "../../redux/campers/selectors";

import CamperItem from "../camperItem/CamperItem";
import LoadMoreBtn from "../loadMoreBtn/loadMoreBtn";
import ModalWindow from "../modalWindow/ModalWindow";

import css from "./CamperList.module.css";

const CamperList = () => {
  const [quantity, setQuantity] = useState(4);
  const [visible, setVisible] = useState(true);
  const [camper, setCamper] = useState({ price: 0, reviews: [], gallery: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const campers = useSelector(selectCampers).slice(0, quantity);

  const openModal = (camper) => {
    setCamper(camper);
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleClickLoadMoreBtn = () => {
    setQuantity(999);
    setVisible(false);
  };

  return (
    <div className={css.catalog}>
      <ul>
        {campers.map((camper) => (
          <CamperItem key={camper._id} openModal={openModal} camper={camper} />
        ))}
      </ul>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        onCloseModal={onCloseModal}
        camper={camper}
      />
      {visible && <LoadMoreBtn onClick={handleClickLoadMoreBtn} />}
    </div>
  );
};

export default CamperList;
