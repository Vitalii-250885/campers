import css from "./Location.module.css";

const Location = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Location</h3>

      <div className={css["select-wrap"]}>
        <select name="city" className={css.select}>
          <option value="kharkiv">Kharkiv, Ukraine</option>
          <option value="kyiv" selected>
            Kyiv, Ukraine
          </option>
        </select>
        <img
          src="../../../public/icons/map-pin.svg"
          className={css.icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Location;
