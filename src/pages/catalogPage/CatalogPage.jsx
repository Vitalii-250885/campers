import CamperList from "../../components/camperList/CamperList.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Location from "../../components/location/Location.jsx";

const CatalogPage = () => {
  return (
    <>
      <Location />
      <Filters />
      <CamperList />
    </>
  );
};

export default CatalogPage;
