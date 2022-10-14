import React from "react";
import Card from "../Card";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { showFilteredCards } from "./../../store/cardSlice";

const CardList = () => {
  const animals = useSelector((state) => state.cards.cards);
  const buttonState = useSelector((state) => state.cards.isButtonClicked);
  const filteredAnimals = useSelector((state) => state.cards.filteredCards);

  console.log(animals);

  const dispatch = useDispatch();

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
