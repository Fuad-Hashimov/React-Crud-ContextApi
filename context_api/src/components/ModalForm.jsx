import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";

const ModalForm = ({ show, handleClose }) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalForm;
