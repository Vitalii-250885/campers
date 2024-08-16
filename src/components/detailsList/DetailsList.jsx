import css from "./DetailsList.module.css";

const DetailsList = ({
  details,
  adults,
  transmission,
  engine,
  detainsFeatures,
}) => {
  const { airConditioner, kitchen, beds, CD, radio, hob } = details;

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
    </ul>
  );
};

export default DetailsList;
