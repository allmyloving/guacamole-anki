import { host } from "./config";

export const fetchCards = () =>
  fetch(`${host}/cards`).then(response => response.json());

export const createCard = card =>
  fetch(`${host}/cards`, {
    method: "POST",
    body: JSON.stringify(card),
    headers: new Headers({ "content-type": "application/json" })
  });
