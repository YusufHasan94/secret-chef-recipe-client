import React, { useEffect, useState } from 'react';
import "./Chefs.css";
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error));
    },[]);
    
    return (
        <div className='my-4'>
            <h1 className='text-center'>Our Chefs</h1>
            <div className='chefsContainer my-5 mx-5'>
                {
                    chefs.map(chef=> <Chef key={chef.id} chef={chef}></Chef> )
                }
            </div>
        </div>
    );
};

export default Chefs;