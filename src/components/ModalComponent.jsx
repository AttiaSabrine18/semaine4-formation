//ModalComponent.jsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ModalComponent = ({titre, contenu}) => {
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Ouvrir la Modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{titre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {contenu}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default ModalComponent;
  