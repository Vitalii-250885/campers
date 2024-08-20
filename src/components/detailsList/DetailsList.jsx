import css from "./DetailsList.module.css";

const DetailsList = ({
  details,
  adults,
  transmission,
  engine,
  detainsFeatures,
}) => {
  const {
    airConditioner,
    kitchen,
    beds,
    CD,
    radio,
    hob,
    toilet,
    shower,
    freezer,
    gas,
    water,
    microwave,
    TV,
  } = details;

  return (
    <ul className={css["details-list"]}>
      <li className={css["details-item"]}>
        <img src="icons/adult.svg" alt="" className={css.icon} />
        <span>{adults} adults</span>
      </li>
      <li className={css["details-item"]}>
        <img src="icons/automatic_small.svg" alt="" className={css.icon} />
        <span>
          {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
        </span>
      </li>
      <li className={css["details-item"]}>
        <img src="icons/engine.svg" alt="" className={css.icon} />
        <span>{engine.charAt(0).toUpperCase() + engine.slice(1)}</span>
      </li>
      {kitchen > 0 && (
        <li className={css["details-item"]}>
          <img src="icons/kitchen_small.svg" alt="" className={css.icon} />
          <span>Kitchen</span>
        </li>
      )}
      <li className={css["details-item"]}>
        <img src="icons/beds.svg" alt="" className={css.icon} />
        <span>{beds} beds</span>
      </li>
      {airConditioner > 0 && (
        <li className={css["details-item"]}>
          <img src="icons/ac_small.svg" alt="" className={css.icon} />
          <span>AC</span>
        </li>
      )}
      {airConditioner > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/streamline_hotel-air-conditioner.svg"
            alt=""
            className={css.icon}
          />
          <span>{airConditioner} air сonditioner</span>
        </li>
      )}
      {CD > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/icon-park-outline_cd.svg"
            alt=""
            className={css.icon}
          />
          <span>CD</span>
        </li>
      )}
      {radio > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/solar_radio-linear.svg" alt="" className={css.icon} />
          <span>Radio</span>
        </li>
      )}
      {hob > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/hob.svg" alt="" className={css.icon} />
          <span>{hob} hob</span>
        </li>
      )}
      {toilet > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/mingcute_toilet-paper-line.svg"
            alt=""
            className={css.icon}
          />
          <span>Toilet</span>
        </li>
      )}
      {shower > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/shower_small.svg" alt="" className={css.icon} />
          <span>Shower</span>
        </li>
      )}
      {freezer > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/arcticons_freezer.svg" alt="" className={css.icon} />
          <span>Freezer</span>
        </li>
      )}
      {gas !== "" && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/mdi_gas.svg" alt="" className={css.icon} />
          <span>{gas} gas</span>
        </li>
      )}
      {water !== "" && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/ion_water-outline.svg" alt="" className={css.icon} />
          <span>{water} water</span>
        </li>
      )}
      {microwave > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/streamline_microwave.svg"
            alt=""
            className={css.icon}
          />
          <span>Microwave</span>
        </li>
      )}
      {TV > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/TV.svg" alt="" className={css.icon} />
          <span>TV</span>
        </li>
      )}
    </ul>
  );
};

export default DetailsList;
