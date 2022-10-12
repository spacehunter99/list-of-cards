import React from "react";
import CardList from "../CardList";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "./../../store/cardSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.cards.cards);

  console.log(cards);

  return (
    <div className="main-container">
      <CardList />
    </div>
  );
};

export default App;
