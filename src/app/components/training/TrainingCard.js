import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card as StyledCard, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { setCardLearned } from "../../api";
import { TrainingCardButtons } from "./TrainingCardButtons";

const { Content, Footer } = StyledCard;

export const TrainingCard = ({ card, mode, actionCallback }) => {
  const { id, original, definition, example, translation } = card;
  const [settings, setSettings] = useState({ currentMode: mode });

  const cardLearned = learned => {
    if (mode === "translation") {
      setCardLearned(id, learned)
        .then(() => setSettings({}))
        .then(actionCallback);
    } else {
      setSettings({ currentMode: mode });
      actionCallback();
    }
  };

  const { currentMode, definition: showDefinition } = settings;

  return (
    <StyledCard style={{ width: 500, display: "inline-block", border: 2 }}>
      <Content>
        <p style={{ fontSize: 24, fontWeight: "bold" }}>
          {currentMode === "original" ? original : translation}
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
        {currentMode === "original" && (
          <p>
            <i>{example}</i>
          </p>
        )}
        <Button
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() =>
            setSettings({
              ...settings,
              currentMode:
                currentMode === "original" ? "translation" : "original"
            })
          }
        >
          <FontAwesomeIcon icon={faRedoAlt} />
        </Button>
      </Content>
      <Footer>
        <TrainingCardButtons markCardAsLearned={cardLearned} />
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
