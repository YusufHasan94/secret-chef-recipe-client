import React from 'react';
import FF1 from "../../../assets/FamousFood/FamousFood1.jpg";
import FF2 from "../../../assets/FamousFood/FamousFood2.jpg";
import FF3 from "../../../assets/FamousFood/FamousFood3.jpg";
import FF4 from "../../../assets/FamousFood/FamousFood4.jpg";
import FF5 from "../../../assets/FamousFood/FamousFood5.jpg";
import Marquee from "react-fast-marquee";
import LazyLoad from 'react-lazy-load';

const FamousFood = () => {
    return (
        <div className='my-4'>
            <h1 className='text-center'>Famous Foods</h1>
            <div className='my-4'>
                <Marquee className='overflow-hidden'>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <LazyLoad>
                            <img src={FF1} className='w-100' alt="" />
                        </LazyLoad>
                    </div>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <LazyLoad>
                            <img src={FF2} className='w-100' alt="" />
                        </LazyLoad>
                    </div>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <LazyLoad>
                            <img src={FF3} className='w-100' alt="" />
                        </LazyLoad>
                    </div>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <LazyLoad>
                            <img src={FF4} className='w-100' alt="" />
                        </LazyLoad>
                    </div>
                     <div className='' style={{width: "500px", height: "250px"}}>
                        <LazyLoad>
                            <img src={FF5} className='w-100' alt="" />
                        </LazyLoad>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default FamousFood;