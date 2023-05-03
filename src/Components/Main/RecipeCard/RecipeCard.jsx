import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegBookmark } from "react-icons/fa";

const RecipeCard = ({recipe}) => {
    const {id, name, ingredients, method, rating} = recipe;
    return (
        <Card style={{ width: '22rem'}} className=''>
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
                <p className='m-0'>Rating: {rating}</p>
                <button className='border-0 bg-transparent'><FaRegBookmark></FaRegBookmark></button>
            </Card.Footer>
        </Card>
    );
};

export default RecipeCard;