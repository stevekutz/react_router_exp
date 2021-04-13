import React, {useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import {
    JokeCard,
    JokeCardSetupP,
    JokeCardPunchlineP,

} from '../styles/jokes_styles';


const Joke = ({jokes, yPosition}) => {
    
    const {jokeid} = useParams();
    console.log('jokeid >>>>>>>>>> ', jokeid);

    const joke = jokes.find( (targetjoke) => targetjoke.id === Number(jokeid));
    let jokeInfo;
    
    // const lastJokePositionRef = useRef();
    // // const[yOffset, SetYOffset] = useState(yPosition)
    // const[yOffset, SetYOffset] = useState(lastJokePositionRef.current)

    // console.log('yOffset  >>>>> ', yOffset);

    // useEffect( () => {
    //     lastJokePositionRef.current = yPosition; 
    //     SetYOffset(lastJokePositionRef.current);
    // }, [yPosition]);

    if (joke) {
        jokeInfo = (
            <JokeCard 
                // style = {{ 'marginTop': `${yOffset}px`, 'background': 'pink' }}
                // ref = {lastJokePositionRef}
                >

                <JokeCardSetupP> {joke.setup}</JokeCardSetupP>
                {/*
                <p>   </p>
                */}
                <JokeCardPunchlineP> PunchLine {joke.punchline} </JokeCardPunchlineP>
            
            </JokeCard>
        
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
