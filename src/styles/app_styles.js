import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavContainer = styled.div`
    border: 3px solid green;
    

    display: flex;
    justify-content: start;

`;

export const NavItemLink = styled(Link)`
    border: 1px solid pink;

    padding: 4px;
    text-decoration: none;
    margin: 2px;


`;