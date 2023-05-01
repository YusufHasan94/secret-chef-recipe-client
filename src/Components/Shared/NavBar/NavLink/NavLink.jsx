import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavLink = ({route}) => {
    const {path, name} = route;
    return (
        <div>
            <p className='fs-5 m-0'><ActiveLink to={path}>{name}</ActiveLink></p>
        </div>
    );
};

export default NavLink;