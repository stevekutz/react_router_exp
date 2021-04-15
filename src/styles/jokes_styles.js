import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const JokesContainerDiv = styled.div`
    border: 4px solid purple;


    display: flex;
    
    width: 90%;
    margin: 0 auto;
`;

export const JokesListDiv = styled.div`
    border: 1px solid green;
    
    display: flex;
    flex-direction: column;

    // height: 4px;
    width: 50%;

`;

export const JokesH1 = styled.h1`
    border: 1px solid red;

    text-align: center;
`;

export const JokeDiv = styled.div`
    background: lightyellow;
    
    border: 2px solid blue;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    // display: flex;
    // flex-direction: column;
    width: 50%;
    height: 5%;
    font-size: 18px;
    padding: 2px;
    margin: 1%;

`;

export const JokeSetupLink = styled(Link)`
    // background: #DCDCDC;
    border: 1px solid black;
    
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    color: darkslategrey;
    background: #FAF0E6;
    border-radius: 5px;
    box-shadow: 10px 5px 5px #4682B4;
    text-decoration: none;
    padding: 5px;
    margin: 10px;

    &:hover {
        color: black;  
    
    }
`;

export const JokeSetupP = styled.p`
    background: #B0C4DE;

    display: flex;
    justify-content: center;
    margin: 2px;
`;

export const JokeCard = styled.div`
    border: 1px solid orange;

    display: flex;
    flex-direction: column;

    // transition: 1.3s ease-in-out;
    // right: ${ ({ showPunchline }) => (showPunchline ? '0' : '-1000px')};

    transition: height 2s;
    
//     &:hover {
//         height: 180px;
//         // top: ${ ({ showPunchline }) => (showPunchline ? '0' : '-1000px')};
// `;

export const JokeCardSetupP = styled(JokeSetupP)`
    color: darkblue;
    font-weight: bold;
    margin: 5px auto;
    width: 80%;
    padding: 10px;

    border-radius: 10px;
    // &:hover ~ JokeCardPunchLine {

    //     transition: 1.3s ease-in-out;
    //     // opacity: 1;
    //     // opacity: ${ ({ showPunchline }) => (showPunchline ? '0' : '-1000px')};
    //     opacity: ${ ({ showPunchline }) => (showPunchline ? '1' : '0')};
    
    // }

`;

export const JokeCardPunchlineP = styled(JokeCardSetupP)`


    background: lightblue;
    color: blue;
    width: 70%;

    // opacity: 0;
    // opacity: ${ ({ showPunchline }) => (showPunchline ? '1' : '0')};
    
 


`;