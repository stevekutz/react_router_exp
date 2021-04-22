import React, {useState, useEffect} from 'react';
import {Link, Switch, useHistory, useLocation, useRouteMatch, Route, useParams} from 'react-router-dom'
import {tvShowData as tvData, tvShowData} from '../data/tvshows_data';

const TVshow = (props) => {

    const {showID} = useParams();
    const history  = useHistory();

    // const show = tvShowData.find( s => s.id === Number(showID)); 

    // console.log('show  ', show);
    console.log('TVshow showID >>> ', showID);
    // console.log(' history >> ', history);


    const backToList = () => {
    
        props.toggleLinks();
        history.push('/tvshows')
    
    }

    return (
        <div>
            Show ID is {showID}
        <button
            // onClick = {() => history.push('/tvshows')}
            onClick = {backToList}
        > back to TV Show list </button>

        </div>
    )

}


const TVShows = () => {

    const { url } = useRouteMatch();

    const [showLinks, setShowLinks] = useState(true);

    const history  = useHistory();
    console.log(' history >> ', history);

    console.log('url', url);


    const toggleLinks = () => {
        setShowLinks(!showLinks)
    
    }

    // useEffect( () => {
    //     console.log("RETURN to TVSHOWS ")
    
    // },[url])


    return (
        <div>
            TVShows
            
            {showLinks && tvData.map( (show) => {
  
                return (
                    <div key = {show.id}>
                        <Link 
                            to = {`${url}/${show.id}`}
                            onClick = {toggleLinks}
                        > {show.name} {show.id}</Link>

                    </div>
                )
            
            })}

        <Switch>
            <Route exact path = {url}></Route>

            <Route path = {`${url}/:showID`}>
                <TVshow toggleLinks = {toggleLinks}/>
            </Route>
        
        
        </Switch>
        



        </div>   
    )
}

export default TVShows;