import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCardForm } from "./form";
import { Modal } from "./Modal";

import { CardsContainer } from "./CardsContainer";
import { AddCardSection } from "./AddCardSection";
import { languages } from "../../data/supportedLanguages";
import { createCard, updateCard, deleteCard } from "../api";
import { loadCards } from "../store/actions";

export const MainContainer = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [modalMode, setModalMode] = useState();
  const [initialFormData, setInitialFormData] = useState();

  const cards = useSelector(({ cards }) => cards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards());
  }, []);

  const createOrUpdateCard = newCard =>
    newCard.id ? updateCard(newCard) : createCard(newCard);

  const onSave = newCard => {
    createOrUpdateCard(newCard)
      .then(() => dispatch(loadCards()))
      .then(() => {
        setFormVisible(false);
      });
  };
  const onDelete = id => {
    deleteCard(id).then(() => dispatch(loadCards()));
  };
  const openModal = data => {
    setModalMode(data ? "add" : "edit");
    setInitialFormData(data);
    setFormVisible(true);
  };
  if (!cards) return null;
  return (
    <>
      <AddCardSection onAddButtonClick={openModal} />
      {languages.map(lang => (
        <CardsContainer
          key={lang.value}
          cards={cards}
          lang={lang}
          onEditButtonClick={openModal}
          onDeleteButtonClick={onDelete}
        />
      ))}
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
