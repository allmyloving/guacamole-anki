import React from "react";
import PropTypes from "prop-types";
import { SelectInput } from "./SelectInput";
import { TagsView } from "..";

export const TagsInput = ({
  options,
  label,
  value: currentValues,
  onChange
}) => (
  <>
    <SelectInput
      label={label}
      options={options
        .filter(({ value }) => currentValues.indexOf(value) === -1)
        .map(({ value }) => ({ value, title: value }))}
      onChange={value => onChange([...currentValues, value])}
      value=""
    />
    <TagsView
      tags={currentValues.map(tag =>
        options.find(({ value }) => value === tag)
      )}
      onRemove={value => {
        const index = currentValues.findIndex(tag => tag === value);
        const newValues = [
          ...currentValues.slice(0, index),
          ...currentValues.slice(index + 1, currentValues.length)
        ];
        onChange(newValues);
      }}
    />
  </>
);

TagsInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  ),
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired
};
