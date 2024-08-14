import VehicleEquipment from "../vehicleEquipment/VehicleEquipment";
import VehicleType from "../vehicleType/VehicleType";

import css from "./Filters.module.css";

const Filters = () => {
  return (
    <div>
      <h3 className={css.title}>Filters</h3>
      <VehicleEquipment />
      <VehicleType />
      <button type="button" className={css.button}>
        Search
      </button>
    </div>
  );
};

export default Filters;
