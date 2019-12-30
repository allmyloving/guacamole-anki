import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCardForm } from "./form";
import { Modal } from "./Modal";

import { CardsContainer } from "./CardsContainer";
import { AddCardSection } from "./AddCardSection";
import { languages } from "../../data/supportedLanguages";
import { createCard, updateCard, deleteCard } from "../api";
import { loadCards } from "../store/actions";

export const MainContainer = ({ setLoading }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [modalMode, setModalMode] = useState();
  const [initialFormData, setInitialFormData] = useState();

  const cards = useSelector(({ cards }) => cards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    withLoader(() => Promise.resolve());
  }, []);

  const createOrUpdateCard = newCard =>
    newCard.id ? updateCard(newCard) : createCard(newCard);

  const withLoader = action => {
    setLoading(true);
    action()
      .then(() => dispatch(loadCards()))
      .then(() => {
        setLoading(false);
      });
  };

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
