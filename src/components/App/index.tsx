import React from "react";
import CardList from "./../CardList";
import "./style.scss";
import { useAppDispatch } from "./../../hook";
import { fetchCards } from "./../../store/cardSlice";
import { useEffect } from "react";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="main-container">
      <CardList />
    </div>
  );
};

export default App;
