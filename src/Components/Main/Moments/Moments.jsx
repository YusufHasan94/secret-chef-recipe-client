import React from 'react';
import img1 from "../../../assets/CookingScene/scene1.jpg";
import img2 from "../../../assets/CookingScene/scene2.jpg";
import img3 from "../../../assets/CookingScene/scene3.jpg";
import img4 from "../../../assets/CookingScene/scene4.jpg";
import img5 from "../../../assets/CookingScene/scene5.jpg";
import img6 from "../../../assets/CookingScene/scene6.jpg";
import { Container } from 'react-bootstrap';

const Moments = () => {
    return (
        <div className='my-4'>
            <h1 className='text-center'>Some Captured Moments</h1>
            <Container className='d-flex justify-content-center my-4'>
                <div className='w-100 d-flex justify-content-center' >
                    <div className='col'>
                        <img src={img2} className='w-100' alt="" />
                    </div>
                    <div className='d-flex flex-column col'>
                        <img src={img3} className='w-100' alt="" />
                        <img src={img4} className='w-100' alt="" />
                    </div>
                    <div className='col'>
                        <img src={img1} className='w-100' alt="" />
                    </div>
                    <div className='d-flex flex-column col'>
                        <img src={img5} className='w-100' alt="" />
                        <img src={img6} className='w-100' alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Moments;