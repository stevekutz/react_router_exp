import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';

import {    
    NavContainer,
    NavItemLink,
} from '../styles/nav_styles';


const NavBar = () => {

    const history = useHistory();
    const [historyLog, setHistoryLog] = useState([])

    const logger = (e) => {

        let currentPath = e.target.attributes[1].value;

        console.log('ROUTE CHANGED', currentPath);
        // console.log('ROUTE CHANGED', e);
        setHistoryLog(orig => [...orig, historyLog.push(currentPath)]);

    }

    return (
        <div>
            <NavContainer  
        
            onClick = {(e) => logger(e)}
        >
            <NavItemLink to='/'>Home</NavItemLink>
            <NavItemLink to='/about'>About</NavItemLink>
            <NavItemLink to='/products'>Products</NavItemLink>
            <NavItemLink to = '/jokes'>Jokes</NavItemLink>
            <NavItemLink to = '/tvshows'>TVshows</NavItemLink>
            <NavItemLink to='/protected'>Protected</NavItemLink>
        
        </NavContainer>

        <button onClick = {() => history.push('/about')}> goto About page</button>
        
        <div> {historyLog.toString()}</div>    
        
        </div>

    
    )
}

export default NavBar;