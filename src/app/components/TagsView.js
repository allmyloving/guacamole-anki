import React from "react";
import { PropTypes } from "prop-types";

import { Tag, Form } from "react-bulma-components";

const { Control, Field } = Form;

export const TagsView = ({ tags, onRemove }) => {
  return (
    <Field multiline kind="group">
      {tags.map(({ value, color }) => (
        <Control key={value}>
          <Tag.Group gapless>
            <Tag color={color}>{value}</Tag>
            <Tag remove onClick={() => onRemove(value)} />
          </Tag.Group>
        </Control>
      ))}
    </Field>
  );
};

TagsView.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  ),
  onRemove: PropTypes.func.isRequired
};
