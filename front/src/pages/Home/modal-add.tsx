import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';

function ModalAdd(props: any) {

    const { show, onClose, onSave } = props;
    const [product, setProduct] = useState<{ name: string }>({ name: '' });

    const handleClose = () => {
        onClose && onClose();
    }

    const handlSubmitData = () => {
        onSave && onSave(product);
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
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="E-mail do usuário"
                        // onInput={(event: any) => setCredentials({ ...credentials, email: event.target.value })}
                        // value={credentials.email}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlSubmitData}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAdd;