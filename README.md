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

