import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card as StyledCard, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faRedoAlt,
  faHandPointRight
} from "@fortawesome/free-solid-svg-icons";
import { setCardLearned } from "../../api";

const { Content, Footer } = StyledCard;

export const TrainingCard = ({ card, actionCallback }) => {
  const { id, original, definition, example, translation } = card;
  const [settings, setSettings] = useState({});
  const cardLearned = learned => {
    setCardLearned(id, learned)
      .then(() => setSettings({}))
      .then(actionCallback);
  };

  const {
    original: showOriginal,
    definition: showDefinition
  } = settings;

  return (
    <StyledCard style={{ width: 500, display: "inline-block", border: 2 }}>
      <Content>
        <p style={{ fontSize: 24, fontWeight: "bold" }}>
          {showOriginal ? original : translation}
        </p>
        {showDefinition ? (
          <p>
            <i>{definition}</i>
          </p>
        ) : (
          definition && (
            <Button
              onClick={() => setSettings({ ...settings, definition: true })}
              text
            >
              <FontAwesomeIcon icon={faHandPointRight} />
              Hint
            </Button>
          )
        )}
        {showOriginal && (
          <p>
            <i>{example}</i>
          </p>
        )}
        <Button
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() =>
            setSettings({ ...settings, original: !settings.original })}
        >
          <FontAwesomeIcon icon={faRedoAlt} />
        </Button>
      </Content>
      <Footer>
        <Button.Group
          hasAddons
          position="centered"
          style={{ width: "100%", opacity: 0.8, height: 50 }}
        >
          <Button
            color="success"
            onClick={() => cardLearned(true)}
            style={{ width: "50%", height: "100%" }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
          <Button
            style={{ width: "50%", height: "100%" }}
            color="danger"
            className="is-success is-light"
            onClick={() => cardLearned(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Button.Group>
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
  }).isRequired
};
