import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card as StyledCard, Button } from "react-bulma-components";
import { setCardLearned } from "../../api";

const { Content, Footer } = StyledCard;

export const TrainingCard = ({ card, actionCallback }) => {
  const { id, original, example, translation, definition } = card;
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const cardLearned = learned => {
    setCardLearned(id, learned).then(actionCallback);
  };

  return (
    <StyledCard style={{ width: 500, display: 'inline-block' }}>
      <Content>
        <p>{original}</p>
        {showExample && <i>{example}</i>}
        {!showExample && <Button onClick={() => setShowExample(true)}>Hint</Button>}
        {showAnswer && <p>
Translation:{translation}</p>}
        {!showAnswer && <Button onClick={() => setShowAnswer(true)}>Show translation</Button>}
      </Content>
      <Footer>
        <Footer.Item renderAs="a" href="#" onClick={() => cardLearned(true)}>
          I know this one
        </Footer.Item>
        <Footer.Item renderAs="a" href="#" onClick={() => cardLearned(false)}>
          Hmmm, not so much
        </Footer.Item>
      </Footer>
    </StyledCard>
  );
};

TrainingCard.propTypes = {
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
