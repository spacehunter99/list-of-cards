import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { removeCard, toggleIsLiked } from "./../../store/cardSlice";

const Card = ({ info }) => {
  const { id, name, isLiked } = info;
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <span>{name}</span>
      {/* <img src={info.image_link} alt="" /> */}
      <div className="heart" onClick={() => dispatch(toggleIsLiked({ id }))}>
        {isLiked ? <span>💖</span> : <span>🤍</span>}
      </div>
      <button onClick={() => dispatch(removeCard({ id }))}>&times;</button>
    </div>
  );
};

export default Card;
