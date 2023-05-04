import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
    const recipes = useLoaderData();
    const {id, likes, name, number_of_recipes, picture, years_of_experience, description} = recipes;
    const allRecipes = recipes.recipes;
    return (
        <div className='my-4'>
            <Container className='my-5'>
                <div className='d-flex flex-column-reverse flex-md-row gap-5 bg-light p-4'>
                    <div className='w-100 my-auto'>
                        <h1>{name}</h1>
                        <p className='my-1'>{description}</p>
                        <p className='my-1 fs-5'><span className='fw-semibold'>Likes: </span>{likes}</p>
                        <p className='my-1 fs-5'><span className='fw-semibold'>number of recipes: </span>{number_of_recipes}</p>
                        <p className='my-1 fs-5'><span className='fw-semibold'>years of experience: </span>{years_of_experience}</p>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <LazyLoad>
                            <img src={picture} className='w-100' alt="" />
                        </LazyLoad>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className='text-center mb-5'>Recipes</h1>
                    <div className='d-flex justify-content-center'>
                        <CardGroup>
                            {
                                allRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
                            }
                        </CardGroup>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Recipes;