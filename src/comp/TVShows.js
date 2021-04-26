import React, {useState, useEffect, useRef} from 'react';
import {Link, Switch, useHistory, useLocation, useRouteMatch, Route, useParams} from 'react-router-dom'
import {tvShowData as tvData, tvShowData} from '../data/tvshows_data';


import useFetch from '../customHooks/useFetch';

import './tvshows.css';

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
                // onClick = {backToList}
                onClick = {props.toggleShowLinks}    
                // onClick = {props.setShowLinks(true)}
                > TV Show List </Link>

        </div>
    )

}


const TVShows = () => {

    const { url } = useRouteMatch();

    const [showLinks, setShowLinks] = useState(true);
    const [searchVal, setSearchVal] = useState('');


    // return { data, isPending, error };
    const [tvDataAPI, isPending, error] = useFetch('http://api.tvmaze.com/shows');

    // console.log("tvDataAPI    ", tvDataAPI)
    // console.log(" tvDataAPI first >> " , tvDataAPI[0].name);
    console.log(" isPending ", isPending)
    console.log( " data ", error );

    const history  = useHistory();
    // const location = useLocation();

    const {pathname} = useLocation();
    // console.log(' history >> ', history);
    // console.log(' location >> ', location.pathname);

    // console.log('url', url);



    const toggleShowLinks = () => {
        setShowLinks(!showLinks);
    
    }

    useEffect( () => {
        
        if (pathname === '/tvshows') {
            // console.log("RETURN to TVSHOWS ");
            setShowLinks(true);

        
        }
    
    },[pathname]);



    tvDataAPI.sort((a,b) => {
    
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
        <div className = 'main-container'>

            {showLinks && 
                <div className = 'header-container'> 
                    <h1 className = 'title'> TVShows </h1>
                    <div className = 'search-container'> 
                        <div className = 'search-title'> Search </div>
                        
                        <input
                            type = 'text'
                            className = 'input-search'
                            value = {searchVal}
                            onChange = {(e) => setSearchVal(e.target.value) }
                        />
                        <button 
                            className = 'button-clear'
                            onClick = {() => {setSearchVal('')}}
                    > Clear </button>
                    </div>
                </div>
                
            
            }
            <div >
            {isPending ? <div> LOADING </div> : 
            

                <div className = 'movie-container' > 
                    
                    
   
                            {showLinks && tvDataAPI
                                .filter( (data) => {

                                    if (searchVal === null) {
                                            return data
                                        }
                                        else if (data.name.toLowerCase().includes(searchVal.toLowerCase()) ) {
                                            return data                            
                                        } 
                                    }                
                                )
                                .map( (show) => {
                                
                                    return (
                                        <div                         
                                            key = {show.id}
                                            
                                        >
                                            <Link 
                                                
                                                to = {`${url}/${show.id}`}
                                                // onClick = {setShowLinks(false)}
                                                onClick = {toggleShowLinks}
                                                className = 'movie-card'
                                                // onClick = {setShowLinks(true)}
                                                // showLinks = {showLinks}
                                                // setShowLinks = {setShowLinks}
                                            >
                                            <img className = 'movie-img' src = {show.image.medium} alt = {show.name}/>
                                            </Link>
                                        </div>
                                    )
                            
                                }
                            )}

                    
                    
                    
                    
                   
           
                    

                </div>}

            </div> 


        <Switch>
            <Route exact path = {url}></Route>

            <Route exact path = {`${url}/:showID`}>
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