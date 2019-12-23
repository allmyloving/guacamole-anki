import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bulma-components";

const { Field, Label, Control, Input, Select } = Form;

export const AddCardForm = ({ onSave, onCancel }) => {
  const [values, changeValues] = useState({
    language: "",
    original: ""
  });

  const changeField = ({ target: { value } }, fieldName) => {
    changeValues({ ...values, [fieldName]: value });
  };
  return (
    <div>
      <Field>
        <Label>Original</Label>
        <Control>
          <Input
            onChange={event => {
              changeField(event, "original");
            }}
            placeholder="Word in original language"
            value={values.original}
          />
        </Control>
      </Field>
      <Field>
        <Label>Language</Label>
        <Control>
          <Select
            onChange={event => {
              changeField(event, "language");
            }}
            value={values.language}
          >
            <option value="" />
            <option value="DE">Deutsch</option>
            <option value="EN">English</option>
          </Select>
        </Control>
      </Field>
      <Field kind="group">
        <Control>
          <Button color="link" onClick={onCancel}>
            Cancel
          </Button>
        </Control>
        <Control>
          <Button type="primary" onClick={() => onSave(values)}>
            Submit
          </Button>
        </Control>
      </Field>
    </div>
  );
};

AddCardForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};
