import React from "react";
import PropTypes from "prop-types";
import { Card as StyledCard } from "react-bulma-components";

const { Content, Footer } = StyledCard;

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
      <Footer>
        <Footer.Item
          renderAs="a"
          href="#"
          onClick={() => onEditButtonClick(card)}
        >
          Edit
        </Footer.Item>
        <Footer.Item
          renderAs="a"
          href="#"
          onClick={() => onDeleteButtonClick(card.id)}
        >
          Delete
        </Footer.Item>
      </Footer>
    </StyledCard>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    original: PropTypes.string.isRequired,
    example: PropTypes.string,
    language: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    definition: PropTypes.string
  }).isRequired
};
