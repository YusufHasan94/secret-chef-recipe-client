import React from 'react';
import FF1 from "../../../assets/FamousFood/FamousFood1.jpg";
import FF2 from "../../../assets/FamousFood/FamousFood2.jpg";
import FF3 from "../../../assets/FamousFood/FamousFood3.jpg";
import FF4 from "../../../assets/FamousFood/FamousFood4.jpg";
import Marquee from "react-fast-marquee";

const FamousFood = () => {
    return (
        <div className='my-4'>
            <h1 className='text-center'>Famous Foods</h1>
            <div className='my-4'>
                <Marquee>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <img src={FF1} className='w-100' alt="" />
                    </div>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <img src={FF2} className='w-100' alt="" />
                    </div>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <img src={FF3} className='w-100' alt="" />
                    </div>
                    <div className='' style={{width: "500px", height: "250px"}}>
                        <img src={FF4} className='w-100' alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default FamousFood;