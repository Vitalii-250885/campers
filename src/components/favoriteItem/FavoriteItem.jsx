import DetailsList from "../detailsList/DetailsList";
import css from "./FavoriteItem.module.css";

const FavoriteItem = ({ openModal, camper }) => {
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    details,
    adults,
    transmission,
    engine,
  } = camper;

  const detainsFeatures = false;

  return (
    <>
      <li className={css.item}>
        <img src={gallery[0]} alt="" className={css.image} />
        <div className={css.info}>
          <div className={css["name-icon"]}>
            <h4 className={css.name}>{name}</h4>
            <img src="icons/like.svg" alt="" className={css.like} />
          </div>
          <p className={css.rating}>
            <img src="icons/Rating.svg" className={css["rating-icon"]} alt="" />
            <span className={css.reviews}>
              {rating}({reviews.length} Reviews)
            </span>
            <img
              src="icons/map-pin.svg"
              className={css["location-icon"]}
              alt=""
            />
            {location}
          </p>
          <p className={css.price}>&#8364; {price.toFixed(2)}</p>

          <p className={css.description}>{description}</p>
          <DetailsList
            detainsFeatures={detainsFeatures}
            details={details}
            adults={adults}
            transmission={transmission}
            engine={engine}
          />
          <button
            type="button"
            onClick={() => openModal(camper)}
            className={css.button}>
            Show more
          </button>
        </div>
      </li>
    </>
  );
};

export default FavoriteItem;
