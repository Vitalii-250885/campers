import campers from "../../campers.json";

import DetailsList from "../detailsList/DetailsList";

import css from "./CamperItem.module.css";

const CamperItem = () => {
  return (
    <>
      {campers.map(
        ({
          _id,
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
        }) => (
          <li key={_id} className={css.item}>
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
                <img
                  src="icons/Rating.svg"
                  className={css["rating-icon"]}
                  alt=""
                />
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
                details={details}
                adults={adults}
                transmission={transmission}
                engine={engine}
              />
              <button type="button" className={css.button}>
                Show more
              </button>
            </div>
          </li>
        )
      )}
    </>
  );
};

export default CamperItem;
