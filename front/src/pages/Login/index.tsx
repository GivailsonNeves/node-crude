import React, { Children } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

import './styles.css';

function Login() {
    return (
        <div className="telaLogin">
            <Card>
                <Card.Title>
                    Form login
            </Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;

export function Login2(props: any) {

    const { fontSize, text, children } = props;

    return <>
        <p style={{ fontSize: `${fontSize}px` }}>{text} {fontSize}</p>
        <div>
            {children}
        </div>
    </>;
}

export function Login3List(props: any) {

    const { listNames } = props;

    return <div>
        {
            (!!listNames && !!listNames.length) ?
            <ul>
                {
                    listNames.map((iten : string, indice: number) => <li key={indice}>{iten}</li>)
                }
            </ul>
            : <p>nao tem nada</p>
        }
    </div>;
}