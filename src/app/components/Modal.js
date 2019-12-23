import React from "react";
import PropTypes from "prop-types";
import { Modal as StyledModal } from "react-bulma-components";

const { Card } = StyledModal;
const { Head, Title, Body } = Card;
export const Modal = ({ title, onClose, isShown, children }) => (
  <StyledModal show={isShown} onClose={onClose} closeOnBlur>
    <Card>
      <Head onClose={onClose}>
        <Title>{title}</Title>
      </Head>
      <Body>{children}</Body>
    </Card>
  </StyledModal>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
