import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => { 
    const {createUser, updateUserInfo, logOut} = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    
    logOut();
    const handleRegistration = event =>{
        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result =>{
                console.log(result.user);
                setSuccess("Successfully registered");
                updateUserInfo(name, photo);
            })
            .catch(error =>{
                setError(error.message);
            })
            
        form.reset('');
    }
    return (
        <div>
            <Container className='d-flex flex-column align-items-center justify-content-center' style={{height: "700px"}}>
                <h1 className='text-center fs-2'>Sign Up Now</h1>
                <Form onSubmit={handleRegistration} className='d-flex flex-column align-items-center w-100'>
                    <Form.Group className="my-1 w-75" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder='Your Name' required/>
                    </Form.Group>
                    <Form.Group className="my-1 w-75" controlId="photo">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type='text' name='photo' placeholder='Your Photo URL' required/>
                    </Form.Group>
                    <Form.Group className="my-1 w-75" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" name='email' placeholder='Your Email Address' required/>
                    </Form.Group>
                    <Form.Group className="my-1 w-75" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder='Use Strong Password' required/>
                    </Form.Group>
                    <Button className='w-25 my-2' type='submit'>
                        Register
                    </Button>
                    <Form.Text className='fs-5 text-dark'>
                       Already have an account? please <Link to="/login" className='text-decoration-none'>Log In</Link>
                    </Form.Text>
                </Form>
                <span className='text-warning'>{error}</span>
                <span className='text-success'>{success}</span>
            </Container> 
        </div>
    );
};

export default Registration;