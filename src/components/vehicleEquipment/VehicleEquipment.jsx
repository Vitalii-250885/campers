import clsx from "clsx";

import css from "./VehicleEquipment.module.css";
import { useState } from "react";

const VehicleEquipment = () => {
  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [shower, setShower] = useState(false);

  const handleClickAc = () => {
    if (ac) {
      setAc(false);
      return;
    }
    setAc(true);
  };

  const handleClickAutomatic = () => {
    if (automatic) {
      setAutomatic(false);
      return;
    }
    setAutomatic(true);
  };

  const handleClickKitchen = () => {
    if (kitchen) {
      setKitchen(false);
      return;
    }
    setKitchen(true);
  };

  const handleClickTv = () => {
    if (tv) {
      setTv(false);
      return;
    }
    setTv(true);
  };

  const handleClickShower = () => {
    if (shower) {
      setShower(false);
      return;
    }
    setShower(true);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css["parameters-list"]}>
        <li
          className={clsx(css["parameters-item"], ac && css.active)}
          onClick={handleClickAc}>
          <img src="icons/AC.svg" className={css.icon} alt="" />
          AC
        </li>
        <li
          className={clsx(css["parameters-item"], automatic && css.active)}
          onClick={handleClickAutomatic}>
          <img src="icons/Automatic.svg" className={css.icon} alt="" />
          Automatic
        </li>
        <li
          className={clsx(css["parameters-item"], kitchen && css.active)}
          onClick={handleClickKitchen}>
          <img src="icons/Kitchen.svg" className={css.icon} alt="" />
          Kitchen
        </li>
        <li
          className={clsx(css["parameters-item"], tv && css.active)}
          onClick={handleClickTv}>
          <img src="icons/TV.svg" className={css.icon} alt="" />
          TV
        </li>
        <li
          className={clsx(css["parameters-item"], shower && css.active)}
          onClick={handleClickShower}>
          <img src="icons/Shower.svg" className={css.icon} alt="" />
          Shower/WC
        </li>
      </ul>
    </div>
  );
};

export default VehicleEquipment;
