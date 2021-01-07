import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.scss'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"

//Page Imports
import Home from './componets/Home/home';
import Header from './componets/Header/Navbar';
import CoffeeBase from './componets/Coffee/coffee';
import AboutBase from './componets/About/about';
import SweetsBase from './componets/Sweets/sweets';
import EatsBase from './componets/Eats/eats';

function App() {
  return (  
    <main>
      <Header />
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


