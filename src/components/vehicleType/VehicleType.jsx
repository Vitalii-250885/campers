import css from "./VehicleType.module.css";

const VehicleType = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css["parameters-list"]}>
        <li className={css["parameters-item"]}>
          <img src="icons/Van.svg" className={css.icon} alt="" />
          Van
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/fully-integrated.svg" className={css.icon} alt="" />
          <p>Fully</p>
          <p>Integrated</p>
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/Alcove.svg" className={css.icon} alt="" />
          Alcove
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
