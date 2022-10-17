import React from "react";
import Card from "./../Card";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "./../../hook";
import { showFilteredCards } from "./../../store/cardSlice";

const CardList: React.FC = () => {
  const animals = useAppSelector((state) => state.cards.cards);
  const buttonState = useAppSelector((state) => state.cards.isButtonClicked);
  const filteredAnimals = useAppSelector((state) => state.cards.filteredCards);

  const dispatch = useAppDispatch();

  const cards = animals.map((animal) => {
    return <Card key={animal.id} info={animal} />;
  });

  const filteredCards = filteredAnimals.map((animal) => {
    return <Card key={animal.id} info={animal} />;
  });

  return (
    <div className="card-list-container">
      <div className="filter-button-container">
        <button
          className="filter-button btn-16"
          onClick={() => dispatch(showFilteredCards())}
        >
          {buttonState ? "Показать все" : "Показать отмеченные"}
        </button>
      </div>
      {buttonState ? (
        <div className="card-list-container-items">
          {filteredCards.length > 0 ? (
            filteredCards
          ) : (
            <h2>Вы пока ничего не отметили</h2>
          )}
        </div>
      ) : (
        <div className="card-list-container-items">{cards}</div>
      )}
    </div>
  );
};

export default CardList;
