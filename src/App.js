// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Route, Link, Switch, useLocation} from 'react-router-dom';
import About from './comp/About';
import NavBar from './comp/Navigation';
import Home from './comp/Home';
import Products from './comp/Products';
import Jokes from './comp/Jokes';
import TVShows from './comp/TVShows';
import Fruits from './comp/Fruits';
import Protected from './comp/Protected';

import {
    NavContainer,
    NavItemLink,
    
} from './styles/app_styles';



function App() {

    // const loc = useLocation();

    return (
        <BrowserRouter>
            <NavBar />


            <div>
                {/* Include Link comp here to show navmenu on every page */}

                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route path='/about' component = {About}/>
                    <Route path='/products'><Products /></Route>
                    <Route path='/jokes'><Jokes /></Route>
                    <Route path='/tvshows'><TVShows /></Route>
                    <Route path='/protected' ><Protected /></Route>
                    <Route path='/fruits'> <Fruits />  </Route>
{/*                    <Route path='/jokes/:id'>
                        <p> ONLY renders with matching /jokes/:id path, not seen in any other path </p>
                    
                    </Route>
*/}
                </Switch>


            { /* Route components are rendered if the path prop matches the current URL */}
            

            </div>
        
        
        </BrowserRouter>
    );
}

export default App;

        // <NavContainer>
        //     <NavItemLink to='/'>Home</NavItemLink>
        //     <NavItemLink to='/about'>About</NavItemLink>
        //     <NavItemLink to='/products'>Products</NavItemLink>
        //     <NavItemLink to = '/jokes'>Jokes</NavItemLink>
        //     <NavItemLink to = '/tvshows'>TVshows</NavItemLink>
        //     <NavItemLink to='/protected'>Protected</NavItemLink>
        
        // </NavContainer>

      