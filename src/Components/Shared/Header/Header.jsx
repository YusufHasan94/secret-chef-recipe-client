import React from 'react';
import { HiUserCircle } from "react-icons/hi";
import chef from "../../../assets/chef.png";
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Image src={chef} roundedCircle style={{width: "50px"}} />
                <Navbar.Brand className='fs-3'>Secret Chef Recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className='flex-grow-1 ms-md-5 gap-md-4 fs-5 '>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/blogs">Blog</ActiveLink>
                </Nav>
                <Nav className='gap-2 fs-5'>
                    <HiUserCircle className='fs-3'/>
                    <ActiveLink to="/login">Log In</ActiveLink>
                    <ActiveLink to="/">Log Out</ActiveLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;