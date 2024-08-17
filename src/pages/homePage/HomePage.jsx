import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css["greetings-section"]}>
        <h2 className={css.greetings}>Welcome!</h2>
        <p className={css.text}>
          We are the company "Campers in Ukraine" for ten years in the market of
          camper rental services for your best vacation and travel. With us you
          will choose the camper that is most suitable for you.
        </p>
      </div>
      <div className={css["image-section"]}>
        <img
          src="https://ftp.goit.study/img/campers-test-task/2-1.webp"
          alt=""
          className={css.image1}
        />
        <img
          src="https://ftp.goit.study/img/campers-test-task/6-1.webp"
          alt=""
          className={css.image2}
        />
        <img
          src="https://ftp.goit.study/img/campers-test-task/13-1.webp"
          alt=""
          className={css.image3}
        />
      </div>
    </div>
  );
};

export default HomePage;
