import React from 'react';

import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';


const Fruit = () => {

    const {fruitType} = useParams();

    return (
        <div>
            Fruit is : {fruitType}
        </div>
    
    )

}


const Fruits = () => {

    const {url, path} = useRouteMatch();


    return (
        <div>
            <Link to = {`${url}/apple`}> Apple </Link>
            <Link to = {`${url}/banana`}> Banana </Link>
            <Link to = {`${url}/grape`} > Grape </Link>
            
        
            <Route path = {`${path}/:fruitType`}>
                <Fruit />
            </Route> 
        
        </div>
    )

}

export default Fruits;