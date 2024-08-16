import DetailsList from "../detailsList/DetailsList";

import css from "./CamperItem.module.css";

const CamperItem = ({ openModal, camper }) => {
const {name, price,rating, location, description, gallery, reviews, details }

  const name = camper.name;
  const price = camper.price;
  const rating = camper.rating;
  const location = camper.location;
  const description = camper.description;
  const gallery = camper.gallery;
  const reviews = camper.reviews;
  const details = camper.details;
  const adults = camper.adults;
  const transmission = camper.transmission;
  const engine = camper.engine;

  const detainsBoolean = false;

  return (
    <>
      <li className={css.item}>
        <img src={gallery[0]} alt="" className={css.image} />
        <div>
          <div className={css["name-prise"]}>
            <h4 className={css.name}>{name}</h4>
            <p className={css.price}>
              &#8364; {price.toFixed(2)}
              <img src="icons/like.svg" alt="" className={css.like} />
            </p>
          </div>
          <p className={css.rating}>
            <img src="icons/Rating.svg" className={css["rating-icon"]} alt="" />
            {rating}({reviews.length} Reviews)
            <img
              src="icons/map-pin.svg"
              className={css["location-icon"]}
              alt=""
            />
            {location}
          </p>
          <p className={css.description}>{description}</p>
          <DetailsList
            detainsBoolean={detainsBoolean}
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

export default CamperItem;
