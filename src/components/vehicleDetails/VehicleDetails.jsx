import css from "./vehicleDetails.module.css";

const VehicleDetails = ({ camper }) => {
  const { form, length, width, height, tank, consumption } = camper;

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css["parameters-list"]}>
        <li className={css["parameters-item"]}>
          <span>Form</span>{" "}
          <span>{form.charAt(0).toUpperCase() + form.slice(1)}</span>
        </li>
        <li className={css["parameters-item"]}>
          <span>Length</span> <span>{length}</span>
        </li>
        <li className={css["parameters-item"]}>
          <span>Width</span> <span>{width}</span>
        </li>
        <li className={css["parameters-item"]}>
          <span>Height</span> <span>{height}</span>
        </li>
        <li className={css["parameters-item"]}>
          <span>Tank</span> <span>{tank}</span>
        </li>
        <li className={css["parameters-item"]}>
          <span>Consumption</span> <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
