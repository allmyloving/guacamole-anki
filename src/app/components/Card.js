import React from "react";
import PropTypes from "prop-types";
import { Card as StyledCard, Box } from "react-bulma-components";
import { CardActions } from "./CardActions";

const { Content } = StyledCard;

export const Card = ({ card, onEditButtonClick, onDeleteButtonClick }) => {
  const { original, example, translation, definition } = card;

  return (
    <StyledCard style={{ width: "100%", margin: 10, textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        <p className="card-header-title" style={{ fontSize: 24 }}>
          {original}
        </p>
      </div>
      <p style={{ fontStyle: "italic", padding: 10 }}>{translation}</p>
      <Content>
        <Box>{definition}</Box>
        <blockquote style={{ fontStyle: "italic" }}>
          {`"${example}"`}
        </blockquote>
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
