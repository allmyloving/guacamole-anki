import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bulma-components";

const { Field, Label, Control, Select } = Form;

export const SelectInput = ({
  label,
  options,
  onChange,
  value,
  extraStyles
}) => (
  <Field style={{ display: "flex", ...extraStyles }}>
    <Label style={{ width: 90 }}>{label}</Label>
    <Control style={{ flexGrow: 1 }}>
      <Select onChange={event => onChange(event.target.value)} value={value}>
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
