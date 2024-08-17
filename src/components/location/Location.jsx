import { useSelector } from "react-redux";
import css from "./Location.module.css";
import { selectCampers } from "../../redux/campers/selectors";

const Location = ({ setLocation }) => {
  const campers = useSelector(selectCampers);

  const cities = [];

  campers.forEach((camper) => {
    if (!cities.includes(camper.location)) {
      cities.push(camper.location);
    }
  });

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Location</h3>

      <div className={css["select-wrap"]}>
        <select name="city" onChange={handleChange} className={css.select}>
          <option value="">All cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <img src="icons/map-pin.svg" className={css.icon} alt="" />
      </div>
    </div>
  );
};

export default Location;
