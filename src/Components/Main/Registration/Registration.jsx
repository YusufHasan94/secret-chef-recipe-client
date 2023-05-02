import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <Container className='d-flex flex-column align-items-center justify-content-center' style={{height: "700px"}}>
                <h1 className='text-center fs-2'>Registration</h1>
                <Form className='d-flex flex-column align-items-center w-100'>
                    <Form.Group className="my-1 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder='Your Name'/>
                    </Form.Group>
                    <Form.Group className="my-1 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder='Your Email Address'/>
                    </Form.Group>
                    <Form.Group className="my-1 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='Use Strong Password'/>
                    </Form.Group>
                    <Form.Group className="my-1 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type='file' placeholder='Your Name'/>
                    </Form.Group>
                    <Button className='w-25 my-2'>
                        Register
                    </Button>
                    <Form.Text className='fs-5 text-dark'>
                       Already have an account? please <Link to="/login" className='text-decoration-none'>Log In</Link>
                    </Form.Text>
                </Form>
            </Container> 
        </div>
    );
};

export default Registration;