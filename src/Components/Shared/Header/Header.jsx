import React from 'react';
import NavLink from '../NavBar/NavLink/NavLink';
import { HiUserCircle } from "react-icons/hi";
import { Container, Nav, Navbar } from 'react-bootstrap';

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
                <Navbar.Brand>Secret-chef-recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className='flex-grow-1 ms-md-5 gap-md-4'>
                    {routes.map(route=> <NavLink key={route.id} route={route}></NavLink>)}
                </Nav>
                <Nav>
                    <Nav.Link href="">Login</Nav.Link>
                    <Nav.Link href="">LogOut</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;