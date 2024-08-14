import CamperList from "../../components/camperList/CamperList.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Location from "../../components/location/Location.jsx";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <div className={css["aside-section"]}>
        <Location />
        <Filters />
      </div>
      <div className={css["main-section"]}>
        <CamperList />
      </div>
    </div>
  );
};

export default CatalogPage;
