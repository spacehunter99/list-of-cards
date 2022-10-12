import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async function () {
    const response = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand/5"
    );
    const data = await response.json();
    return data.map((item) => ({
      ...item,
      isLiked: false,
    }));
  }
);

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    isButtonClicked: false,
  },
  reducers: {
    removeCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    toggleIsLiked(state, action) {
      const likedCards = state.cards.find(
        (card) => card.id === action.payload.id
      );
      likedCards.isLiked = !likedCards.isLiked;
    },
    showFilteredCards(state, action) {
      state.isButtonClicked = !state.isButtonClicked;
      //   if (state.isButtonClicked) {
      //     const newState = state.cards.filter((card) => card.isLiked === true);
      //     state.filteredCards = newState;
      //   } else return state.cards;
    },
  },
  extraReducers: {
    [fetchCards.fulfilled]: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { removeCard, toggleIsLiked, showFilteredCards } =
  cardSlice.actions;

export default cardSlice.reducer;
