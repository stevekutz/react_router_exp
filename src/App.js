// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import About from './comp/About';
import Home from './comp/Home';
import Products from './comp/Products';
import RenderPropPage from './comp/RenderPropPage';
import Protected from './comp/Protected';


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );


function App() {
  return (
    <div>

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to = '/renderproppage'>RenderPropPage</Link>
        <Link to='/protected'>Protected</Link>

        <Route exact path='/'><Home /></Route>
        <Route path='/about' component = {About}/>
        <Route path='/products'><Products /></Route>
        <Route path = '/renderproppage' render = { (props) => <RenderPropPage  {...props} />} />
        <Route path='/protected'><Protected /></Route>


      { /* Route components are rendered if the path prop matches the current URL */}
      
      
        

    </div>
  );
}

export default App;

            // <Link to = '/' comp = {Home}><Home /></Link>
            // <Link to = '/about' comp = {About}><About /></Link>
      