import CamperItem from "../camperItem/CamperItem";
import LoadMoreBtn from "../loadMoreBtn/loadMoreBtn";

import css from "./CamperList.module.css";

const CamperList = () => {
  return (
    <div className={css.catalog}>
      <ul>
        <CamperItem />
      </ul>
      <LoadMoreBtn />
    </div>
  );
};

export default CamperList;
