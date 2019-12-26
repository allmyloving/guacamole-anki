import React from "react";
import { Button } from "react-bulma-components";

export const AddCardSection = ({ onAddButtonClick }) => {
  return (
    <>
      <Button
        rounded
        color="primary"
        onClick={onAddButtonClick}
        style={{ marginBottom: 30 }}
      >
        Add new
      </Button>
    </>
  );
};
