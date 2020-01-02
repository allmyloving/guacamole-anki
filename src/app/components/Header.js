import React from "react";
import { Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export const Header = ({
  onAddButtonClick,
  onTrainModeButtonClick,
  isTrainMode
}) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <Button rounded color="primary" onClick={onAddButtonClick}>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10" }} />
        Add new
      </Button>
      <Button
        rounded
        color={isTrainMode ? "info" : ""}
        onClick={onTrainModeButtonClick}
        style={{ float: "right" }}
      >
        <FontAwesomeIcon icon={faUserGraduate} style={{ marginRight: "10" }} />
        Train mode
      </Button>
    </div>
  );
};
