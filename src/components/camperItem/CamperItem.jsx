import { useState } from "react";

import { changeFavorite } from "../../redux/favorite/slice";

import DetailsList from "../detailsList/DetailsList";

import css from "./CamperItem.module.css";
import { useDispatch } from "react-redux";

const CamperItem = ({ openModal, camper }) => {
  const dispatch = useDispatch();

  const [pressed, setPressed] = useState(
    JSON.parse(localStorage.getItem("pressed-like"))
  );

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

  const handleClickLike = (camper) => {
    setPressed(!pressed);
    dispatch(changeFavorite(camper));
  };

  return (
    <>
      <li className={css.item}>
        <img src={gallery[0]} alt="" className={css.image} />
        <div>
          <div className={css["name-prise"]}>
            <h4 className={css.name}>{name}</h4>
            <p className={css.price}>
              &#8364; {price.toFixed(2)}
              <img
                src={pressed ? "icons/like_pressed.svg" : "icons/like.svg"}
                alt=""
                onClick={() => handleClickLike(camper)}
                className={css.like}
              />
            </p>
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

export default CamperItem;
