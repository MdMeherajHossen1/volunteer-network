import logo from '../../../image/logos/Group 1329.png'
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Header = () => {
    console.log('header is connected')
    return (
        <div>
            <Navbar bg="light" variant="light" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} style={{ width: '138px', height: "36px" }} alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto pe-3  ">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                    </Nav>
                    <Button variant="primary me-2">Register</Button>{' '}
                    <Button variant="dark">Admin</Button>{' '}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;