import { SET_CARDS } from "../actions";
import { cards } from "../../../data/cards";

const initialState = {
  cards
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS: {
      return {
        ...state,
        cards: action.payload
      };
    }
    default:
      return state;
  }
};
