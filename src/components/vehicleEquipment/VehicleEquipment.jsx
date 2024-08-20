import clsx from "clsx";

import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({
  setAc,
  setAutomatic,
  setKitchen,
  setTv,
  setShower,
  tv,
  ac,
  automatic,
  kitchen,
  shower,
}) => {
  const handleClickAc = () => {
    setAc(!ac);
  };

  const handleClickAutomatic = () => {
    setAutomatic(!automatic);
  };

  const handleClickKitchen = () => {
    setKitchen(!kitchen);
  };

  const handleClickTv = () => {
    setTv(!tv);
  };

  const handleClickShower = () => {
    setShower(!shower);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css["parameters-list"]}>
        <li
          className={clsx(css["parameters-item"], ac && css.active)}
          onClick={handleClickAc}>
          <img src="icons/AC.svg" className={css.icon} alt="" />
          <span>AC</span>
        </li>
        <li
          className={clsx(css["parameters-item"], automatic && css.active)}
          onClick={handleClickAutomatic}>
          <img src="icons/Automatic.svg" className={css.icon} alt="" />
          <span>Automatic</span>
        </li>
        <li
          className={clsx(css["parameters-item"], kitchen && css.active)}
          onClick={handleClickKitchen}>
          <img src="icons/Kitchen.svg" className={css.icon} alt="" />
          <span>Kitchen</span>
        </li>
        <li
          className={clsx(css["parameters-item"], tv && css.active)}
          onClick={handleClickTv}>
          <img src="icons/TV.svg" className={css.icon} alt="" />
          <span>TV</span>
        </li>
        <li
          className={clsx(css["parameters-item"], shower && css.active)}
          onClick={handleClickShower}>
          <img src="icons/Shower.svg" className={css.icon} alt="" />
          <span>Shower/WC</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleEquipment;
