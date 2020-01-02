import React, { useState } from "react";

import { Button, Card as StyledCard } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal";

const { Footer } = StyledCard;

export const CardActions = ({
  onEditButtonClick,
  onDeleteButtonClick,
  card
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Footer>
        <Footer.Item
          renderAs="a"
          href="#"
          onClick={() => onEditButtonClick(card)}
        >
          <FontAwesomeIcon icon={faEdit} style={{ marginRight: 10 }} />
          Edit
        </Footer.Item>
        <Footer.Item
          renderAs="a"
          href="#"
          onClick={() => setModalVisible(true)}
        >
          <FontAwesomeIcon icon={faTrash} style={{ marginRight: 10 }} />
          Delete
        </Footer.Item>
      </Footer>
      <Modal
        title="Delete card?"
        isShown={isModalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      >
        <p style={{ padding: 10 }}>
          Are you sure you want to delete card
          <b>{` ${card.original}`}</b>?
        </p>
        <Button.Group position="centered">
          <Button onClick={() => onDeleteButtonClick(card.id)}>
            Yes, I&apos;m sure
          </Button>
          <Button onClick={() => setModalVisible(false)}>Nope, keep it</Button>
        </Button.Group>
      </Modal>
    </>
  );
};
