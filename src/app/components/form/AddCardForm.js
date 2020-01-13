import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "./TextInput";
import { SelectInput } from "./SelectInput";
import { TagsInput } from "./TagsInput";
import { languages } from "../../../data/supportedLanguages";
import { tagsApi } from "../../api";

const { Field, Control, Textarea } = Form;

const getFormFields = tags => [
  {
    label: "Original",
    placeholder: "Word in original language",
    name: "original",
    component: TextInput
  },
  {
    label: "Example",
    placeholder: "Example in the sentence",
    name: "example",
    component: TextInput,
    renderAs: Textarea
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
    component: TextInput,
    renderAs: Textarea
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
  },
  {
    label: "Tags",
    name: "tags",
    component: TagsInput,
    options: [{ color: "", title: " " }, ...tags]
  }
];

export const AddCardForm = ({ initialValues, onSave, onCancel }) => {
  const [values, changeValues] = useState(initialValues);
  const [fields, setFields] = useState();

  useEffect(() => {
    tagsApi
      .fetchTags()
      .then(response => setFields(getFormFields(response.tags)));
  }, []);

  const changeField = (value, fieldName) => {
    changeValues({ ...values, [fieldName]: value });
  };
  if (!fields) return null;
  return (
    <>
      <div style={{ marginBottom: 30 }}>
        {fields.map(({ name, component: Component, ...rest }) => (
          <Component
            key={name}
            onChange={value => {
              changeField(value, name);
            }}
            value={values[name]}
            {...rest}
          />
        ))}
      </div>
      <Field kind="group">
        <Control>
          <Button color="link" onClick={onCancel}>
            <FontAwesomeIcon icon={faTimes} style={{ marginRight: 10 }} />
            Cancel
          </Button>
        </Control>
        <Control>
          <Button type="submit" color="success" onClick={() => onSave(values)}>
            <FontAwesomeIcon icon={faCheck} style={{ marginRight: 10 }} />
            Save
          </Button>
        </Control>
      </Field>
    </>
  );
};

AddCardForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    language: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    definition: PropTypes.string
  })
};

AddCardForm.defaultProps = {
  initialValues: {
    language: "",
    example: "",
    original: "",
    translation: "",
    definition: "",
    tags: []
  }
};
