import React from 'react';
import img from "../../../assets/chef.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <Container>
                <div className="row py-3">
                    <div className="col-md-5 col-12"> 
                        <img src={img} alt="" style={{width: "50px"}} />
                        <p>Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4>Important Links</h4>
                        <ul className='list-unstyled ms-4'>
                            <li>Home</li>
                            <li>Blogs</li>
                            <li>Sign In</li>
                            <li>Sign Up</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-12">
                        <h4>Social Media</h4>
                        <ul className='list-unstyled ms-4'>
                            <li><FaFacebookF className='fs-4'/> Facebook</li>
                            <li><FaInstagram className='fs-4'/> Instagram</li>
                            <li><FaTwitter className='fs-4'/> Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-1">
                    <p>Copyright <FaRegCopyright/> 2023. All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;