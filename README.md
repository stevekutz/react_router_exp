#### All matching routes rendered inclusively

~~~ js
//App.js

    <Route exact path='/'><Home /></Route>
    <Route path='/about' component = {About}/>
    <Route path='/products'><Products /></Route>
    <Route path='/jokes'><Jokes /></Route>
    <Route path='/tvshows'><TVShows /></Route>
    <Route path='/protected'><Protected /></Route>

    <Route path='/:id'>
        <p> Show this TEXT unless in / </p>
    
    </Route>

~~~

#### Only rendered when path matches
- with `Switch`, only first matching child route is rendered
~~~ js
        <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/about' component = {About}/>
            <Route path='/products'><Products /></Route>
            <Route path='/jokes'><Jokes /></Route>
            <Route path='/tvshows'><TVShows /></Route>
            <Route path='/protected'><Protected /></Route>

            <Route path='/jokes/:id'>
                <p> ONLY renders with matching /jokes/:id path, not seen in any other path </p>
            
            </Route>
        </Switch>
~~~

#### `useRouteMatch` hook
- React Router uses this hook to access the `match` obj
     - `path` is used for accessing nested routes
     - `url` is used for accessing nested links
     - `isExact` Boolean indicates if entire URL was matched
     - `params` are key-value pairs

#### `useParams` hook
`- const {jokeid} = useParams();`
- returns key-value pairs from Joke component
- `key` is the id