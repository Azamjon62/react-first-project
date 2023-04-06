import React from "react";
import "./index.scss";

const Cards = (props) => {
  const {item: { img, title, year, category, description }} = props;

  return (
    <div>
      <div className="card__wrapper">
        <img className="card__wrapper-img" src={img} alt="img2" />
        <div className="card__wrapper__flex">
          <h1 className="card__wrapper__flex--title">{title}</h1>
          <div className="card__wrapper__flex__flex">
            <span>{year}</span> <p>{category}</p>
          </div>
          <p className="card__wrapper__flex__description">{description}</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Cards;
