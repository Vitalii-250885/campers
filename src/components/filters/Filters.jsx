import Button from "../button/Button";
import VehicleEquipment from "../vehicleEquipment/VehicleEquipment";
import VehicleType from "../vehicleType/VehicleType";

const Filters = () => {
  return (
    <>
      <h3>Filters</h3>
      <VehicleEquipment />
      <VehicleType />
      <Button />
    </>
  );
};

export default Filters;
