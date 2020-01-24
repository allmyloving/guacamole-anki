import React from "react";
import { PropTypes } from "prop-types";

import { Tag, Form, Button } from "react-bulma-components";

const { Control, Field } = Form;

export const TagsView = ({ tags, onRemove, onClick }) => {
  return (
    <Field multiline kind="group">
      {tags.map(({ id, title, color }) => (
        <Control key={id}>
          <Tag.Group gapless>
            {onClick ? (
              <Button
                renderAs={Tag}
                color={color}
                onClick={() => onClick(title)}
              >
                {title}
              </Button>
            ) : (
              <Tag color={color}>{title}</Tag>
            )}
            {onRemove && <Tag remove onClick={() => onRemove({ id, title })} />}
          </Tag.Group>
        </Control>
      ))}
    </Field>
  );
};

TagsView.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemove: PropTypes.func,
  onClick: PropTypes.func
};

TagsView.defaultProps = {
  onRemove: null,
  onClick: null
};
