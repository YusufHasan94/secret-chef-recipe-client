import React from 'react';
import "./Chef.css";
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {id, name, picture, years_of_experience, number_of_recipes, likes} = chef;
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={picture} style={{height: "18rem"}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='m-0'><span className='fw-semibold'>Year of experience: </span>{years_of_experience} years</Card.Text>
                    <Card.Text className='m-0'><span className='fw-semibold'>Numbers of recipes: </span>{number_of_recipes}</Card.Text>
                    <Card.Text className='mb-2'><span className='fw-semibold'>Likes: </span>{likes}</Card.Text>
                    <Button variant="warning fw-semibold"><Link to={`/chef-recipes/${id}`} className='text-decoration-none text-dark'>View Recipes</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;