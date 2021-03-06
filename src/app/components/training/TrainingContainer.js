import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { TrainingCard } from "./TrainingCard";
import { SelectInput } from "../form";
import { languages } from "../../../data/supportedLanguages";

const modes = [
  {
    value: "translation",
    title: "Translation"
  },
  {
    value: "original",
    title: "Original"
  }
];

export const TrainingContainer = () => {
  const [trainingCards, setTrainingCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].value);
  const [selectedMode, setSelectedMode] = useState(modes[0].value);
  const cards = useSelector(state => state.cards.cards);

  const startTraining = () => {
    const filtered = cards.filter(
      ({ readyForRevision, language }) =>
        readyForRevision && language === selectedLanguage
    );
    setTrainingCards(filtered);
  };

  if (trainingCards.length && !trainingCards[currentIndex]) {
    return <div>All done for today!</div>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        textAlignLast: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      {trainingCards.length ? (
        <TrainingCard
          id={trainingCards[currentIndex].id}
          card={trainingCards[currentIndex]}
          mode={selectedMode}
          actionCallback={() => setCurrentIndex(currentIndex + 1)}
        />
      ) : (
        <>
          <SelectInput
            label="Select language"
            value={selectedLanguage}
            onChange={lang => setSelectedLanguage(lang)}
            options={languages}
            extraStyles={{ flexDirection: "column" }}
          />
          <SelectInput
            label="Select front card language"
            value={selectedMode}
            onChange={mode => setSelectedMode(mode)}
            options={modes}
            extraStyles={{ flexDirection: "column" }}
          />
          <Button size="large" onClick={startTraining}>
            <FontAwesomeIcon icon={faPlay} style={{ marginRight: 10 }} />
            Start
          </Button>
        </>
      )}
    </div>
  );
};
