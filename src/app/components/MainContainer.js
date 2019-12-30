import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCardForm } from "./form";
import { Modal } from "./Modal";

import { CardsContainer } from "./CardsContainer";
import { AddCardSection } from "./AddCardSection";
import { languages } from "../../data/supportedLanguages";
import { createCard } from "../api";
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

  const onSave = newCard => {
    createCard(newCard)
      .then(() => dispatch(loadCards()))
      .then(() => {
        setFormVisible(false);
      });
    // const index = cards.findIndex(({ id }) => id === newCard.id);
    // const items =
    //   index !== -1
    //     ? [
    //         ...cards.slice(0, index),
    //         newCard,
    //         ...cards.slice(index + 1, cards.length)
    //       ]
    //     : [...cards, { ...newCard, id: getRandomNumber().toString() }];
    // dispatch(setCards(items));
    // setFormVisible(false);
  };
  const onDelete = cardId => {
    const index = cards.findIndex(({ id }) => id === cardId);
    const items = [
      ...cards.slice(0, index),
      ...cards.slice(index + 1, cards.length)
    ];

    // dispatch(setCards(items));
    setFormVisible(false);
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
