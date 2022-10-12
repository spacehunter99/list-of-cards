import React from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { showFilteredCards } from "./../../store/cardSlice";

const CardList = () => {
  const animals = useSelector((state) => state.cards.cards);

  const dispatch = useDispatch();

  const cards = animals.map((animal) => {
    return <Card key={animal.id} info={animal} />;
  });

  return (
    <div className="card-list-container">
      <div>
        <button onClick={() => dispatch(showFilteredCards())}>
          Показать отмеченные
        </button>
      </div>
      <div>{cards}</div>
    </div>
  );
};

export default CardList;
