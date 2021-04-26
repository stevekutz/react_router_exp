import React, {useState, useRef, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import {    
    NavContainer,
    NavItemLink,
} from '../styles/nav_styles';


const NavBar = () => {

    const history = useHistory();
    const location = useLocation();
    const [historyLog, setHistoryLog] = useState([])

    const logger = () => {

        // let currentPath = e.target.attributes[1].value;

        // console.log('ROUTE CHANGED', currentPath);
        // console.log('ROUTE CHANGED', e);

        console.log(' LOCATION >> ', location);    
        setHistoryLog(orig => [...orig, history.location.pathname]);
        // setHistoryLog(orig => [...orig, location.pathname]);

    }

    const clearLogger = () => {
        setHistoryLog([])
    

    } 


    // console.log(" useHistory() obj >>>>>> ", history);
    // console.log(" useHistory() pathname >> ", history.location.pathname );
    // console.log("useLocation >>>>>>  ", location.pathname);

    // useEffect( () => {
    
    //     // console.log(" useHistory() obj >>>>>> ", history);
    //     // console.log(" useHistory() pathname >> ", history.location.pathname );
    //     // console.log("useLocation >>>>>>  ", location.pathname);
    //     setHistoryLog(orig => [...orig, location.pathname]);

    // }, []);  //  [] runs just single re-render after intial rendering
    // // including  [locaton.pathname] adds to array twice


    return (
        <div>
            <NavContainer  

            // onClick = {(e) => logger(e)}
            // onClick = {logger}
            onClick = {() => logger()}
        >
            <NavItemLink to='/'>Home</NavItemLink>
            <NavItemLink to='/about'>About</NavItemLink>
            <NavItemLink to='/products'>Products</NavItemLink>
            <NavItemLink to = '/jokes'>Jokes</NavItemLink>
            <NavItemLink to = '/tvshows'>TVshows</NavItemLink>
            <NavItemLink to = '/fruits'> Fruits</NavItemLink>
            <NavItemLink to = '/todos'> Todos </NavItemLink>
            <NavItemLink to='/protected'>Protected</NavItemLink>
        
        </NavContainer>

        <button onClick = {() => {
            history.push('/about');
            logger();
            }  }> goto About page</button>
        
        <button onClick = {clearLogger}> clear route log </button>
        <div> {historyLog.toString()}</div>    
        
        </div>

    
    )
}

export default NavBar;