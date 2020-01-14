import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bulma-components";

const { Field, Label, Control, Select, Help } = Form;

export const SelectInput = ({
  label,
  options,
  onChange,
  hasError,
  value,
  extraStyles
}) => (
  <Field style={{ display: "flex", ...extraStyles }}>
    <Label style={{ width: 90, alignSelf: "flex-end" }}>{label}</Label>
    <Control style={{ flexGrow: 1 }}>
      <Select onChange={event => onChange(event.target.value)} value={value}>
        {options.map(({ value: langValue, title }) => (
          <option key={langValue} value={langValue}>
            {title}
          </option>
        ))}
      </Select>
      {hasError && <Help color="danger">Fill in this field</Help>}
    </Control>
  </Field>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
