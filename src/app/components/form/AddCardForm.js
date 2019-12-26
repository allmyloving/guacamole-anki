import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bulma-components";
import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { languages } from "../../../data/supportedLanguages";

const { Field, Control } = Form;

const fields = [
  {
    label: "Original",
    placeholder: "Word in original language",
    name: "word",
    component: TextInput
  },
  {
    label: "Example",
    placeholder: "Example in the sentence",
    name: "example",
    component: TextInput
  },
  {
    label: "Translation",
    placeholder: "Word translation to mother tongue",
    name: "translation",
    component: TextInput
  },
  {
    label: "Definition",
    placeholder: "Definition",
    name: "definition",
    component: TextInput
  },
  {
    label: "Language",
    name: "language",
    component: SelectInput,
    options: [
      {
        value: "",
        title: ""
      },
      ...languages
    ]
  }
];

export const AddCardForm = ({ initialValues, onSave, onCancel }) => {
  const [values, changeValues] = useState(initialValues);

  const changeField = ({ target: { value } }, fieldName) => {
    changeValues({ ...values, [fieldName]: value });
  };
  console.log(values);
  return (
    <div>
      {fields.map(({ name, component: Component, ...rest }) => (
        <Component
          key={name}
          onChange={event => {
            changeField(event, name);
          }}
          value={values[name]}
          {...rest}
        />
      ))}
      <Field kind="group">
        <Control>
          <Button color="link" onClick={onCancel}>
            Cancel
          </Button>
        </Control>
        <Control>
          <Button type="submit" onClick={() => onSave(values)}>
            Submit
          </Button>
        </Control>
      </Field>
    </div>
  );
};

AddCardForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    language: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    definition: PropTypes.string
  })
};

AddCardForm.defaultProps = {
  initialValues: {
    language: "",
    example: "",
    word: "",
    translation: "",
    definition: ""
  }
};
