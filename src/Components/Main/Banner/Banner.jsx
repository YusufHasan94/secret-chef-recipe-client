import React from 'react';
import Banner1 from "../../../assets/FoodBanner3.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='bannerContainer mt-0 mt-md-5'>
            <img className="d-block w-100" src={Banner1} alt="" />
            <div className='bannerContent'>
                <h1 className=''>Italian <span className='text-warning'>Cuisine</span></h1>
                <p className=''>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula and later spread around the world together with waves of Italian diaspora. Some of these foods were imported from other cultures.</p>
            </div>
        </div>
    );
};

export default Banner;