import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './Signup/signupform';
import LoginForm from './Login/loginform';

import Auth from '../utils/Auth';

const AppNavBar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <NavBar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    Hotel Search
                </Navbar.Brand>
                <Navbar.toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar'>
                    <Nav className='ml-auto'>
                        <Nav.Link as={Link} to='/'>
                            Search for Hotels
                        </Nav.Link>
                        {Auth.logegdIn() ? (
                            <>
                                <Nav.Link as={Link} to='/saved'>
                                    See your Hotels
                                </Nav.Link>
                                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavBar>
        <Modal
            size='lg'
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby='signup-modal'>
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
};

export default AppNavBar;