import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Programming-Language</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div class='header'>
                            <div >
                                <Nav className="navbar">
                                    <Link to='/'>Home</Link>
                                    <Link to='/categories'>Courses</Link>
                                    <Link to='/faq'>FAQ</Link>
                                    <Link to='/blog'>Blog</Link>


                                </Nav>
                            </div>
                            <div>
                                <Nav>
                                    <Link to='/register'>Register</Link>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/faq'>{user?.displayName}</Link>
                                </Nav>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;