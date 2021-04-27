/* eslint-disable react/no-danger-with-children */
import {useState, useEffect} from 'react';

import {useParams, useHistory} from 'react-router-dom';

import useFetch from '../customHooks/useFetch';

const TVshow = (props) => {

    const {showID} = useParams();
    const history = useHistory();

    const {data: movieInfo, isPending, error} = useFetch(`http://api.tvmaze.com/shows/` + showID)

    return (
        <div>
            id is {showID}  
            {isPending ? <div> Loading </div> : null }
            
            {movieInfo && 
                <div> 
                
                    <div> { movieInfo.name } </div>
                    <div dangerouslySetInnerHTML = {{ __html: movieInfo.summary }}/>


                    <button
                        onClick = {() => history.goBack()}
                    
                    > Return to Movie List </button>
                
                
                
                </div>
            }
            
          

        </div>

    )



}

export default TVshow;