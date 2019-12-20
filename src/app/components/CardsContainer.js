import React from "react";
import PropTypes from "prop-types";
import { Card } from "./Card";
import { Tile } from "react-bulma-components";

export const CardsContainer = ({ cards, lang }) => (
  <Tile kind="ancestor">
    {cards
      .filter(card => card.lang === lang)
      .map(card => (
        <Tile size={4} key={card.id}>
          <Card card={card}></Card>
        </Tile>
      ))}
  </Tile>
);

CardsContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  lang: PropTypes.string.isRequired
};
