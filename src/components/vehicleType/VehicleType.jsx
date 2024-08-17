import css from "./VehicleType.module.css";
import clsx from "clsx";

const VehicleType = ({ van, setVan, fully, setFully, alcove, setAlcove }) => {
  const handleClickVan = () => {
    if (van) {
      setVan(false);
      return;
    }
    setVan(true);
  };

  const handleClickFully = () => {
    if (fully) {
      setFully(false);
      return;
    }
    setFully(true);
  };

  const handleClickAlcove = () => {
    if (alcove) {
      setAlcove(false);
      return;
    }
    setAlcove(true);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css["parameters-list"]}>
        <li
          className={clsx(css["parameters-item"], van && css.active)}
          onClick={handleClickVan}>
          <img src="icons/Van.svg" className={css.icon} alt="" />
          Van
        </li>
        <li
          className={clsx(css["parameters-item"], fully && css.active)}
          onClick={handleClickFully}>
          <img src="icons/fully-integrated.svg" className={css.icon} alt="" />
          <p>Fully</p>
          <p>Integrated</p>
        </li>
        <li
          className={clsx(css["parameters-item"], alcove && css.active)}
          onClick={handleClickAlcove}>
          <img src="icons/Alcove.svg" className={css.icon} alt="" />
          Alcove
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
