import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TrainingCard } from "./TrainingCard";

export const TrainingContainer = () => {
  const [trainingCards, setTrainingCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = useSelector(state => state.cards.cards);
  useEffect(() => {
    const filtered = cards.filter(({ readyForRevision }) => readyForRevision);
    setTrainingCards(filtered);
  }, []);

  if (!trainingCards[currentIndex]) {
    return <div>All done for today!</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <TrainingCard
        id={trainingCards[currentIndex].id}
        card={trainingCards[currentIndex]}
        actionCallback={() => setCurrentIndex(currentIndex + 1)}
      />
    </div>
  );
};
