import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import ModalAdd from './modal-add';

import './styles.css';

function Home() {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModalAddd = () => {
        setShowModal(true);
    }

    const handleCloseModalAddd = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="product-list">
                <div className="text-right">
                    <Button
                        onClick={handleOpenModalAddd}
                        variant="primary">
                        Adicionar
                    </Button>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="text-right">
                    <Button
                        onClick={handleOpenModalAddd}
                        variant="primary">
                        Adicionar
                    </Button>
                </div>
            </div>
            <ModalAdd 
                show={showModal}
                onClose={handleCloseModalAddd}
            />
        </>
    );
}

export default Home;