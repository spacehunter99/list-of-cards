import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type Card = {
  id: number;
  name: string;
  isLiked: boolean;
  image_link: string;
  geo_range: string;
  animal_type: string;
  diet: string;
  lifespan: string;
  weight_max?: string;
  weight_min?: string;
  latin_name?: string;
  length_max?: string;
  length_min?: string;
  habitat?: string;
  active_time?: string;
};

type CardsState = {
  cards: Card[];
  filteredCards: Card[];
  isButtonClicked: boolean;
};

export const fetchCards = createAsyncThunk<Card[]>(
  "cards/fetchCards",
  async function () {
    const response = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand/9"
    );
    const data = await response.json();
    return data.map((item: Card) => ({
      ...item,
      isLiked: false,
    }));
  }
);

const initialState: CardsState = {
  cards: [],
  filteredCards: [],
  isButtonClicked: false,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    removeCard(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    toggleIsLiked(state, action: PayloadAction<number>) {
      const likedCards = state.cards.find((card) => card.id === action.payload);
      if (likedCards) {
        likedCards.isLiked = !likedCards.isLiked;
      }

      if (state.isButtonClicked) {
        const filetredlikedCards = state.filteredCards.find(
          (card) => card.id === action.payload
        );
        if (filetredlikedCards) {
          filetredlikedCards.isLiked = !filetredlikedCards.isLiked;
        }
      }
    },
    showFilteredCards(state) {
      state.isButtonClicked = !state.isButtonClicked;
      if (state.isButtonClicked) {
        const newState = state.cards.filter((card) => card.isLiked === true);
        state.filteredCards = newState;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const { removeCard, toggleIsLiked, showFilteredCards } =
  cardSlice.actions;

export default cardSlice.reducer;
