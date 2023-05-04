import React, { useContext } from 'react';
import { HiUserCircle } from "react-icons/hi";
import chef from "../../../assets/chef.png";
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import "./Header.css";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = event =>{
        logOut()
        .then(res => console.log("successfully login"))
        .catch(error => console.log(error))
    }
    return (
        <Navbar bg="light" expand="lg" className=''>
            <Container>
                <Image src={chef} roundedCircle style={{width: "50px"}} />
                <Navbar.Brand className='fs-3'>Secret Chef Recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className='flex-grow-1 ms-md-5 gap-md-4 fs-5 align-items-center'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/blogs">Blog</ActiveLink>
                </Nav>
                <Nav className='gap-2 align-items-center fs-5'>
                    {user ? <>
                            {
                                user.photoURL?
                                <img 
                                className='user'
                                src={user.photoURL}
                                style={{width:"40px", height: "40px", borderRadius: "50%" }}
                                data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName?user.displayName : ''}
                                />
                                :<HiUserCircle 
                                className='fs-2 user'
                                data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName?user.displayName : ''}
                                ></HiUserCircle>
                            }
                            <Button onClick={handleLogout} className='bg-transparent text-dark'>
                                <Link to="/login" className='text-decoration-none text-dark'>Log Out</Link>
                            </Button>
                        </>
                        :
                        <Button className='bg-transparent text-dark'>
                            <Link to="/login" className='text-decoration-none text-dark'>Log In</Link>
                        </Button>
                    }
                    <Tooltip id="my-tooltip" style={{color: "white"}} />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;