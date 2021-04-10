// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import About from './comp/About';
import Home from './comp/Home';
import Products from './comp/Products';
import Jokes from './comp/Jokes';
import Protected from './comp/Protected';

import {
    NavContainer,
    NavItemLink,
    
} from './styles/app_styles';


function App() {
  return (
    <div>
        <NavContainer>
            <NavItemLink to='/'>Home</NavItemLink>
            <NavItemLink to='/about'>About</NavItemLink>
            <NavItemLink to='/products'>Products</NavItemLink>
            <NavItemLink to = '/jokes'>Jokes</NavItemLink>
            <NavItemLink to='/protected'>Protected</NavItemLink>
        
        </NavContainer>

        <Route exact path='/'><Home /></Route>
        <Route path='/about' component = {About}/>
        <Route path='/products'><Products /></Route>
        <Route path='/protected'><Protected /></Route>


      { /* Route components are rendered if the path prop matches the current URL */}
      
      
        

    </div>
  );
}

export default App;

      