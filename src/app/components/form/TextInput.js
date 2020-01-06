import React, { useState } from "react";
import PropTypes from "prop-types";

import { Form, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const { Field, Label, Control, Input } = Form;
const additionalLetters = ["ä", "ö", "ü", "ß"];
export const TextInput = ({
  label,
  onChange,
  value,
  placeholder,
  renderAs: Component
}) => {
  const [upperCaseMode, setUpperCaseMode] = useState(false);
  return (
    <Field style={{ display: "flex" }}>
      <Label style={{ width: 90 }}>{label}</Label>
      <Control style={{ flex: 1 }}>
        <Component
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </Control>
      {additionalLetters.map(letter => (
        <Button
          key={letter}
          style={{ width: 15 }}
          onClick={() =>
            onChange({
              target: {
                value: `${value || ""}${
                  upperCaseMode ? letter.toUpperCase() : letter
                }`
              }
            })
          }
        >
          {upperCaseMode ? letter.toUpperCase() : letter}
        </Button>
      ))}
      <Button
        onClick={() => setUpperCaseMode(!upperCaseMode)}
        style={{ width: 15 }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </Field>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderAs: PropTypes.func
};

TextInput.defaultProps = {
  value: "",
  renderAs: Input
};
