import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import './styles.css';

function Register() {
    return (
        <div className="telaRegister">
            <Card>
                <Card.Body>
                    <Card.Title>
                        Cadastre-se
                    </Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome do usuário" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="E-mail do usuário" />
                            <Form.Text className="text-muted">
                                Não iremos compartilhar seu e-mail com outra pessoa.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Registrar
                        </Button>
                    </Form>
                    <hr />
                    <div className="text-center">
                        <Link to="/login">Voltar</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Register;