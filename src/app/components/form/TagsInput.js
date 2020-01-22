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
        .filter(({ title }) => currentValues.indexOf(title) === -1)
        .map(({ title }) => ({ title, value: title }))}
      onChange={title => onChange([...currentValues, title])}
      value=""
    />
    <TagsView
      tags={currentValues
        .map(tag => options.find(({ title }) => title === tag))
        .filter(tag => tag && tag.title)}
      onRemove={({ title }) => {
        const index = currentValues.findIndex(tag => tag === title);
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
      value: PropTypes.string,
      color: PropTypes.string
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired
};
