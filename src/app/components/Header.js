import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlus,
  faUserGraduate,
  faTags
} from "@fortawesome/free-solid-svg-icons";

export const Header = ({
  onAddButtonClick,
  onTrainModeButtonClick,
  onManageTagsButtonClick,
  isTrainMode
}) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <Button
        rounded
        color="primary"
        onClick={onAddButtonClick}
        style={{ marginRight: 10 }}
      >
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: 10 }} />
        Add new
      </Button>
      <Button rounded color="warning" onClick={onManageTagsButtonClick}>
        <FontAwesomeIcon icon={faTags} style={{ marginRight: 10 }} />
        Manage tags
      </Button>
      <Button
        rounded
        color={isTrainMode ? "info" : ""}
        onClick={onTrainModeButtonClick}
        style={{ float: "right" }}
      >
        <FontAwesomeIcon icon={faUserGraduate} style={{ marginRight: 10 }} />
        Train mode
      </Button>
    </div>
  );
};

Header.propTypes = {
  onAddButtonClick: PropTypes.func.isRequired,
  onTrainModeButtonClick: PropTypes.func.isRequired,
  onManageTagsButtonClick: PropTypes.func.isRequired,
  isTrainMode: PropTypes.bool.isRequired
};
