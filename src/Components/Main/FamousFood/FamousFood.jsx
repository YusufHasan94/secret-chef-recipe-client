import React, { useContext, useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import LazyLoad from 'react-lazy-load';
import { AuthContext } from '../../../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const FamousFood = () => {
    const [foods, setFoods] = useState();
    useEffect(()=>{
        fetch("https://secret-chef-recipe-server-yusufhasan94.vercel.app/foods")
        .then(res=>res.json())
        .then(data=>setFoods(data))
        .catch(error=>console.log(error.message));
    },[])
    return (
        <div className='my-4'>
            <h1 className='text-center'>Famous Foods</h1>
            <div className='my-4'>{
                foods?
                <Marquee className='overflow-hidden'>
                    {   
                        foods.map(food=> 
                            <div className='' style={{width: "500px", height: "250px"}} key={food.id}>
                                <LazyLoad>
                                    <img src={food.image} className='w-100' alt="" />
                                </LazyLoad>
                            </div>
                        )
                    }
                </Marquee>
                :<div className='d-flex justify-content-center'>
                    <Spinner animation="border" variant="secondary" />
                </div>
                }
            </div>
        </div>
    );
};

export default FamousFood;