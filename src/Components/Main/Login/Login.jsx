import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormText } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const handleLogin = event=>{
        setError('');
        setSuccess('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(res => {
            console.log(res);
            setSuccess("login successfully");
        }
        )
        .catch(error =>{ 
           setError(error.message);
        })
    }
    return (
        <div>
            <Container className='d-flex flex-column align-items-center justify-content-center' style={{height: "700px"}}>
                <h1 className='text-center fs-2'>Log In</h1>
                <Form onSubmit={handleLogin} className='d-flex flex-column align-items-center w-100'>
                    <Form.Group className="my-1 w-75" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required/>
                    </Form.Group>
                    <Form.Group className="my-1 w-75" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required/>
                    </Form.Group>
                    <Button className='w-25 my-2' type='submit'>
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
                <span className='text-danger'>{error}</span>
                <span className='text-success'>{success}</span>
            </Container>
        </div>
    );
};

export default Login;