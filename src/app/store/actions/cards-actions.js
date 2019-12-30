import { fetchCards } from "../../api";

export const SET_CARDS = "SET_CARDS";

export const setCards = cards => ({ type: SET_CARDS, payload: cards });

export const loadCards = () => dispatch => {
  return fetchCards().then(response => dispatch(setCards(response.cards)));
};
