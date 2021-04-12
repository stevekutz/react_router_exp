import React from 'react';
import { useParams } from 'react-router-dom';

const Joke = ({jokes, yPosition}) => {
    
    const {jokeid} = useParams();
    const joke = jokes.find( (targetjoke) => targetjoke.id === Number(jokeid));
    let jokeInfo;
    

    if (joke) {
        jokeInfo = (
            <div>
                <h2> Punchline </h2>
                <p> y: {yPosition.toString()}</p>
                <p> {joke.punchline} </p>
            
            </div>
        
        ) 
        
        } else {
            <div>
                <p> No JOKE </p>  
            </div>
    }


    return (
        <div>
            {jokeInfo}
        </div>
    
    )
}

export default Joke;
