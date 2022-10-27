// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaUser } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar bg="">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src="java.jpeg"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt=""
                                />
                            </Navbar.Brand>
                        </Container>
                    </Navbar><br />
                    <Navbar.Brand href="#home">Programming-Language</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='header'>
                            <div >
                                <Nav className="navbar">
                                    <Link to='/'>Home</Link>
                                    <Link to='/category/01'>Courses</Link>
                                    <Link to='/faq'>FAQ</Link>
                                    <Link to='/blog'>Blog</Link>


                                </Nav>
                            </div>
                            <div>
                                <Nav>
                                    {/* <Link to='/register'>Register</Link>
                                    <Link to='/login'>Login</Link> */}
                                    <Link to=''>
                                        {
                                            user?.uid ?
                                                <>
                                                    <span>{user?.displayName}</span>
                                                    <Button variant="light" onClick={handleLogOut}>LogOut</Button>
                                                </>
                                                : <>
                                                    <Link to='/login'>Login</Link>
                                                    <Link to='/register'>Register</Link></>
                                        }



                                    </Link>
                                    <Link >
                                        {user?.photoURL ?
                                            <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                                            : <FaUser></FaUser>
                                        }
                                    </Link>
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