import React from 'react';
import {Link, Switch, useHistory, useLocation, useRouteMatch, Route, useParams} from 'react-router-dom'
import {tvShowData as tvData, tvShowData} from '../data/tvshows_data';

const TVshow = () => {

    const {showID} = useParams();

    // const show = tvShowData.find( s => s.id === Number(showID)); 

    // console.log('show  ', show);
    console.log('TVshow showID >>> ', showID);

    return (
        <div>
            Show ID is {showID}
        </div>
    )

}


const TVShows = () => {

    const { url } = useRouteMatch();

    console.log('url', url);

    return (
        <div>
            TVShows
            
            {tvData.map( (show) => {
  
            return (
                <div key = {show.id}>
                    <Link 
                        to = {`${url}/${show.id}`}
                    
                    > {show.name} {show.id}</Link>

                </div>
            )
            
            })}

        <Switch>
            <Route exact path = {url}></Route>

            <Route path = {`${url}/:showID`}>
                <TVshow />
            </Route>
        
        
        </Switch>
        



        </div>   
    )
}

export default TVShows;