import React, { useState } from "react";
import { Button } from "react-bulma-components";
import { AddCardForm } from "./AddCardForm";
import { Modal } from "./Modal";
import { cards } from "../../data/cards";

export const AddCardSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const onSave = newCard => {
    cards.push(newCard);
    setFormVisible(false);
  };
  return (
    <>
      <Button
        rounded
        color="primary"
        onClick={() => {
          setFormVisible(true);
        }}
        style={{ marginBottom: 30 }}
      >
        Add new
      </Button>
      <Modal
        title="Add new card"
        isShown={isFormVisible}
        onClose={() => {
          setFormVisible(false);
        }}
      >
        <AddCardForm
          onSave={onSave}
          onCancel={() => {
            setFormVisible(false);
          }}
        />
      </Modal>
    </>
  );
};
