import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  buttonContainer: {
    width: "100%",
    opacity: 0.8,
    height: 50
  },
  button: {
    width: "50%",
    height: "100%"
  }
};

export const TrainingCardButtons = ({ markCardAsLearned }) => {
  return (
    <Button.Group hasAddons position="centered" style={styles.buttonContainer}>
      <Button
        color="success"
        onClick={() => markCardAsLearned(true)}
        style={styles.button}
      >
        <FontAwesomeIcon icon={faCheck} />
      </Button>
      <Button
        style={styles.button}
        color="danger"
        className="is-success is-light"
        onClick={() => markCardAsLearned(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </Button.Group>
  );
};

TrainingCardButtons.propTypes = {
  markCardAsLearned: PropTypes.func.isRequired
};
