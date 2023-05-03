import React from 'react';
import { Button, Container, Form, FormText } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Container className='d-flex flex-column align-items-center justify-content-center' style={{height: "700px"}}>
                <h1 className='text-center fs-2'>Log In</h1>
                <Form className='d-flex flex-column align-items-center w-100'>
                    <Form.Group className="my-1 w-75" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="my-1 w-75" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Button className='w-25 my-2'>
                        Log In
                    </Button>
                    <Form.Text className=' fs-5 text-primary'>
                        <FaGoogle/> Login with Google
                    </Form.Text>
                    <Form.Text className='fs-5 text-dark'>
                        <FaGithub/> Login with Github
                    </Form.Text>
                    <Form.Text className='fs-5 text-dark'>
                        Don't have account? <Link to="/registration" className='text-decoration-none'>Register</Link>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;