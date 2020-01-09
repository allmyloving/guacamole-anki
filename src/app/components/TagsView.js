import React from "react";
import { PropTypes } from "prop-types";

import { Tag, Form } from "react-bulma-components";

const { Control, Field } = Form;

export const TagsView = ({ tags, onRemove }) => {
  return (
    <Field multiline kind="group">
      {tags.map(({ id, title, color }) => (
        <Control key={id}>
          <Tag.Group gapless>
            <Tag color={color}>{title}</Tag>
            <Tag remove onClick={() => onRemove(id)} />
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
