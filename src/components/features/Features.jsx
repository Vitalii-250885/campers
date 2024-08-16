import DetailsList from "../detailsList/DetailsList";

import css from "./Features.module.css";

const Features = ({ camper }) => {
  console.log("🚀 ~ Features ~ camper:", camper);
  const { details, adults, transmission, engine } = camper;

  return (
    <div className={css.container}>
      <div className={css.details}>
        <DetailsList
          details={details}
          adults={adults}
          transmission={transmission}
          engine={engine}
        />
      </div>
      <div className={css.form}>Form</div>
    </div>
  );
};

export default Features;
