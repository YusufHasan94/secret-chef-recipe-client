import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const RecipeCard = ({recipe}) => {
    const {id, name, ingredients, method, rating} = recipe;
    let [status, setStatus] = useState(false);
    const handleFavorite = event =>{
        toast("Recipe added to favorite list");
        setStatus(true);
        console.log(status); 
    }
    return (
        <Card style={{ width: '22rem'}} className=''>
            <ToastContainer />
            <Card.Header>
                <Card.Title>{name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <div>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients.map(i=> <li key={i}>{i}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>Cooking Methods:</h4>
                    <ol>
                        {method.map(i=> <li key={i}>{i}</li>)}
                    </ol>
                </div>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <Rating style={{ maxWidth: 100}} value={rating} readOnly />
                    <p className='m-0'>{rating}</p>
                </div>
                <button onClick={handleFavorite} disabled={status} className='border-0 bg-transparent'><FaRegHeart></FaRegHeart></button>
            </Card.Footer>
        </Card>
        
    );
};

export default RecipeCard;