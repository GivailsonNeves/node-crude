import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalAdd(props: any) {

    const { show, onClose } = props;

    const handleClose = () => {
        onClose && onClose();
    }

    return (
        <Modal
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
            show={show} 
            onHide={handleClose} bg="dark" variant="dark">
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAdd;