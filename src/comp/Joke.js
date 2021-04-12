import React from 'react';
import { useParams } from 'react-router-dom';

const Joke = ({jokes, yPosition}) => {
    
    const {jokeid} = useParams();
    const joke = jokes.find( (targetjoke) => targetjoke.id === Number(jokeid));
    let jokeInfo;
    

    if (joke) {
        jokeInfo = (
            <div style = {{background: 'red'}}>
                {/*
                <h2> Punchline y: {yPosition.toString()}</h2>
                <p>   </p>
                */}
                <h4> {joke.punchline} </h4>
            
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
