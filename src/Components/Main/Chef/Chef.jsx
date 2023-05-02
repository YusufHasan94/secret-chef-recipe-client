import React from 'react';
import "./Chef.css";
import { Button, Card } from 'react-bootstrap';

const Chef = ({chef}) => {
    const {name, picture, years_of_experience, number_of_recipes, likes} = chef;
    //console.log(Chef)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='m-0'><span className='fw-semibold'>Year of experience: </span>{years_of_experience} years</Card.Text>
                    <Card.Text className='m-0'><span className='fw-semibold'>Numbers of recipes: </span>{number_of_recipes}</Card.Text>
                    <Card.Text className='mb-2'><span className='fw-semibold'>Likes: </span>{likes}</Card.Text>
                    <Button variant="primary">View Recipes</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;