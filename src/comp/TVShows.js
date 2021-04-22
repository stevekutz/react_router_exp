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
    
        props.toggleShowLinks();
        // history.push('/tvshows')
        history.goBack();
    
    }

    return (
        <div>
            Show ID is {showID}

            <button
                // onClick = {() => history.push('/tvshows')}
                onClick = {backToList}
            > back to TV Show list </button>


            <Link 
                to = '/tvshows'
                onClick = {backToList}
                // onClick = {props.toggleShowLinks}    
                // onClick = {props.setShowLinks(true)}
                > TV Show List </Link>

        </div>
    )

}


const TVShows = () => {

    const { url } = useRouteMatch();

    const [showLinks, setShowLinks] = useState(true);

    const history  = useHistory();
    console.log(' history >> ', history);

    console.log('url', url);


    const toggleShowLinks = () => {
        setShowLinks(!showLinks);
    
    }

    // useEffect( () => {
    //     console.log("RETURN to TVSHOWS ")
    
    // },[url])

// {showLinks && tvData.map( (show) => {

    tvData.sort((a,b) => {
    
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        if (aName < bName) {
            return -1;
        }
        
        if (aName > bName) {
            return 1;
        }

        return 0;

    })

    // console.log("sortedArr ", sortArr);

    return (
        <div>
            TVShows
            {showLinks && tvData.map( (show) => {
  
                return (
                    <div 
                        key = {show.id}
                        >
                        <Link 
                            
                            to = {`${url}/${show.id}`}
                            onClick = {toggleShowLinks}
                            // showLinks = {showLinks}
                            // setShowLinks = {setShowLinks}
                        > {show.name} {show.id}</Link>

                    </div>
                )
            
            })}

        <Switch>
            <Route exact path = {url}></Route>

            <Route path = {`${url}/:showID`}>
                <TVshow 
                    toggleShowLinks = {toggleShowLinks}
                    setShowLinks = {setShowLinks}
                />
            </Route>
        
        
        </Switch>
        



        </div>   
    )
}

export default TVShows;