import React, {useState, useEffect} from 'react';

import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';

import apple from '../data/img/apple.jpg';
import banana from '../data/img/banana.jpg';
import grape from '../data/img/grape.jpg';

const Fruit = () => {

    const {fruitType} = useParams();

    const [optionVal, setOptionVal] = useState('contain');

    const changeOption = (e) => {
        console.log(' e says ++ ', Object.keys(e.target.value));
        setOptionVal(e.target.value);
    }


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