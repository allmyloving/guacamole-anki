import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bulma-components";

const { Field, Label, Control, Select } = Form;

export const SelectInput = ({ label, options, onChange, value }) => (
  <Field>
    <Label>{label}</Label>
    <Control>
      <Select onChange={onChange} value={value}>
        {options.map(({ value: langValue, title }) => (
          <option key={langValue} value={langValue}>
            {title}
          </option>
        ))}
      </Select>
    </Control>
  </Field>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};
