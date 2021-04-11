import React from 'react';
import {jokes_ten as jokes} from '../data/jokes_data';

const Jokes = () => {
    return (
        <div>
            <h1> Jokes </h1>
            {jokes.map((joke, index) => {
                return (
                    <p key = {jokes.id}> {joke.setup}</p>
                )
            
            
            })}
            
        </div>
    )
}

export default Jokes;