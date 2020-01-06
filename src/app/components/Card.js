import React from "react";
import PropTypes from "prop-types";
import { Card as StyledCard, Box } from "react-bulma-components";
import { CardActions } from "./CardActions";

const styles = {
  Card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: 10,
    textAlign: "center"
  }
};
const { Content } = StyledCard;

export const Card = ({ card, onEditButtonClick, onDeleteButtonClick }) => {
  const { original, example, translation, definition } = card;

  return (
    <StyledCard style={styles.Card}>
      <div style={{ flexShrink: 0 }}>
        <p className="card-header-title" style={{ fontSize: 24 }}>
          {original}
        </p>
        <p style={{ fontStyle: "italic", padding: 10 }}>{translation}</p>
      </div>
      <Content style={{ flexGrow: 1 }}>
        {definition && <Box>{definition}</Box>}
        {example && (
          <blockquote style={{ fontStyle: "italic" }}>
            {`"${example}"`}
          </blockquote>
        )}
      </Content>
      <CardActions
        extraStyles={{ flexShrink: 0 }}
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
