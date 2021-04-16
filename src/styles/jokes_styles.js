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
    justify-content: center;
    // width: 50%;
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

    `;

export const PunchlineDiv = styled.div`
    
    // opacity: 1;
    // visibility: hidden;
    transition: opacity 5s, visibility .2s ease-in;
    // position: relative;
    // border: 1px solid deeppink;

    display: flex;
    justify-content: center;
    flex-direction: column;
    
    border-radius: 10px;
    background: lightblue;
    color: blue;
    width: 70%;
    margin: 10px auto;
    text-align: center;
    

    // background: ${props => props.showPunchline ? '#525555' : '#C2C8C7'};
    opacity: ${props => props.showPunchline ? 1 : 0};
    visibility: ${props => props.showPunchline ? 'visible' : 'hidden'};
    padding: ${props => props.showPunchline ? '15px' : '0'};

`;
export const JokeCardSetupP = styled(JokeSetupP)`
    color: darkblue;
    font-weight: bold;
    margin: 5px auto;
    width: 80%;
    padding: 10px;

    border-radius: 10px;
    text-align: center;


    // &:hover{
    //     opacity: 1;
    //     visibility: visible;
    
    // }
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
    // padding: 0;

    padding: ${props => props.showPunchline ? '15px' : '0'};
    background: ${props => props.showPunchline ? '#525555' : '#C2C8C7'};
 


`;


export const ImageContainer = styled.div`
    // border: 1px solid purple;
    transition: visibility 5sec;
    // transition: opacity 5s, visibility 2s ease-in;

    transition-delay: 4s;
    display: flex;
    // width: 500px;
    height: 500px;
    justify-content: center;
    // align-content: center;
    // flex-direction: column;
    margin: 0 auto;
    border-radius: 10px;

    visibility: ${props => props.showPunchline ? 'visible' : 'hidden'};
    opacity: ${props => props.showPunchline ? 1 : 0};
    // padding: ${props => props.showPunchline ? '15px' : '0'};
    height: ${props => props.showPunchline ? '150px' : '0'};
    margin: ${props => props.showPunchline ? '10px auto' : '0 auto'};
`;

export const ImageContent = styled.img`
    border: 1px solid black;
    height: 100%;
    // padding: 10px;
    border-radius: 10px;
    // transition: visibility 10sec;
    
    // transition-delay: 4s;
    // transition: opacity 10sec, visibility 10sec;
    visibility: ${props => props.showPunchline ? 'visible' : 'hidden'};
    opacity: ${props => props.showPunchline ? 1 : 0};
    // padding: ${props => props.showPunchline ? '15px' : '0'};

`;