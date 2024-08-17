import { useDispatch } from "react-redux";
import VehicleEquipment from "../vehicleEquipment/VehicleEquipment";
import VehicleType from "../vehicleType/VehicleType";

import css from "./Filters.module.css";
import { changeFilter } from "../../redux/filrets/slice";
import { useState } from "react";
import Location from "../location/Location";

const Filters = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [shower, setShower] = useState(false);
  const [van, setVan] = useState(false);
  const [fully, setFully] = useState(false);
  const [alcove, setAlcove] = useState(false);

  const onClick = () => {
    dispatch(
      changeFilter({
        location,
        tv,
        ac,
        automatic,
        kitchen,
        shower,
        van,
        fully,
        alcove,
      })
    );
  };

  return (
    <div>
      <Location setLocation={setLocation} />

      <h3 className={css.title}>Filters</h3>
      <VehicleEquipment
        ac={ac}
        setAc={setAc}
        automatic={automatic}
        setAutomatic={setAutomatic}
        kitchen={kitchen}
        setKitchen={setKitchen}
        tv={tv}
        setTv={setTv}
        shower={shower}
        setShower={setShower}
      />
      <VehicleType
        van={van}
        setVan={setVan}
        fully={fully}
        setFully={setFully}
        alcove={alcove}
        setAlcove={setAlcove}
      />
      <button type="button" onClick={onClick} className={css.button}>
        Search
      </button>
    </div>
  );
};

export default Filters;
