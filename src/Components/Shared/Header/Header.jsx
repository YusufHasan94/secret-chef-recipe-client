import React from 'react';
import NavLink from '../NavBar/NavLink/NavLink';
import { HiUserCircle } from "react-icons/hi";
import chef from "../../../assets/chef.png";
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../NavBar/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    const routes = [
        {
            id: 1, name: 'Home', path: '/'
        },
        {
            id: 2, name: 'Blogs', path: '/blogs'
        }
    ]
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Image src={chef} roundedCircle style={{width: "50px"}} />
                <Navbar.Brand className='fs-3'>Secret Chef Recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className='flex-grow-1 ms-md-5 gap-md-4 fs-5'>
                    {routes.map(route=> <NavLink key={route.id} route={route}></NavLink>)}
                </Nav>
                <Nav className='d-flex align-items-center fs-5'>
                    <HiUserCircle className='fs-3 mx-md-2'/>
                    <ActiveLink to="/login">Log In</ActiveLink>
                    <ActiveLink to="/">Log Out</ActiveLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;