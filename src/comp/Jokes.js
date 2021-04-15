import React, {useState, useRef, useEffect, useCallback} from 'react';
import Joke from './Joke';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import {jokes_ten as jokes} from '../data/jokes_data';
import {
    JokesContainerDiv,
    JokesListDiv,
    JokesH1,
    JokeDiv,
    JokeSetupLink,
    JokeSetupP,


} from '../styles/jokes_styles';



const Jokes = () => {

    const { url } = useRouteMatch();

    const currentJokePositionRef = useRef();

    const [yPosition, setYPosition] = useState(currentJokePositionRef | 0);
    
    // const refCB = useCallback(selected => {
    //     if(selected) {
    //         console.log("HERE ref CB ", selected.focus());
        
    //     }
    
    // }, []);

    const [showPunchline, setShowPunchline] = useState(false);

    const togglePunchline = () => {
        setShowPunchline(!showPunchline);
        
    }


    const mousePosition = (e) => {
        
        if (yPosition !== 0) {
            currentJokePositionRef.current = yPosition; 
        }

        console.log(" Y position ", e)
        // setYPosition((e.pageY - 50)); // sees mousePosition
        setYPosition(e.clientY - 50);
        console.log('Y position: ', yPosition);
        // console.log("ref says >>> ", currentJokePositionRef);


    }


    useEffect( () => {
        if (yPosition !== 0) {
            currentJokePositionRef.current = yPosition; 
        }
        // console.log("ref >> ", currentJokePositionRef);
    }, [yPosition]);

    console.log("ref >> ", currentJokePositionRef);

    return (
        <JokesContainerDiv>
            <JokesListDiv>
                <JokesH1> Jokes </JokesH1>
                {jokes.map((joke, index) => {
                    return (
                        <JokeSetupP key = {joke.id}> 
                            <JokeSetupLink 
                                key = {joke.id}
                                to = {`${url}/${joke.id}`}
                                onClick = {mousePosition}
                            > {joke.setup}</JokeSetupLink>
                        </JokeSetupP>
                    )
                
                
                })}
            
            
            </JokesListDiv>


            
            <Route exact path = {`${url}/:jokeid`}>
                <JokeDiv 
                    // style = {{ 'marginTop': `${yPosition + currentJokePositionRef.currrent}px` }}
                    // style = {{ 'marginTop': `${yPosition}px` }}
                    ref = {currentJokePositionRef}
                    // onClick = {refCB}
                >
                    <Joke 
                        jokes = {jokes} 
                        yPosition = {yPosition}
                        showPunchline = {showPunchline}
                        togglePunchline = {togglePunchline}    
                    />

                
                </JokeDiv>
            </Route>
            <Route exact path = {url}>
                <JokesH1> Ready for the punchline ? </JokesH1>
                
            </Route>

        </JokesContainerDiv>
    )
}

export default Jokes;