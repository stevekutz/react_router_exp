import React, {useState, useRef, useEffect, useCallback} from 'react';
// import NavBar from '../comp/Navigation';
// import Joke from './Joke';
import {Link, Switch, Route, useRouteMatch, useParams} from 'react-router-dom';
import {jokes_ten as jokes} from '../data/jokes_data';
import {
    JokesContainerDiv,
    JokesListDiv,
    JokesH1,
    JokeDiv,
    JokeSetupLink,
    JokeSetupP,


} from '../styles/jokes_styles';


const Joke = ({jokes, yPosition, showPunchline, togglePunchline}) => {
    
    const {jokeid} = useParams();
    console.log('jokeid >>>>>>>>>> ', jokeid);

    return (
        <div> SHOW ME </div>
    )

}    


// import {
//     NavContainer,
//     NavItemLink,
    
// } from '../styles/app_styles';

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

        // console.log(" Y position ", e)
        // setYPosition((e.pageY - 50)); // sees mousePosition
        setYPosition(e.clientY - 50);
        // console.log('Y position: ', yPosition);
        // console.log("ref says >>> ", currentJokePositionRef);


    }


    useEffect( () => {
        if (yPosition !== 0) {
            currentJokePositionRef.current = yPosition; 
        }
        // console.log("ref >> ", currentJokePositionRef);
    }, [yPosition]);

    // console.log("ref >> ", currentJokePositionRef);

    return (
        <JokesContainerDiv>
            <JokesListDiv>




                <JokesH1> Jokes </JokesH1>
                {jokes.map((joke, index) => {
                    return (
                        <JokeSetupP key = {joke.id}> 
                            <JokeSetupLink 
                                // key = {joke.id}
                                to = {`${url}/${joke.id}`}
                                onClick = {mousePosition}
                            > {joke.setup}</JokeSetupLink>
                        </JokeSetupP>
                    )
                
                
                })}
            
            
            </JokesListDiv>


    <Switch>            
        <Route exact path = {url}>
            <JokesH1> Ready for the punchline ? </JokesH1>
            
        </Route>
        <Route path = {`${url}/:jokeid`}>
                
                    <p> ONLY renders with matching /jokes/:id path, not seen in any other path </p>
                
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
    </Switch>            
            
        </JokesContainerDiv>
    )
}

export default Jokes;