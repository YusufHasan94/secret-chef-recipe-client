import React from 'react';
import Banner from '../../Banner/Banner';
import Chefs from '../../Chefs/Chefs';
import FamousFood from '../../FamousFood/FamousFood';
import Moments from '../../Moments/Moments';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <FamousFood></FamousFood>
            <Moments></Moments>
        </div>
    );
};

export default Main;