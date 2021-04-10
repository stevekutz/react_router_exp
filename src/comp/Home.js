import React from 'react-router-dom';

import {
    NavContainer,
    NavItemLink,
    
} from '../styles/home_styles';


const Home = () => {
    return (
        <div>

        <NavContainer>
            <NavItemLink to='/'>Home</NavItemLink>
            <NavItemLink to='/about'>About</NavItemLink>
            <NavItemLink to='/products'>Products</NavItemLink>
            <NavItemLink to = '/jokes'>Jokes</NavItemLink>
            <NavItemLink to = '/tvshows'>TVshows</NavItemLink>
            <NavItemLink to='/protected'>Protected</NavItemLink>
        
        </NavContainer>


            Home Page
        </div>   
    )
}

export default Home;