import React, {useState, useRef, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import './rtc.css';
// import './exp.css';

import { useParams } from 'react-router-dom';

import {
    JokeCard,
    JokeCardSetupP,
    JokeCardPunchlineP,
    PunchlineDiv,


} from '../styles/jokes_styles';


const Joke = ({jokes, yPosition, showPunchline, togglePunchline}) => {
    
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
                
                <div> hover on setup to see punchline </div>

                <JokeCardSetupP 
                    // onMouseEnter= {togglePunchline}
                    // onMouseLeave = {togglePunchline}    
                    // className = "setup"
                    onClick = {togglePunchline}
                > {joke.setup}</JokeCardSetupP>
                {/*
                <p>   </p>
                */}


 

                <PunchlineDiv 
                    showPunchline = {showPunchline}
                    // className = "punchline"
                >
                   {showPunchline ? joke.punchline : ''}
                </PunchlineDiv> 




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

            // <div className = "punchline">
            //     {joke.punchline}
            
            // </div>


            //    { showPunchline && 
               
            //         <JokeCardPunchlineP
            //             showPunchline = {showPunchline}
            //         > PunchLine {joke.punchline} </JokeCardPunchlineP>
                
               
            //    } 



            //    <CSSTransition
            //         in = {showPunchline}
            //         out = {showPunchline}
            //         timeout = {2000}
            //         // classNames = “my-node” 
            //         // onEnter={() => togglePunchline}
            //         // onExited={togglePunchline}
            //         mountOnEnter 
            //         unmountOnExit
            //    >
            //         <JokeCardPunchlineP
            //             showPunchline = {showPunchline}
            //             > PunchLine {joke.punchline} 
            //         </JokeCardPunchlineP>
            //    </CSSTransition>             