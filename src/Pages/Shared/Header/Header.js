import logo from '../../../image/logos/Group 1329.png'
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
const Header = () => {
    const { user, handleSignOut } = useAuth()

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
                    {user.displayName ? <button onClick={handleSignOut} className="btn btn-primary">logout</button> : <Link to="/login"> <button className="btn btn-primary me-2">Login</button></Link>}
                    <Link to="/Register"> <button className="btn btn-success me-2">Register</button></Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;