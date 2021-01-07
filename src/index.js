import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"

//Page Imports
import Home from './componets/Home';
import Navbar from './componets/Header/Navbar';
import CoffeeBase from './componets/Coffee/coffee';
import AboutBase from './componets/About/about';
import SweetsBase from './componets/Sweets/sweets';
import EatsBase from './componets/Eats/eats';

function App() {
  return (
    
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={AboutBase}/>
        <Route path="/coffee" component={CoffeeBase}/>
        <Route path="/sweets" component={SweetsBase}/>
        <Route path="/eats" component={EatsBase}/>
      </Switch>
    </main>
  )
}



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


