import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, toggleIsLiked } from "./../../store/cardSlice";

const Card = ({ info }) => {
  const { id, name, isLiked } = info;
  const dispatch = useDispatch();
  const buttonState = useSelector((state) => state.cards.isButtonClicked);

  return (
    <div className="card-container">
      <span>{name}</span>
      {/* <img src={info.image_link} alt="" /> */}
      <div className="heart" onClick={() => dispatch(toggleIsLiked({ id }))}>
        {isLiked ? <span>💖</span> : <span>🤍</span>}
      </div>
      {!buttonState && (
        <button onClick={() => dispatch(removeCard({ id }))}>&times;</button>
      )}
    </div>
  );
};

export default Card;
