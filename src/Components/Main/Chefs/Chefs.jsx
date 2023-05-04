import React, { useEffect, useState } from 'react';
import "./Chefs.css";
import Chef from '../Chef/Chef';
import { Spinner } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState();
    useEffect(()=>{
        fetch('https://secret-chef-recipe-server-yusufhasan94.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error));
    },[]);
    
    return (
        <div className='my-4'>
            <h1 className='text-center'>Our Chefs</h1>
                {
                    chefs?
                    <div className='chefsContainer my-5 mx-md-5'>
                        {
                            chefs.map(chef=> <Chef key={chef.id} chef={chef}></Chef> )
                        }
                    </div>
                    :<div className='d-flex justify-content-center'>
                        <Spinner animation="border" variant="secondary" />
                    </div>
                }
        </div>
    );
};

export default Chefs;