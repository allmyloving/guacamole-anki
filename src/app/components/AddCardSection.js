import React, { useState } from "react";
import { Button } from "react-bulma-components";
import { AddCardForm } from "./AddCardForm";
import { Modal } from "./Modal";

export const AddCardSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);
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
        <AddCardForm />
      </Modal>
    </>
  );
};
