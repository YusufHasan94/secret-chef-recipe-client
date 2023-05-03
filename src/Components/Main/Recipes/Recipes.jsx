import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const recipes = useLoaderData();
    const {id, likes, name, number_of_recipes, picture, years_of_experience} = recipes;

    return (
        <div className='my-4'>
            <h1 className='text-center'>Chef's Recipes</h1>
            <Container className='my-5'>
                <div className='d-flex flex-column-reverse flex-md-row gap-5 bg-light p-4'>
                    <div className='w-100 my-auto'>
                        <h1>{name}</h1>
                        <p className='my-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis beatae deserunt molestiae dolore cum quia reprehenderit est eum enim dolorum? Modi cumque, dolorum non, minus odio quidem doloribus eos, doloremque deserunt nihil veritatis laboriosam vero necessitatibus esse voluptatum tempore totam?</p>
                        <p className='my-1 fs-5'><span className='fw-semibold'>Likes: </span>{likes}</p>
                        <p className='my-1 fs-5'><span className='fw-semibold'>number of recipes: </span>{number_of_recipes}</p>
                        <p className='my-1 fs-5'><span className='fw-semibold'>years of experience: </span>{years_of_experience}</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <img src={picture} className='w-100' alt="" />
                    </div>
                </div>
                <div>

                </div>
            </Container>
        </div>
    );
};

export default Recipes;