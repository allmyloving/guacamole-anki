import { host } from "./config";

const headers = new Headers({ "content-type": "application/json" });

export const fetchCards = () =>
  fetch(`${host}/cards`).then(response => response.json());

export const createCard = card =>
  fetch(`${host}/cards`, {
    method: "POST",
    body: JSON.stringify(card),
    headers
  });

export const updateCard = card =>
  fetch(`${host}/cards/${card.id}`, {
    method: "PUT",
    body: JSON.stringify(card),
    headers
  });

export const deleteCard = id =>
  fetch(`${host}/cards/${id}`, {
    method: "DELETE"
  });
