import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bulma-components";

import { AddCardForm } from "./form";
import { Modal } from "./Modal";
import { CardsContainer } from "./CardsContainer";
import { languages } from "../../data/supportedLanguages";
import { createCard, updateCard, deleteCard } from "../api";
import { loadCards } from "../store/actions";
import { TrainingContainer } from "./training";

export const MainContainer = ({ setLoading }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [modalMode, setModalMode] = useState(false);
  const [initialFormData, setInitialFormData] = useState();
  const [isTrainMode, setTrainMode] = useState(false);

  const cards = useSelector(state => state.cards.cards);
  const dispatch = useDispatch();

  const withLoader = action => {
    setLoading(true);
    action()
      .then(() => dispatch(loadCards()))
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    withLoader(() => Promise.resolve());
  }, []);

  const createOrUpdateCard = newCard =>
    newCard.id ? updateCard(newCard) : createCard(newCard);

  const onSave = newCard => {
    withLoader(() => {
      setFormVisible(false);
      return createOrUpdateCard(newCard);
    });
  };
  const onDelete = id => {
    withLoader(() => deleteCard(id));
  };
  const openModal = data => {
    setModalMode(data ? "add" : "edit");
    setInitialFormData(data);
    setFormVisible(true);
  };
  if (!cards) return null;
  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <Button rounded color="primary" onClick={openModal}>
          Add new
        </Button>
        <Button
          rounded
          color="info"
          onClick={() => {
            setTrainMode(!isTrainMode);
          }}
          style={{ float: "right" }}
        >
          Train mode
        </Button>
      </div>
      {isTrainMode ? (
        <TrainingContainer />
      ) : (
        languages.map(lang => (
          <CardsContainer
            key={lang.value}
            cards={cards}
            lang={lang}
            onEditButtonClick={openModal}
            onDeleteButtonClick={onDelete}
          />
        ))
      )}
      <Modal
        title={modalMode === "add" ? "Add new card" : "Edit card"}
        isShown={isFormVisible}
        onClose={() => {
          setFormVisible(false);
        }}
      >
        <AddCardForm
          onSave={onSave}
          initialValues={initialFormData}
          onCancel={() => {
            setFormVisible(false);
          }}
        />
      </Modal>
    </>
  );
};

MainContainer.propTypes = {
  setLoading: PropTypes.func.isRequired
};
