import css from "./VehicleEquipment.module.css";

const VehicleEquipment = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css["parameters-list"]}>
        <li className={css["parameters-item"]}>
          <img src="icons/AC.svg" className={css.icon} alt="" />
          AC
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/Automatic.svg" className={css.icon} alt="" />
          Automatic
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/Kitchen.svg" className={css.icon} alt="" />
          Kitchen
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/TV.svg" className={css.icon} alt="" />
          TV
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/Shower.svg" className={css.icon} alt="" />
          Shower/WC
        </li>
      </ul>
    </div>
  );
};

export default VehicleEquipment;
