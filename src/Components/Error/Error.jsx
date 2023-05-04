import React from 'react';
import image from "../../assets/404-error.png"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center '>
            <div className='w-50'>
                <img src={image} alt="" className='w-100' />
            </div>
            <Button className='bg-primary mt-5'><Link to="/" className='text-white text-decoration-none'>Go Back</Link></Button>
        </div>
    );
};

export default Error;