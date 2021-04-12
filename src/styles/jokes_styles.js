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

    width: 50%;

`;

export const JokesH1 = styled.h1`
    border: 1px solid red;

    text-align: center;
`;

export const JokesPunchlinetDiv = styled.div`
    background: lightyellow;
    
    border: 2px solid blue;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 30%;
    // height: 10%;
    font-size: 18px;
    padding: 20px;
    margin: 10%;

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
    // background: #B0C4DE;

    display: flex;
    justify-content: center;

`;