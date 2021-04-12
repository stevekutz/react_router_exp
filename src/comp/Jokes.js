import React, {useState, useRef, useEffect} from 'react';
import Joke from './Joke';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import {jokes_ten as jokes} from '../data/jokes_data';
import {
    JokesContainerDiv,
    JokesListDiv,
    JokesH1,
    JokesPunchlinetDiv,
    JokeSetupLink,
    JokeSetupP,


} from '../styles/jokes_styles';



const Jokes = () => {

    const { url } = useRouteMatch();
    const [yPosition, setYPosition] = useState(0);

    // const currentJokePositionRef = useRef();

    const mousePosition = (e) => {
        console.log(" Y position ", e)
        // setYPosition((e.pageY - 50)); // sees mousePosition
        setYPosition(e.clientY - 50);
        console.log('Y position: ', yPosition);
        // console.log("ref says >>> ", currentJokePositionRef);
    }


    // useEffect( () => {
    //     currentJokePositionRef.current = yPosition; 
    
    // }, [yPosition]);

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
                <JokesPunchlinetDiv 
                    // style = {{ 'marginTop': `${yPosition}px` }}
                    // ref = {currentJokePositionRef}
                >
                    <Joke jokes = {jokes} yPosition = {yPosition}/>
                
                
                </JokesPunchlinetDiv>
            </Route>
            <Route exact path = {url}>
                <JokesH1> Ready for the punchline ? </JokesH1>
            </Route>

        </JokesContainerDiv>
    )
}

export default Jokes;