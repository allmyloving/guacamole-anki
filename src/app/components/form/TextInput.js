import React from "react";
import PropTypes from "prop-types";

import { Form } from "react-bulma-components";

const { Field, Label, Control, Input } = Form;

export const TextInput = ({ label, onChange, value, placeholder }) => (
  <Field>
    <Label>{label}</Label>
    <Control>
      <Input onChange={onChange} placeholder={placeholder} value={value} />
    </Control>
  </Field>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
