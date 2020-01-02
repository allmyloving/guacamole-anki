import React from "react";
import PropTypes from "prop-types";
import { Card as StyledCard } from "react-bulma-components";
import { CardActions } from "./CardActions";

const { Content } = StyledCard;

export const Card = ({ card, onEditButtonClick, onDeleteButtonClick }) => {
  const { original, example, translation, definition } = card;

  return (
    <StyledCard style={{ width: "100%", margin: 10 }}>
      <header className="card-header" style={{ height: 48 }}>
        <p className="card-header-title">{original}</p>
      </header>
      <Content>
        <p>
          Example:
          {example}
        </p>
        <p>
          Translation:
          {translation}
        </p>
        <p>
          Definition:
          {definition}
        </p>
      </Content>
      <CardActions
        onEditButtonClick={onEditButtonClick}
        onDeleteButtonClick={onDeleteButtonClick}
        card={card}
      />
    </StyledCard>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    example: PropTypes.string,
    language: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    definition: PropTypes.string
  }).isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};
