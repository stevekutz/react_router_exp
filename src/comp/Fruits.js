import React, {useState, useEffect} from 'react';

import {Link, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';

import apple from '../data/img/apple.jpg';
import banana from '../data/img/banana.jpg';
import grape from '../data/img/grape.jpg';

const Fruit = () => {

    // searches dynamic portion of      path = {`${path}/:fruitType`}> and return obj with key:value pair
    // the key will be fruitType and value is dynamically rendered path parameter
    // e.g. fruitType: 'apple'
    const {fruitType} = useParams();

    let params = useParams();

    console.log('params ', params);
    console.log(' params.fruitType',  params.fruitType);  // e.g. banana

    const [optionVal, setOptionVal] = useState('contain');

    const changeOption = (e) => {
        // console.log(' e says ++ ', Object.keys(e.target.value));
        setOptionVal(e.target.value);
    }

    useEffect ( () => {
        document.title = `ON ${fruitType} page`;
    
    }, [fruitType]);  // using []   DOES NOT update tab title

    return (
        <div>
            <h1> Fruit is :{fruitType} </h1>
            <select onChange = {(e) => changeOption(e)}>
                <option> fill </option>
                <option> contain </option>
                <option> cover </option>
                <option> none </option>
                <option> scale-down</option>
            </select>

            <div style = {{border: '1px solid blue', display: 'flex', margin: '10px'}}> 
                <div 
                    style = {{margin: '10px', border: '1px solid red', width: '10%',
                        display: 'flex', flexDirection: 'row'
                    }}
                    
                >
                    <img 
                        style = {{objectFit: `${optionVal}`, objectPosition: 'center center', width: '100px', height: '350px',
                            border: '1px solid green', margin: '10px auto'
                        }}
                        src = {`../../${fruitType}.jpg`} // images inside public folder
                        // src = {`../data/img/${fruitType}.jpg`} // Does not work
                        // src = {"../data/img/apple.jpg"} // Does not work

                        alt = 'apple'
                    />
                </div>   
                <div>
                    <p style = {{margin: '15px', 'fontWeight': 'bold'}}> object-fit :  img is resized within its container </p>
                    <p style = {{margin: '15px', 'fontWeight': 'bold'}}> object-position : img position within container </p>
                    <p style = {{color: 'grey'}} > <span style = {{color: 'darkslategrey', marginRight: '15px'}} > object-fit: none </span>     may result rendered position location that is outside of container </p>
                    <p> contain - img scaled while preserving its aspect ratio to fit into container (may cause 'letterbox' effect') </p>
                    <p> cover - img resized to fit while preserving aspect ratio to fit into container (may cause clipping) </p>
                    <p> fill - img resized to fit into container (may cresult in stretching) </p>
                    <p> none - img not resized and fills container (mat causes zoomed-in effect)</p>
                    <p> scale-down - img resized to smaller result of applying none or contain </p>
                </div>

            </div>     
        </div>

    
    )

}


const Fruits = () => {

    // returns closest matching route of component or parents without actually rendering the route
    const {url, path} = useRouteMatch();


    const matched = useRouteMatch();
    console.log(' matched  ', matched);
    
    console.log(' url routeMatch', url);  // routeMatch /fruits
    console.log(' path routeMatch', path);  // routeMatch /fruits

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