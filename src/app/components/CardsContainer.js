import React from "react";
import PropTypes from "prop-types";
import { Tile } from "react-bulma-components";
import { Card } from "./Card";

export const CardsContainer = ({ cards, lang }) => (
  <Tile kind="ancestor">
    {cards
      .filter(card => card.lang === lang)
      .map(card => (
        <Tile size={4} key={card.id}>
          <Card card={card} />
        </Tile>
      ))}
  </Tile>
);

CardsContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  lang: PropTypes.string.isRequired
};
