import css from "./Reviews.module.css";

const Reviews = ({ camper }) => {
  const reviews = camper.reviews;

  return (
    <ul>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li key={reviewer_name} className={css["review-item"]}>
          <div className={css.header}>
            <div className={css.avatar}>{reviewer_name.slice(0, 1)}</div>
            <div>
              <h4>{reviewer_name}</h4>
              <div className={css.rating}>
                <img
                  src={
                    reviewer_rating >= 1
                      ? "icons/star_y.svg"
                      : "icons/star_g.svg"
                  }
                  alt=""
                />
                <img
                  src={
                    reviewer_rating >= 2
                      ? "icons/star_y.svg"
                      : "icons/star_g.svg"
                  }
                  alt=""
                />
                <img
                  src={
                    reviewer_rating >= 3
                      ? "icons/star_y.svg"
                      : "icons/star_g.svg"
                  }
                  alt=""
                />
                <img
                  src={
                    reviewer_rating >= 4
                      ? "icons/star_y.svg"
                      : "icons/star_g.svg"
                  }
                  alt=""
                />
                <img
                  src={
                    reviewer_rating >= 5
                      ? "icons/star_y.svg"
                      : "icons/star_g.svg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
