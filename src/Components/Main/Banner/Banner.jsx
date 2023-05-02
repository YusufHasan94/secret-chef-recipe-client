import React from 'react';
import Banner1 from "../../../assets/FoodBanner3.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <img className="d-block w-100" src={Banner1} alt="" />
            <div className='bannerContent'>
                <h1 className=''>Traditional <span className='text-warning'>Food</span></h1>
                <p className=''>Bangladesh is famous for its delicious food and desserts. The speciality of Bangladesh food is they are spicy. Rice is the main food in Bangladesh. Rice, fish curry, and lentil is the most common traditional Bangladeshi food for the general people.</p>
            </div>
        </div>
    );
};

export default Banner;