import React from 'react';
import Joke from './Joke';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import {jokes_ten as jokes} from '../data/jokes_data';
import {
    JokesContainerDiv,
    JokesListDiv,
    JokesPunchlinetDiv,



} from '../styles/jokes_styles';



const Jokes = () => {

    const { url } = useRouteMatch();


    return (
        <JokesContainerDiv>
            <JokesListDiv>
                <h1> Jokes </h1>
                {jokes.map((joke, index) => {
                    return (
                        <p> 
                            <Link 
                                key = {joke.id}
                                to = {`${url}/${joke.id}`}
                            
                            > {joke.setup}</Link>
                        </p>
                    )
                
                
                })}
            
            
            </JokesListDiv>


            
            <Route path = {`${url}/:jokeid`}>
                <JokesPunchlinetDiv>
                    <Joke jokes = {jokes}/>
                
                
                </JokesPunchlinetDiv>
            </Route>
            <Route exact path = {url}>
                <p> Ready for the punchline ? </p>
            </Route>

        </JokesContainerDiv>
    )
}

export default Jokes;