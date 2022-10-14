import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, toggleIsLiked } from "./../../store/cardSlice";

const Card = ({ info }) => {
  const {
    id,
    name,
    isLiked,
    image_link,
    geo_range,
    animal_type,
    diet,
    lifespan,
  } = info;
  const dispatch = useDispatch();
  const buttonState = useSelector((state) => state.cards.isButtonClicked);

  return (
    <div className="card-container">
      <div className="card-image-and-name">
        <div className="card-image-container">
          <img className="card-image" src={image_link} alt="animal" />
        </div>
        <h3 className="card-name">{name}</h3>
      </div>
      <div className="card-description">
        <div className="card-geo-and-diet">
          <span className="card-geo">
            <b>Distribution area</b>: {geo_range}
          </span>
          <span className="card-diet">
            <b>Diet</b>: {diet}
          </span>
        </div>
        <div className="card-type-and-lifespan">
          <span className="card-type">
            <b>Type</b>: {animal_type}
          </span>
          <span className="card-lifespan">
            <b>Lifespan</b>: {lifespan} years
          </span>
        </div>
      </div>
      <div className="card-like-and-delete">
        <div
          className="like-icon"
          onClick={() => dispatch(toggleIsLiked({ id }))}
        >
          {isLiked ? <span>💖</span> : <span>🤍</span>}
        </div>
        {!buttonState && (
          <div
            className="delete-button"
            onClick={() => dispatch(removeCard({ id }))}
          >
            <img
              className="delete-button-icon"
              src="./img/delete-button.png"
              alt="delete button"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
