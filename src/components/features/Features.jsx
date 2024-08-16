import DetailsList from "../detailsList/DetailsList";
import VehicleDetails from "../vehicleDetails/vehicleDetails";

import css from "./Features.module.css";

const Features = ({ camper }) => {
  const { details, adults, transmission, engine } = camper;

  const detainsFeatures = true;

  return (
    <>
      <div className={css.details}>
        <DetailsList
          detainsFeatures={detainsFeatures}
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
        />
        <VehicleDetails camper={camper} />
      </div>
    </>
  );
};

export default Features;
