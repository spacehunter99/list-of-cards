import React from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { showFilteredCards } from "./../../store/cardSlice";

const CardList = () => {
  const animals = useSelector((state) => state.cards.cards);
  const buttonState = useSelector((state) => state.cards.isButtonClicked);
  const filteredAnimals = useSelector((state) => state.cards.filteredCards);

  const dispatch = useDispatch();

  const cards = animals.map((animal) => {
    return <Card key={animal.id} info={animal} />;
  });

  const filteredCards = filteredAnimals.map((animal) => {
    return <Card key={animal.id} info={animal} />;
  });

  return (
    <div className="card-list-container">
      <div>
        <button onClick={() => dispatch(showFilteredCards())}>
          {buttonState ? "Показать все" : "Показать отмеченные"}
        </button>
      </div>
      {buttonState ? (
        <div>
          {filteredCards.length > 0 ? (
            filteredCards
          ) : (
            <h2>Вам пока ничего не понравилось</h2>
          )}
        </div>
      ) : (
        <div>{cards}</div>
      )}
    </div>
  );
};

export default CardList;
