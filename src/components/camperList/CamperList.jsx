import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCampers } from "../../redux/campers/selectors";

import CamperItem from "../camperItem/CamperItem";
import LoadMoreBtn from "../loadMoreBtn/loadMoreBtn";
import ModalWindow from "../modalWindow/ModalWindow";

import css from "./CamperList.module.css";
import {
  selectAcFilter,
  selectAlcoveFilter,
  selectAutomaticFilter,
  selectFullyFilter,
  selectKitchenFilter,
  selectLocationFilter,
  selectShowerFilter,
  selectTvFilter,
  selectVanFilter,
} from "../../redux/filrets/selectors";

const CamperList = () => {
  // const [quantity, setQuantity] = useState(4);
  const [visible, setVisible] = useState(true);
  const [camper, setCamper] = useState({ price: 0, reviews: [], gallery: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const campers = useSelector(selectCampers);
  // .slice(0, quantity);
  const filterLocation = useSelector(selectLocationFilter);
  const filterAc = useSelector(selectAcFilter);
  const filterAutomatic = useSelector(selectAutomaticFilter);
  const filterKitchen = useSelector(selectKitchenFilter);
  const filterTV = useSelector(selectTvFilter);
  const filterShower = useSelector(selectShowerFilter);
  const filterVan = useSelector(selectVanFilter);
  const filterFully = useSelector(selectFullyFilter);
  const filterAlcove = useSelector(selectAlcoveFilter);

  const filteredCampers = campers
    .filter((camper) => {
      if (filterLocation !== "") {
        return camper.location === filterLocation;
      }
      return camper;
    })
    .filter((camper) => {
      if (filterAc) {
        return camper.details.airConditioner !== 0;
      }
      return camper;
    })
    .filter((camper) => {
      if (filterAutomatic) {
        return camper.transmission === "automatic";
      }
      return camper;
    })
    .filter((camper) => {
      if (filterKitchen) {
        return camper.details.kitchen !== 0;
      }
      return camper;
    })
    .filter((camper) => {
      if (filterTV) {
        return camper.details.TV !== 0;
      }
      return camper;
    })
    .filter((camper) => {
      if (filterShower) {
        return camper.details.shower !== 0 || camper.details.toilet !== 0;
      }
      return camper;
    })
    .filter((camper) => {
      if (filterVan) {
        return camper.form === "panelTruck";
      }
      return camper;
    })
    .filter((camper) => {
      if (filterFully) {
        return camper.form === "fullyIntegrated";
      }
      return camper;
    })
    .filter((camper) => {
      if (filterAlcove) {
        return camper.form === "alcove";
      }
      return camper;
    });

  const openModal = (camper) => {
    setCamper(camper);
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleClickLoadMoreBtn = () => {
    // setQuantity(999);
    setVisible(false);
  };

  return (
    <div className={css.catalog}>
      <ul>
        {filteredCampers.map((camper) => (
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
