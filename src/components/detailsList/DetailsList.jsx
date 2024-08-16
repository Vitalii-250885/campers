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
        {adults} adults
      </li>
      <li className={css["details-item"]}>
        <img src="icons/automatic_small.svg" alt="" className={css.icon} />
        {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
      </li>
      <li className={css["details-item"]}>
        <img src="icons/engine.svg" alt="" className={css.icon} />
        {engine.charAt(0).toUpperCase() + engine.slice(1)}
      </li>
      {kitchen > 0 && (
        <li className={css["details-item"]}>
          <img src="icons/kitchen_small.svg" alt="" className={css.icon} />
          Kitchen
        </li>
      )}
      <li className={css["details-item"]}>
        <img src="icons/beds.svg" alt="" className={css.icon} />
        {beds} beds
      </li>
      {airConditioner > 0 && (
        <li className={css["details-item"]}>
          <img src="icons/ac_small.svg" alt="" className={css.icon} />
          AC
        </li>
      )}
      {airConditioner > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/streamline_hotel-air-conditioner.svg"
            alt=""
            className={css.icon}
          />
          {airConditioner} air сonditioner
        </li>
      )}
      {CD > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/icon-park-outline_cd.svg"
            alt=""
            className={css.icon}
          />
          CD
        </li>
      )}
      {radio > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/solar_radio-linear.svg" alt="" className={css.icon} />
          Radio
        </li>
      )}
      {hob > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/hob.svg" alt="" className={css.icon} />
          {hob} hob
        </li>
      )}
      {toilet > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/mingcute_toilet-paper-line.svg"
            alt=""
            className={css.icon}
          />
          Toilet
        </li>
      )}
      {shower > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/shower_small.svg" alt="" className={css.icon} />
          Shower
        </li>
      )}
      {freezer > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/arcticons_freezer.svg" alt="" className={css.icon} />
          Freezer
        </li>
      )}
      {gas !== "" && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/mdi_gas.svg" alt="" className={css.icon} />
          {gas} gas
        </li>
      )}
      {water !== "" && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/ion_water-outline.svg" alt="" className={css.icon} />
          {water} water
        </li>
      )}
      {microwave > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img
            src="icons/streamline_microwave.svg"
            alt=""
            className={css.icon}
          />
          Microwave
        </li>
      )}
      {TV > 0 && detainsFeatures && (
        <li className={css["details-item"]}>
          <img src="icons/TV.svg" alt="" className={css.icon} />
          TV
        </li>
      )}
    </ul>
  );
};

export default DetailsList;
