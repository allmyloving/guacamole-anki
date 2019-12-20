import React from "react";
import PropTypes from "prop-types";
import { Card as StyledCard } from "react-bulma-components";

const { Content, Footer } = StyledCard;

export const Card = ({
  card: { word, example, lang, translation, definition }
}) => (
  <StyledCard>
    <header className="card-header">
      <p className="card-header-title">{word}</p>
    </header>
    <Content>
      <p>
        Example:
        {example}
      </p>
      <p>
        Lang:
        {lang}
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
      <Footer.Item renderAs="a" href="#">
        Edit
      </Footer.Item>
      <Footer.Item renderAs="a" href="#">
        Delete
      </Footer.Item>
    </Footer>
  </StyledCard>
);

Card.propTypes = {
  card: PropTypes.shape({
    word: PropTypes.string.isRequired,
    example: PropTypes.string,
    lang: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    definition: PropTypes.string
  }).isRequired
};
