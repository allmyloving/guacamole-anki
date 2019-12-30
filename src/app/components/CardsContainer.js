import React from "react";
import PropTypes from "prop-types";
import { Tile, Heading, Box } from "react-bulma-components";
import { Card } from "./Card";

export const CardsContainer = ({
  cards,
  lang: { value, title },
  onEditButtonClick,
  onDeleteButtonClick
}) => (
  <Box>
    <Heading>{title}</Heading>
    <Tile kind="ancestor" style={{ flexWrap: "wrap" }}>
      {cards
        .filter(card => card.language === value)
        .map(card => (
          <Tile size={4} key={card.id}>
            <Card
              card={card}
              onEditButtonClick={onEditButtonClick}
              onDeleteButtonClick={onDeleteButtonClick}
            />
          </Tile>
        ))}
    </Tile>
  </Box>
);

CardsContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  lang: PropTypes.string.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};
