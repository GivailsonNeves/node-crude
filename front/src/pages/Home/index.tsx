import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { ProductApi } from '../../services/product-api';
import ModalAdd from './modal-add';

import './styles.css';

function Home() {

    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function refreshProducts() {
            const _products = await ProductApi.list();
            if (_products) {
                setProducts(_products);
            }
        }
        refreshProducts();
    }, [setProducts]);

    const handleOpenModalAdd = () => {
        setShowModal(true);
    }

    const handleCloseModalAdd = () => {
        setShowModal(false);
    }

    const handleOnSave = async (product: any) => {
        try {
           // await ProductApi.save(product);
            const _products = await ProductApi.list();
            if (_products) {
                setProducts(_products);
            }
            setShowModal(false);
        } catch(err: any) {
            alert('xiii');
        }
    }

    const handleButtao = (id: number) => {
        alert(id);
    }

    return (
        <>
            <div className="product-list">
                <div className="text-right">
                    <Button
                        onClick={handleOpenModalAdd}
                        variant="primary">
                        Adicionar
                    </Button>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th style={{width: '200px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map(
                                (p: any, index: number) => (
                                    <tr key={index}>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.create_date}</td>
                                        <td>
                                            <ButtonGroup
                                                aria-label="Basic example">
                                                <Button
                                                    onClick={() => handleButtao(p.id)}
                                                    variant="secondary">visualizar</Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleButtao(p.id)}>
                                                    remover</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </Table>
                <div className="text-right">
                    <Button
                        onClick={handleOpenModalAdd}
                        variant="primary">
                        Adicionar
                    </Button>
                </div>
            </div>
            <ModalAdd
                show={showModal}
                onClose={handleCloseModalAdd}
                onSave={handleOnSave}
            />
        </>
    );
}

export default Home;