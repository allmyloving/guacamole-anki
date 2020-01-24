import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tile, Heading, Box } from "react-bulma-components";
import { Card } from "./Card";

export const CardsContainer = ({
  tags,
  cards,
  lang: { value, title },
  onEditButtonClick,
  onDeleteButtonClick
}) => {
  const [selectedTag, setSelectedTag] = useState();
  return (
    <Box>
      <Heading>{title}</Heading>
      <Tile kind="ancestor" style={{ flexWrap: "wrap" }}>
        {cards
          .filter(card => card.language === value)
          .filter(card => {
            if (selectedTag) return card.tags.indexOf(selectedTag) !== -1;
            return true;
          })
          .map(card => (
            <Tile size={4} key={card.id}>
              <Card
                tags={tags}
                card={card}
                onTagClick={tag =>
                  setSelectedTag(tag === selectedTag ? null : tag)
                }
                onEditButtonClick={onEditButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
              />
            </Tile>
          ))}
      </Tile>
    </Box>
  );
};

CardsContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  lang: PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};
