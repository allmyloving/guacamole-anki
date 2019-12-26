import React from "react";

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
