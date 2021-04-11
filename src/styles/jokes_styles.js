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

    width: 100%;

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

    font-size: 18px;
    padding: 20px;
    margin: 10%;

`;

export const JokeSetupLink = styled(Link)`
    // background: #DCDCDC;
    border: 1px solid black;
    
    
    color: darkslategrey;
    text-decoration: none;
    padding: 5px;
    margin: 10px;

    &:hover {
        color: black;  
    
    }
`;