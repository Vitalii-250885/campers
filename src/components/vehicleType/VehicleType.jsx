import css from "./VehicleType.module.css";

const VehicleType = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>VehicleType</h3>
      <ul className={css["parameters-list"]}>
        <li className={css["parameters-item"]}>
          <img src="icons/Van.svg" alt="" />
          Van
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/fully-integrated.svg" alt="" />
          <p>Fully</p>
          <p>Integrated</p>
        </li>
        <li className={css["parameters-item"]}>
          <img src="icons/Alcove.svg" alt="" />
          Alcove
        </li>
      </ul>
    </div>
  );
};

export default VehicleType;
