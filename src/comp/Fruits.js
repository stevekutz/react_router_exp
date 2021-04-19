import React from 'react';

import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';

import apple from '../data/img/apple.jpg';
import banana from '../data/img/banana.jpg';
import grape from '../data/img/grape.jpg';

const Fruit = () => {

    const {fruitType} = useParams();

    let fruitName = fruitType.toString();
    console.log('fruitName ' ,fruitName);

    return (
        <div>
            <h1> Fruit is :{fruitType} </h1>
            <div>
                <img 
                    style = {{objectFit: 'contain', width: '100px', height: '100px'}}
                    src = {`../../${fruitType}.jpg`} // images inside public folder
                    // src = {`../data/img/${fruitType}.jpg`} // Does not work
                    // src = {"../data/img/apple.jpg"} // Does not work

                    alt = 'apple'
                />
            </div>    
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