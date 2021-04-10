import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserApi } from '../../services/user-api';

function Header() {

    const history = useHistory();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        function refreshUserName() {
            const _userName : string | null = window.localStorage.getItem('user-name');
            _userName && setUserName(_userName);
        }
        refreshUserName();
    },[setUserName]);

    const handleLogout = () => {
        UserApi.logOut();
        window.location.assign('/login')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <NavDropdown title={userName} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;